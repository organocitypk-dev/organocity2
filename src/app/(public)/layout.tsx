import { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChatIntegrations } from "@/components/integrations/chat-integrations";
import { SiteLoader } from "@/components/core/site-loader";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/seo";

const businessSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "OrganoCity",
    url: SITE_URL,
    logo: `${SITE_URL}/logo/organocity.png`,
    sameAs: ["https://www.facebook.com/organocity", "https://www.instagram.com/organocity"],
  },
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: "OrganoCity",
    url: SITE_URL,
    image: `${SITE_URL}/logo/organocity.png`,
    priceRange: "PKR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Swabi Topi Road",
      addressLocality: "Swabi",
      addressRegion: "Khyber Pakhtunkhwa",
      addressCountry: "PK",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  },
];

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="public-site flex min-h-screen flex-col">
      <JsonLd data={businessSchemas} />
      <Header />
      <SiteLoader />
      <main className="flex-grow bg-[#f5f5f5] pb-16 md:pb-0">{children}</main>
      <Footer />
      <MobileBottomNav />
      <ChatIntegrations />
    </div>
  );
}

