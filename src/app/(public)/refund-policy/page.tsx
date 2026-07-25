import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { refundSections } from "@/components/legal/legal-page-content";
import { createSeoMetadata } from "@/lib/seo";

const description = "Refund and return guidance for eligible OrganoCity retail, wholesale, customized, and export purchases.";

export const metadata = createSeoMetadata({ title: "Refund & Return Policy", description, path: "/refund-policy" });
export const revalidate = 86400;

export default function RefundPolicyPage() {
  return <LegalPageLayout title="Refund & Return Policy" description={description} path="/refund-policy" lastUpdated="July 25, 2026" sections={refundSections} />;
}
