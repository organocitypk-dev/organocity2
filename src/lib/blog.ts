import { cache } from "react";
import { prisma } from "@/lib/prisma";

export const BLOG_PAGE_SIZE = 9;

export const publishedBlogWhere = {
  status: "published",
  isIndexable: true,
  publishedAt: { lte: new Date() },
} as const;

export const getPublishedPost = cache(async (slug: string) =>
  prisma.blogPost.findFirst({ where: { slug, ...publishedBlogWhere } }),
);

export function authorSlug(name: string) {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function cleanSlug(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
