import { prisma } from "@/lib/prisma";
import { serializeVideo } from "@/lib/video-utils";
import { VideosPageClient } from "@/components/features/videos/videos-page-client";
import { createSeoMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = createSeoMetadata({
  title: "Product Videos and Tech Guides Pakistan",
  description: "Watch OrganoCity product demos, product buying guides, Shilajit videos, natural wellness guidance and product updates for Pakistan.",
  path: "/videos",
  keywords: ["Product guides Pakistan", "Natural wellness product videos", "Shilajit Pakistan"],
});

export default async function VideosPage() {
  const videos = await prisma.video.findMany({
    where: { active: true },
    orderBy: [{ featured: "desc" }, { displayOrder: "asc" }, { createdAt: "desc" }],
  });

  return <VideosPageClient videos={videos.map(serializeVideo)} />;
}
