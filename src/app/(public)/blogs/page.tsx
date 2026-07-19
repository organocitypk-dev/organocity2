import { prisma } from "@/lib/prisma";
import { BlogPageContent } from "./_components/blog-page-content";
import { createSeoMetadata } from "@/lib/seo";

/* ---------------- SEO METADATA ---------------- */
export const dynamic = "force-dynamic";

/* ---------------- SEO METADATA ---------------- */
export const metadata = createSeoMetadata({
  title: "Product Buying Guides Pakistan",
  description: "Product buying guides, Shilajit advice, Himalayan salt, Shilajit, and herbal product guidance from OrganoCity Pakistan.",
  path: "/blogs",
  keywords: ["Product buying guide Pakistan", "Shilajit guide Pakistan", "Himalayan Salt Lamps Pakistan"],
});

export default async function BlogPage() {
  const articles = await prisma.blogPost.findMany({
    where: { status: "published" },
    orderBy: { publishedAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      featuredImage: true,
      publishedAt: true,
    },
  });

  return <BlogPageContent articles={articles} />;
}

