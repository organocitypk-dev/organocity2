import { FaqPageContent } from "./_components/faq-page-content";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Product Buying FAQ Pakistan",
  description: "Answers about buying products in Pakistan, delivery, tested Shilajit products, salt lamps, accessories, warranty and support from OrganoCity Pakistan.",
  path: "/faq",
  keywords: ["Product FAQ Pakistan", "Buy Himalayan Pink Salt Online Pakistan", "Product warranty Pakistan"],
});

const faqItems = [
  ["What types of products do you sell?", "We stock Himalayan Shilajit, herbal products, salt lamps, and premium accessories from trusted natural product sources in Pakistan."],
  ["Are your devices tested before sale?", "Yes. Each product is inspected for battery health, keyboard responsiveness, display quality, ports, and charging performance before listing."],
  ["Do you offer warranty support?", "We provide warranty-backed support for eligible products and help with after-sales questions related to setup, repairs, and replacement concerns."],
  ["Do you deliver across Pakistan?", "Yes. We ship to customers across Pakistan and also assist with pickup and delivery coordination where available."],
  ["Do you sell accessories too?", "Yes. We stock chargers, product bags, mice, keyboards, USB-C hubs, storage, memory, and other related natural products."],
];

export default function FAQPage() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]),
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        },
      ]} />
      <FaqPageContent />
    </>
  );
}

