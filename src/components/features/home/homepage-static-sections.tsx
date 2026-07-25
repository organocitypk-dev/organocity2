import Link from "next/link";
import Image from "next/image";
import {
  Box,
  CheckCircle2,
  Factory,
  Gem,
  Globe2,
  Hand,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
  Truck,
} from "@esmate/shadcn/pkgs/lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const trustItems = [
  { icon: Gem, text: "100% Authentic Himalayan Salt" },
  { icon: Factory, text: "Sourced Directly From the Mines" },
  { icon: ShieldCheck, text: "Export Quality Standards" },
  { icon: Truck, text: "Secure Nationwide & Global Shipping" },
  { icon: Box, text: "Bulk & Wholesale Available" },
];

const processSteps = [
  { icon: Factory, title: "Mining", text: "Our pink salt is sourced from Pakistan's Himalayan salt deposits using established mining and sourcing practices." },
  { icon: Hand, title: "Hand Selection", text: "Salt pieces are sorted to remove visible impurities and select suitable grades based on color, size, and intended use." },
  { icon: Gem, title: "Crushing & Grading", text: "Selected salt is prepared in fine, coarse, granule, block, tile, and other product grades for retail, wholesale, culinary, and decorative requirements." },
  { icon: SearchCheck, title: "Quality Inspection", text: "Products are inspected for consistency, cleanliness, appearance, packaging, and order requirements before approval." },
  { icon: PackageCheck, title: "Export-Grade Packing", text: "Salt is packed using suitable moisture-resistant and export-ready packaging based on product type and buyer requirements." },
  { icon: Globe2, title: "Global Delivery", text: "OrganoCity supports local and international retailers, wholesalers, distributors, and private-label buyers with order preparation and logistics coordination." },
];

export const homepageFaqItems = [
  {
    question: "Is your Himalayan pink salt natural?",
    answer: <>Yes. OrganoCity supplies Himalayan pink salt sourced from Pakistan&apos;s natural salt deposits. It is prepared according to the required product grade without unnecessary additives.</>,
    schemaAnswer: "Yes. OrganoCity supplies Himalayan pink salt sourced from Pakistan's natural salt deposits. It is prepared according to the required product grade without unnecessary additives.",
  },
  {
    question: "Where does OrganoCity source its pink salt?",
    answer: <>Our pink salt is sourced from Pakistan&apos;s Himalayan salt region, known internationally for naturally occurring pink salt deposits.</>,
    schemaAnswer: "Our pink salt is sourced from Pakistan's Himalayan salt region, known internationally for naturally occurring pink salt deposits.",
  },
  {
    question: "Do you support international orders?",
    answer: <>Yes. OrganoCity works with international buyers, wholesalers, retailers, distributors, and private-label businesses. Shipping terms, documentation, quantities, and destination requirements are confirmed before an order is finalized. Visit our <Link href="/wholesale">wholesale page</Link> to discuss an order.</>,
    schemaAnswer: "Yes. OrganoCity works with international buyers, wholesalers, retailers, distributors, and private-label businesses. Shipping terms, documentation, quantities, and destination requirements are confirmed before an order is finalized.",
  },
  {
    question: "Can I order bulk or wholesale quantities?",
    answer: <>Yes. <Link href="/wholesale">Bulk and wholesale options</Link> are available for Himalayan pink salt, black salt, salt lamps, cooking products, and selected natural products.</>,
    schemaAnswer: "Yes. Bulk and wholesale options are available for Himalayan pink salt, black salt, salt lamps, cooking products, and selected natural products.",
  },
  {
    question: "What pink salt grades are available?",
    answer: <>Available <Link href="/products">products</Link> may include fine salt, coarse salt, granules, chunks, blocks, cooking tiles, bricks, lamps, and decorative products. Actual availability comes from our current catalog.</>,
    schemaAnswer: "Available products may include fine salt, coarse salt, granules, chunks, blocks, cooking tiles, bricks, lamps, and decorative products. Actual availability comes from our current catalog.",
  },
  {
    question: "Do you supply Shilajit and herbal products?",
    answer: <>Yes. OrganoCity also offers selected Shilajit, herbal, honey, dry fruit, and natural wellness products depending on current availability.</>,
    schemaAnswer: "Yes. OrganoCity also offers selected Shilajit, herbal, honey, dry fruit, and natural wellness products depending on current availability.",
  },
  {
    question: "Do you provide export documentation?",
    answer: <>Relevant documentation may be provided according to the product, order, destination, and buyer requirements. View our available <Link href="/certificates">certificates</Link> for more information.</>,
    schemaAnswer: "Relevant documentation may be provided according to the product, order, destination, and buyer requirements. View our available certificates for more information.",
  },
  {
    question: "What is the difference between Himalayan pink salt and regular table salt?",
    answer: <>Himalayan pink salt is naturally colored by its mineral composition and is generally less heavily refined than common table salt.</>,
    schemaAnswer: "Himalayan pink salt is naturally colored by its mineral composition and is generally less heavily refined than common table salt.",
  },
  {
    question: "Do you offer private labeling?",
    answer: <>Private-label and customized packaging options may be available for eligible wholesale orders. Buyers should <Link href="/contact">contact OrganoCity</Link> to discuss minimum quantities, packaging, branding, and destination requirements.</>,
    schemaAnswer: "Private-label and customized packaging options may be available for eligible wholesale orders. Buyers should contact OrganoCity to discuss minimum quantities, packaging, branding, and destination requirements.",
  },
  {
    question: "How can international buyers request a quotation?",
    answer: <>International buyers can use the <Link href="/wholesale">wholesale form</Link>, a product quotation option, WhatsApp, email, or the <Link href="/contact">contact page</Link> to share the required product, grade, quantity, packaging, and destination.</>,
    schemaAnswer: "International buyers can use the wholesale form, a product quotation option, WhatsApp, email, or the contact page to share the required product, grade, quantity, packaging, and destination.",
  },
];

