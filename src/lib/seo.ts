import type { Metadata } from "next";

export const SITE_NAME = "OrganoCity";
export const SITE_URL = "https://www.organocity.com";
export const DEFAULT_OG_IMAGE = "/logo/organocity.png";

export const pakistanWellnessKeywords = [
  "Natural Wellness Store Pakistan",
  "Buy Himalayan Pink Salt Online Pakistan",
  "Himalayan pink salt Pakistan",
  "Natural Products Pakistan",
  "OrganoCity Pakistan",
  "OrganoCity Pakistan",
  "Himalayan Salt Lamps Pakistan",
  "Wholesale Himalayan Pink Salt",
  "Shilajit Pakistan",
  "Himalayan Shilajit Pakistan",
  "Herbal Products Pakistan",
  "Natural Wellness Products Pakistan",
  "Himalayan Salt Products",
  "OrganoCity Pakistan",
  "edible pink salt Pakistan",
  "black salt Pakistan",
  "pure Shilajit resin Pakistan",
  "bath salt Pakistan",
  "salt building blocks Pakistan",
  "salt cooking tiles Pakistan",
  "bulk Himalayan salt supplier Pakistan",
  "private label Himalayan salt Pakistan",
  "Himalayan salt exporter Pakistan",
];

type SeoMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string | null;
  type?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function createSeoMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noIndex = false,
  publishedTime,
  modifiedTime,
  authors,
}: SeoMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const images = image
    ? [{ url: absoluteUrl(image), width: 1200, height: 630, alt: title }]
    : undefined;

  return {
    title,
    description,
    keywords: [...new Set([...keywords, ...pakistanWellnessKeywords])],
    alternates: { canonical },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type,
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images,
      ...(type === "article" ? { publishedTime, modifiedTime, authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images?.map((item) => item.url),
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
