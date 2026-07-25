import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { privacySections } from "@/components/legal/legal-page-content";
import { createSeoMetadata } from "@/lib/seo";

const description = "How OrganoCity handles information for website visitors, retail customers, wholesale buyers, and international orders.";

export const metadata = createSeoMetadata({ title: "Privacy Policy", description, path: "/privacy" });
export const revalidate = 86400;

export default function PrivacyPage() {
  return <LegalPageLayout title="Privacy Policy" description={description} path="/privacy" lastUpdated="July 25, 2026" sections={privacySections} />;
}
