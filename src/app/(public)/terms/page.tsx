import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { termsSections } from "@/components/legal/legal-page-content";
import { createSeoMetadata } from "@/lib/seo";

const description = "Terms governing OrganoCity retail, wholesale, private-label, and export orders for Himalayan salt and natural products.";

export const metadata = createSeoMetadata({ title: "Terms & Conditions", description, path: "/terms" });
export const revalidate = 86400;

export default function TermsPage() {
  return <LegalPageLayout title="Terms & Conditions" description={description} path="/terms" lastUpdated="July 25, 2026" sections={termsSections} />;
}
