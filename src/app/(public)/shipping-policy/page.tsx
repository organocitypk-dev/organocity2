import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { shippingSections } from "@/components/legal/legal-page-content";
import { createSeoMetadata } from "@/lib/seo";

const description = "Shipping guidance for OrganoCity domestic, wholesale, private-label, and international export orders.";

export const metadata = createSeoMetadata({ title: "Shipping Policy", description, path: "/shipping-policy" });
export const revalidate = 86400;

export default function ShippingPolicyPage() {
  return <LegalPageLayout title="Shipping Policy" description={description} path="/shipping-policy" lastUpdated="July 25, 2026" sections={shippingSections} />;
}
