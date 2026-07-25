import { Factory, PackageCheck, SearchCheck, ShieldCheck } from "@esmate/shadcn/pkgs/lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const highlights = [
  {
    icon: Factory,
    title: "100% Mine-Direct Sourcing",
    text: "Our Himalayan pink salt is sourced directly from Pakistan's salt ranges — no middlemen, no blending, and no compromise on authenticity.",
  },
  {
    icon: SearchCheck,
    title: "Export-Grade Quality Control",
    text: "Every batch is graded, cleaned, and packed to meet applicable quality requirements for local and international buyers.",
  },
  {
    icon: PackageCheck,
    title: "Bulk, Wholesale & Private Labeling",
    text: "From retail packs to bulk export orders, we support wholesalers, distributors, and private-label brands worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Purity",
    text: "No artificial coloring and no unnecessary chemical processing — only naturally mineral-rich salt inspected before leaving our facility.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-white px-6 py-10 lg:px-4 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose OrganoCity"
          description="Direct from the mines of Pakistan — trusted by retailers, wholesalers, and homes across the world."
        />
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-3xl border border-[#C6A24A]/20 bg-white p-8 shadow-lg transition-all hover:border-[#f6a45d]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffedd5] text-[#ea580c]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