export function TrustStrip() {
  return (
    <section aria-label="Why buyers trust OrganoCity" className="border-y border-[#C6A24A]/20 bg-[#f4f1e8] px-6 py-5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {trustItems.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3 text-sm font-semibold text-gray-800">
            <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-[#C6A24A]" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function OurProcessSection() {
  return (
    <section className="bg-gray-50 px-6 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="The Story Behind Every Crystal" title="Our Process" description="At OrganoCity, purity is not only a marketing claim — it is part of our process. Every piece of pink salt begins within Pakistan's ancient salt deposits, formed over millions of years. From sourcing and selection to processing, packaging, and delivery, every stage is managed with attention to quality so buyers receive authentic, naturally mineral-rich Himalayan salt." />
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className="rounded-3xl border border-[#C6A24A]/20 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffedd5] text-[#ea580c]"><Icon aria-hidden="true" className="h-5 w-5" /></span>
                <span className="text-sm font-bold text-[#C6A24A]">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold text-gray-950">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PhilosophySection() {
  return (
    <section className="bg-white px-6 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-[#C6A24A]/20 bg-[#f4f1e8] px-6 py-10 text-center shadow-sm sm:px-10">
        <SectionHeading eyebrow="The Way Nature Intended" title="Our Philosophy" />
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">We believe natural products should not need unnecessary shortcuts. Himalayan pink salt has existed for millions of years, and our responsibility is to preserve its natural character. No unnecessary processing, no exaggerated promises, and no diluted quality — only authentic Himalayan products sourced responsibly and delivered honestly from Pakistan to the world.</p>
      </div>
    </section>
  );
}

export function IsThisYouSection() {
  const items = [
    "You want salt sourced close to its origin rather than passed through unnecessary middlemen.",
    "You care about consistent quality and export-ready preparation.",
    "You are a retailer, importer, distributor, restaurant, or wholesaler looking for a reliable supplier.",
    "You need bulk, customized, or private-label options.",
    "You value transparent communication and product traceability.",
  ];
  return (
    <section className="bg-gray-50 px-6 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-sm font-bold uppercase tracking-wider text-[#ea580c]">Still Wondering If OrganoCity Is Right for You?</p>
        <ul className="mx-auto mt-8 max-w-3xl space-y-4">
          {items.map((item) => <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-gray-700 shadow-sm"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#C6A24A]" /><span>{item}</span></li>)}
        </ul>
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-gray-900">If that sounds like you, welcome to OrganoCity.</p>
          <Link href="/products" className="mt-5 inline-flex rounded-full bg-[#ea580c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c2410c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ea580c]">Explore Our Products</Link>
        </div>
      </div>
    </section>
  );
}

export function PinkSaltWellnessSection() {
  return (
    <section className="bg-white px-6 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-3xl border border-[#C6A24A]/20 bg-[#f4f1e8] p-6 shadow-sm md:grid-cols-2 md:p-10">
        <div>
          <span className="inline-flex rounded-full bg-[#ffedd5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ea580c]">
            Naturally Distinctive
          </span>
          <h2 className="mt-5 font-serif text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Himalayan Pink Salt in a Balanced Diet
          </h2>
          <p className="mt-5 leading-7 text-gray-700">
            Himalayan pink salt is valued for its natural color, mineral character, crystal texture, and ability to
            season food. Its trace minerals create its distinctive appearance, but they do not make it a medical
            treatment or a substitute for a varied diet.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-gray-700">
            <li className="flex gap-3"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#C6A24A]" />Available in different crystal sizes for cooking, finishing, and presentation.</li>
            <li className="flex gap-3"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#C6A24A]" />Its flavor can help bring out the taste of food when used thoughtfully.</li>
            <li className="flex gap-3"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#C6A24A]" />Like other culinary salts, it is primarily sodium chloride and should be used in moderation.</li>
          </ul>
          <p className="mt-6 rounded-2xl bg-white p-4 text-sm leading-6 text-gray-600">
            Nutrition note: health authorities recommend limiting total salt intake. The type of salt does not remove
            the health risks associated with excess sodium.
          </p>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-3xl">
          <Image
            src="/images/homepage/himalayan-pink-salt.png"
            alt="Natural Himalayan pink salt crystals and coarse salt in a ceramic bowl"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function HomepageFaqSection() {
  return (
    <section className="bg-white px-6 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Questions? We’ve Got You Covered" title="Frequently Asked Questions" />
        <div className="mt-10 divide-y divide-gray-200 rounded-3xl border border-[#C6A24A]/20 bg-white px-5 sm:px-8">
          {homepageFaqItems.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ea580c]">
                {item.question}<span aria-hidden="true" className="text-xl text-[#C6A24A] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 [&_a]:font-semibold [&_a]:text-[#b57910] [&_a]:underline">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
