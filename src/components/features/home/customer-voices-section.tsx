import { SectionHeading } from "@/components/shared/section-heading";

export function CustomerVoicesSection() {
  return (
    <section className="bg-gray-100 px-6 py-10 lg:px-4 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Customer Voices"
          title="What Our Customers Say"
          description="Verified customer feedback will appear here when approved reviews are available."
        />
        <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-dashed border-[#C6A24A]/40 bg-white p-8 text-center text-sm leading-relaxed text-gray-600">
          {/* TODO: Add verified OrganoCity customer reviews from the database or approved Google Reviews integration. */}
          No verified customer reviews are available to display yet.
        </div>
      </div>
    </section>
  );
}
