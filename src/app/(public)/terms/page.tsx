import { PolicyPageContent } from "../privacy/_components/policy-page-content";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Terms and Conditions",
  description: "Terms and conditions for using OrganoCity Pakistan and purchasing natural wellness products.",
  path: "/terms",
});

export const revalidate = 3600;

export default function TermsPage() {
  return (
    <PolicyPageContent
      keyName="termsOfService"
      title="Terms and Conditions"
      fallbackBody="<p>Welcome to OrganoCity. These terms and conditions outline the rules and regulations for the use of our Website.</p>"
    />
  );
}

