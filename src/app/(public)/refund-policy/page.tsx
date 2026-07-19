import { PolicyPageContent } from "../privacy/_components/policy-page-content";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Refund Policy",
  description: "Review the refund and return policy for products and natural products purchased from OrganoCity Pakistan.",
  path: "/refund-policy",
});

export const dynamic = "force-dynamic";

export default function RefundPolicyPage() {
  return (
    <PolicyPageContent
      keyName="refundPolicy"
      title="Refund Policy"
      fallbackBody="<p>Thank you for shopping at OrganoCity. If you are not entirely satisfied with your purchase, we're here to help.</p>"
    />
  );
}

