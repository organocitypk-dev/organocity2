import { HandHeart, Leaf, Mountain } from "@esmate/shadcn/pkgs/lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const highlights = [
  {
    icon: Mountain,
    title: "Authentic Himalayan Sourcing",
    points: [
      "Authentic products sourced from Pakistan",
      "Carefully selected natural quality",
      "Strict handling and quality control",
      "Secure packaging for every order",
    ],
  },
  {
    icon: Leaf,
    title: "Natural Product Range",
    points: [
      "Himalayan pink and black salt",
      "Salt lamps and decorative products",
      "Shilajit and herbal wellness products",
      "Honey, dry fruits, and natural essentials",
    ],
  },
  {
    icon: HandHeart,
    title: "Service & Support",
    points: [
      "Nationwide delivery support",
      "Responsive product guidance",
      "Bulk and wholesale assistance",
      "Reliable after-sales communication",
    ],
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-white px-6 py-10 lg:px-4 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose OrganoCity"
          description="Authentic Himalayan sourcing, premium natural quality, and dependable support."
        />

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-[#C6A24A]/20 bg-white p-8 shadow-lg transition-all hover:border-[#f6a45d]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffedd5] text-[#ea580c]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-gray-950">{item.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="font-bold text-[#C6A24A]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
