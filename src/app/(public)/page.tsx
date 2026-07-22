import { prisma } from "@/lib/prisma";
import { serializeVideo } from "@/lib/video-utils";
import { HomeHeroSection } from "./_components/HomeHeroSection";
import { HomeContentSections } from "./_components/HomeContentSections";
import { createSeoMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

async function safeHomeQuery<T>(
  label: string,
  query: () => Promise<T>,
  fallback: T,
): Promise<T> {
  try {
    return await query();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.warn(`Using fallback for home page ${label}: ${message}`);
    return fallback;
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.organocity.com/#website",
  name: "OrganoCity",
  url: "https://www.organocity.com",
  publisher: { "@id": "https://www.organocity.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.organocity.com/products?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

function parseStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

export const metadata = createSeoMetadata({
  title: "OrganoCity | Himalayan Pink Salt, Shilajit & Herbal Products",
  description: "Shop authentic Himalayan pink salt, pure Shilajit, handcrafted salt lamps and natural herbal wellness products from OrganoCity Pakistan.",
  path: "/",
  keywords: ["Natural Wellness Store Pakistan", "Buy Himalayan Pink Salt Online Pakistan", "OrganoCity Pakistan", "Himalayan Salt Lamps Pakistan", "Himalayan Shilajit Pakistan"],
});

export default async function Page() {
   const [categories, featuredCollections, featuredBlogs, homeVideos, certificates] = await Promise.all([
     safeHomeQuery(
       "categories",
       () => prisma.category.findMany({
         orderBy: [{ order: "asc" }, { name: "asc" }],
         select: { id: true, name: true, slug: true, image: true, parentId: true, order: true },
       }),
       [],
     ),
    safeHomeQuery(
      "featured collections",
      () => prisma.collection.findMany({
        where: {
          OR: [
            { isFeatured: true },
            { handle: { in: ["new-arrivals", "best-sellers"] } },
          ],
        },
        orderBy: [
          { isFeatured: "desc" },
          { updatedAt: "desc" },
        ],
        take: 20,
        select: { id: true, handle: true, title: true, image: true, isFeatured: true, productHandles: true },
      }),
      [],
    ),
    safeHomeQuery(
      "featured blogs",
      () => prisma.blogPost.findMany({
        where: { status: "published", isFeatured: true },
        orderBy: { publishedAt: "desc" },
        take: 20,
        select: { id: true, title: true, slug: true, excerpt: true, featuredImage: true, publishedAt: true, content: true },
      }),
      [],
    ),
    safeHomeQuery(
      "home videos",
      () => prisma.video.findMany({
        where: { active: true, placement: "HOMEPAGE" },
        orderBy: [{ featured: "desc" }, { displayOrder: "asc" }, { createdAt: "desc" }],
        take: 8,
      }),
      [],
    ),
    safeHomeQuery(
      "certificate organizations",
      () => prisma.certificate.findMany({
        where: { active: true, organizationLogo: { not: "" } },
        orderBy: [{ featured: "desc" }, { displayOrder: "asc" }],
        select: { id: true, title: true, organizationName: true, organizationLogo: true },
      }),
      [],
    ),

  ]);

const homeCollections = featuredCollections.map((collection) => ({
  ...collection,
  productHandles: parseStringArray(collection.productHandles),
}));

const collectionProductHandles = homeCollections
  .filter((collection) => ["new-arrivals", "best-sellers"].includes(collection.handle))
  .flatMap((collection) => collection.productHandles);

const [recentProducts, collectionProducts] = await Promise.all([
  safeHomeQuery(
    "all products",
    () => prisma.product.findMany({
      where: { status: "ACTIVE" },
      orderBy: { updatedAt: "desc" },
      take: 40,
      select: { id: true, handle: true, title: true, price: true, compareAtPrice: true, featuredImage: true, images: true, tags: true, categoryId: true, subcategoryId: true, isFeatured: true, displayOrder: true, createdAt: true, updatedAt: true },
    }),
    [],
  ),
  collectionProductHandles.length
    ? safeHomeQuery(
        "home collection products",
        () => prisma.product.findMany({
          where: {
            status: "ACTIVE",
            handle: { in: collectionProductHandles },
          },
          select: { id: true, handle: true, title: true, price: true, compareAtPrice: true, featuredImage: true, images: true, tags: true, categoryId: true, subcategoryId: true, isFeatured: true, displayOrder: true, createdAt: true, updatedAt: true },
        }),
        [],
      )
    : Promise.resolve([]),
]);

const allProducts = Array.from(
  new Map([...collectionProducts, ...recentProducts].map((product) => [product.handle, product])).values(),
);

return (
       <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        <div className="flex flex-col bg-gray-50">
          <HomeHeroSection />
          <h1 className="sr-only">OrganoCity – Pure Himalayan Wellness</h1>

          <HomeContentSections
            categories={categories}
            products={allProducts}
            collections={homeCollections}
            featuredBlogs={featuredBlogs}
            homeVideos={homeVideos.map(serializeVideo)}
            certificates={certificates}
          />
      </div>
    </>
  );
}
