import { Metadata } from "next";
import type { JsonValue } from "@prisma/client/runtime/library";
import { getCategoriesForFilters, getAllProductsForFilter } from "./service";
import { ProductsPageContent } from "./_components/products-page-content";

export const revalidate = 60;

/* ---------------- SEO METADATA ---------------- */

export const metadata: Metadata = {
  title: "Shop Products – OrganoCity",
  description:
    "OrganoCity – Shop premium products, natural wellness products and accessories",

  keywords: [
    "products",
    "salt lamps",
    "herbal products",
    "ultrabooks",
    "budget products",
    "related natural products",
    "monitors",
    "keyboards",
    "mice",
    "product bags",
    "OrganoCity",
  ],

  openGraph: {
    title: "Shop Products – OrganoCity",
    description:
      "Browse salt lamps, business ultrabooks, accessories and more at OrganoCity.",
    url: "https://www.organocity.com/products",
    siteName: "OrganoCity",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shop Products – OrganoCity",
    description:
      "Discover premium products, natural wellness products and natural products at OrganoCity.",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.organocity.com/products",
  },
};

/* ---------------- PAGE ---------------- */

export default async function Page({
  searchParams,
}: {
  searchParams?: { q?: string; category?: string; subcategory?: string; tag?: string; min?: string; max?: string };
}) {
  const initialCategorySlug = (searchParams?.category ?? "").trim();

  let categories: Array<{ id: string; name: string; slug: string; order: number; subcategories: Array<{ id: string; name: string; slug: string; parentId: string | null; order: number }> }> = [];
  let allProducts: Array<{ id: string; handle: string; title: string; price: number; compareAtPrice: number | null; featuredImage: string | null; images: JsonValue | null; tags: JsonValue | null; description: string | null; sku: string | null; productType: string | null; vendor: string; categoryId: string | null; subcategoryId: string | null; isFeatured: boolean }> = [];

  try {
    [categories, allProducts] = await Promise.all([
      getCategoriesForFilters(),
      getAllProductsForFilter(),
    ]);
  } catch (error) {
    console.error("Failed to load products:", error);
  }

  return (
    <ProductsPageContent
      categories={categories}
      initialProducts={allProducts}
      initialCategorySlug={initialCategorySlug}
    />
  );
}

