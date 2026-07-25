import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { disclaimerSections } from "@/components/legal/legal-page-content";
import { createSeoMetadata } from "@/lib/seo";

const description = "Important limitations concerning OrganoCity product information, natural variation, wellness content, and third-party material.";

export const metadata = createSeoMetadata({ title: "Disclaimer", description, path: "/disclaimer" });
export const revalidate = 86400;

export default function DisclaimerPage() {
  return <LegalPageLayout title="Disclaimer" description={description} path="/disclaimer" lastUpdated="July 25, 2026" sections={disclaimerSections} />;
}
