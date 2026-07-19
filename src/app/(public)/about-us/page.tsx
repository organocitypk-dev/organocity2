import { prisma } from "@/lib/prisma"
import { serializeVideo } from "@/lib/video-utils"
import { FeaturedVideoSection } from "@/components/features/videos/featured-video-section"
import { AboutPageContent } from "./_components/about-page-content"
import { createSeoMetadata } from "@/lib/seo"

export const metadata = createSeoMetadata({
  title: "About OrganoCity Pakistan",
  description: "Learn about OrganoCity Pakistan, founded in 2018 by Ihsan ul Haq to provide authentic Himalayan pink salt, Shilajit and natural wellness products.",
  path: "/about-us",
  keywords: ["OrganoCity Pakistan", "Ihsan ul Haq", "Natural Products Pakistan", "Shilajit Pakistan", "Himalayan Pink Salt Pakistan"],
})

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const aboutVideos = await prisma.video.findMany({
    where: { active: true, placement: "ABOUT" },
    orderBy: [{ featured: "desc" }, { displayOrder: "asc" }, { createdAt: "desc" }],
    take: 8,
  });

  return (
    <>
      <AboutPageContent />
      <FeaturedVideoSection
        videos={aboutVideos.map(serializeVideo)}
        heading="Meet our work through video"
        description="A separate featured story for the about page, managed from the admin video module."
      />
    </>
  );
}


