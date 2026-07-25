import type { Metadata } from "next";
import DOMPurify from "dompurify";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { authorSlug, getPublishedPost, publishedBlogWhere } from "@/lib/blog";
import { prisma } from "@/lib/prisma";
import { absoluteUrl, breadcrumbSchema, createSeoMetadata } from "@/lib/seo";

export const revalidate = 900;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublishedPost(slug);
  if (!article) return createSeoMetadata({ title: "Article Not Found", description: "This article is not available.", path: `/blog/${slug}`, noIndex: true });
  const tags = Array.isArray(article.tags) ? article.tags.filter((tag): tag is string => typeof tag === "string") : [];
  const related = Array.isArray(article.relatedKeywords) ? article.relatedKeywords.filter((tag): tag is string => typeof tag === "string") : [];
  return createSeoMetadata({
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt || `Read ${article.title} from OrganoCity.`,
    path: article.canonicalUrl || `/blog/${slug}`,
    type: "article",
    image: article.openGraphImage || article.featuredImage,
    keywords: [article.focusKeyword, ...related, ...tags].filter((item): item is string => Boolean(item)),
    publishedTime: article.publishedAt?.toISOString(),
    modifiedTime: (article.contentRevisedAt || article.updatedAt).toISOString(),
    authors: [article.author],
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getPublishedPost(slug);
  if (!article) notFound();

  const [category, related, adjacent, products] = await Promise.all([
    article.categoryId ? prisma.category.findUnique({ where: { id: article.categoryId }, select: { name: true, slug: true } }) : null,
    prisma.blogPost.findMany({
      where: { ...publishedBlogWhere, id: { not: article.id }, ...(article.categoryId ? { categoryId: article.categoryId } : {}) },
      orderBy: { publishedAt: "desc" }, take: 3, select: { title: true, slug: true, excerpt: true },
    }),
    prisma.blogPost.findMany({
      where: publishedBlogWhere, orderBy: { publishedAt: "desc" }, select: { title: true, slug: true, publishedAt: true },
    }),
    article.categoryId ? prisma.product.findMany({
      where: { status: "ACTIVE", OR: [{ categoryId: article.categoryId }, { subcategoryId: article.categoryId }] },
      take: 3, select: { title: true, handle: true },
    }) : [],
  ]);
  const position = adjacent.findIndex((item) => item.slug === slug);
  const previous = position >= 0 ? adjacent[position + 1] : null;
  const next = position > 0 ? adjacent[position - 1] : null;
  const path = `/blog/${slug}`;
  const modified = article.contentRevisedAt || article.updatedAt;
  const showUpdated = article.contentRevisedAt && article.publishedAt && article.contentRevisedAt > article.publishedAt;
  const image = article.featuredImage ? absoluteUrl(article.featuredImage) : undefined;
  const cleanHtml = DOMPurify.sanitize(article.content || "");

  return (
    <article className="bg-background">
      <JsonLd data={[
        breadcrumbSchema([
          { name: "Home", path: "/" }, { name: "Blog", path: "/blog" },
          ...(category ? [{ name: category.name, path: `/blog/category/${category.slug}` }] : []),
          { name: article.title, path },
        ]),
        {
          "@context": "https://schema.org", "@type": ["BlogPosting", "Article"], "@id": `${absoluteUrl(path)}#article`,
          headline: article.title, description: article.seoDescription || article.excerpt,
          url: absoluteUrl(path), mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
          image: image ? { "@type": "ImageObject", url: image, caption: article.featuredImageAlt || article.title } : undefined,
          datePublished: article.publishedAt?.toISOString(), dateModified: modified.toISOString(),
          articleSection: category?.name, keywords: [article.focusKeyword, ...(Array.isArray(article.tags) ? article.tags : [])].filter(Boolean).join(", "),
          author: { "@type": "Person", name: article.author, url: absoluteUrl(`/blog/author/${authorSlug(article.author)}`), description: article.authorBio || undefined },
          publisher: { "@type": "Organization", "@id": `${absoluteUrl("/")}#organization`, name: "OrganoCity", logo: { "@type": "ImageObject", url: absoluteUrl("/logo/organocity.png") } },
        },
      ]} />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <Link href="/blog">Blog</Link>
          {category && <> <span aria-hidden="true">/</span> <Link href={`/blog/category/${category.slug}`}>{category.name}</Link></>}
        </nav>
        <header>
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-5xl">{article.title}</h1>
          {article.excerpt && <p className="mt-5 text-lg leading-8 text-muted-foreground">{article.excerpt}</p>}
          <div className="mt-5 flex flex-wrap gap-x-3 text-sm text-muted-foreground">
            <Link href={`/blog/author/${authorSlug(article.author)}`} rel="author">{article.author}</Link>
            {article.publishedAt && <time dateTime={article.publishedAt.toISOString()}>Published {article.publishedAt.toLocaleDateString("en-US", { dateStyle: "long" })}</time>}
            {showUpdated && <time dateTime={modified.toISOString()}>Updated {modified.toLocaleDateString("en-US", { dateStyle: "long" })}</time>}
          </div>
        </header>
        {article.featuredImage && <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl"><Image src={article.featuredImage} alt={article.featuredImageAlt || article.title} fill priority sizes="(max-width: 896px) 100vw, 896px" className="object-cover" /></div>}
        <div className="prose prose-lg mt-10 max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: cleanHtml }} />

        {(category || products.length > 0) && <aside className="mt-12 rounded-2xl border p-6" aria-labelledby="explore-related">
          <h2 id="explore-related" className="text-xl font-semibold">Explore related OrganoCity products</h2>
          <div className="mt-4 flex flex-col gap-2">
            {category && <Link href={`/category/${category.slug}`}>Explore our {category.name} collection</Link>}
            {products.map((product) => <Link key={product.handle} href={`/products/${product.handle}`}>{product.title}</Link>)}
            <Link href="/wholesale">Ask about wholesale Himalayan products</Link>
          </div>
        </aside>}
        <p className="mt-10 rounded-xl bg-muted p-4 text-sm text-muted-foreground">This article is for general informational purposes and is not medical advice. Consult a qualified healthcare professional before using wellness supplements.</p>
        <section className="mt-12" aria-labelledby="author-heading">
          <h2 id="author-heading" className="text-2xl font-semibold">About the author</h2>
          <p className="mt-3"><Link href={`/blog/author/${authorSlug(article.author)}`}>{article.author}</Link>{article.authorRole ? `, ${article.authorRole}` : ""}</p>
          {article.authorBio && <p className="mt-2 text-muted-foreground">{article.authorBio}</p>}
        </section>
        {related.length > 0 && <section className="mt-12" aria-labelledby="related-heading"><h2 id="related-heading" className="text-2xl font-semibold">Related articles</h2><ul className="mt-4 space-y-3">{related.map((item) => <li key={item.slug}><Link href={`/blog/${item.slug}`}>{item.title}</Link></li>)}</ul></section>}
        <nav aria-label="Article navigation" className="mt-12 grid gap-4 border-t pt-8 sm:grid-cols-2">
          {previous ? <Link href={`/blog/${previous.slug}`}>← {previous.title}</Link> : <span />}
          {next && <Link className="sm:text-right" href={`/blog/${next.slug}`}>{next.title} →</Link>}
        </nav>
        <div className="mt-12 rounded-2xl bg-[#fcf5e8] p-6 text-center text-[#0a0a0a]"><h2 className="text-2xl font-semibold">Need product or export guidance?</h2><p className="mt-2">Our team can help with retail, wholesale, and private-label inquiries.</p><Link className="mt-4 inline-block font-semibold text-[#9b6722] underline" href="/contact">Contact OrganoCity</Link></div>
      </div>
    </article>
  );
}
