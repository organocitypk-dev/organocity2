import ContactClient from "./contact-client";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Contact OrganoCity Pakistan",
  description: "Contact OrganoCity Pakistan for Shilajit products, salt lamps, herbal products, accessories, upgrades and delivery across Pakistan.",
  path: "/contact",
  keywords: ["OrganoCity Pakistan", "Natural Products Pakistan", "OrganoCity contact"],
});

export default function ContactPage() {
  return <ContactClient />;
}

