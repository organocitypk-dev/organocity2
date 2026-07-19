import { Button } from "@esmate/shadcn/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Headphones,
  Sparkles,
  CheckCircle,
  Award,
  Users,
} from "@esmate/shadcn/pkgs/lucide-react";

const highlights = [
  "Serving customers since 2018",
  "Carefully sourced natural products",
  "Specialists in Himalayan salt and Shilajit",
  "Secure packaging and nationwide delivery",
];

const values = [
  {
    icon: Award,
    title: "Growing Since 2018",
    description:
      "Founded by Ihsan ul Haq, OrganoCity has grown through honesty, dependable service, and respect for Pakistan's natural resources.",
  },
  {
    icon: ShieldCheck,
    title: "Authentic Sourcing",
    description:
      "We carefully select our Himalayan salt, Shilajit, herbs, honey, oils, and wellness products with quality and authenticity in mind.",
  },
  {
    icon: Sparkles,
    title: "Natural Collection",
    description:
      "Our collection brings together edible pink salt, handcrafted salt decor, pure Shilajit, herbal care, and everyday wellness essentials.",
  },
  {
    icon: Headphones,
    title: "Personal Support",
    description:
      "Our team offers clear product guidance, responsive order support, secure delivery assistance, and genuine after-sales care.",
  },
];

export function AboutPageContent() {
  return (
    <main className="bg-gray-50 text-[#0a0a0a]">
      <section className="relative overflow-hidden border-b border-[#C6A24A]/35 bg-[#fcf5e8] py-20 text-[#0a0a0a] lg:py-32">
        <div className="absolute right-0 top-0 -mr-40 -mt-40 h-96 w-96 rounded-full bg-[#C6A24A]/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-96 w-96 rounded-full bg-[#f6a45d]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="space-y-6 lg:col-span-7">
              <span className="inline-flex rounded-full border border-[#C6A24A]/50 bg-[#C6A24A]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#b57910]">
                Our Story Since 2018
              </span>

              <h1 className="font-serif text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Nature&apos;s finest, from Pakistan.
                <span className="mt-2 block text-[#ea580c]">The story of OrganoCity.</span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
                OrganoCity connects nature&apos;s purity with everyday wellness through authentic Himalayan pink salt, pure Shilajit, herbal products, and carefully selected natural essentials.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  asChild
                  className="rounded-full bg-[#f6a45d] px-8 py-6 text-sm font-semibold text-black transition-all hover:bg-[#ffb06e]"
                >
                  <Link href="/products">Browse Products</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-gray-300 bg-white px-8 py-6 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-50"
                >
                  <Link href="/contact">Talk to an Expert</Link>
                </Button>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-[#C6A24A] to-[#f6a45d] opacity-40 blur-md" />
              <div className="relative aspect-video overflow-hidden rounded-[28px] border border-[#C6A24A]/35 bg-white shadow-xl lg:aspect-square">
                <Image
                  src="https://res.cloudinary.com/dwfj50rzg/image/upload/v1775730489/organocity/products/lo6qnaapdivv39mpjeb8.png"
                  alt="OrganoCity Himalayan pink salt crystal lamp"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="space-y-8 lg:col-span-7">
              <div>
                <span className="inline-flex rounded-full bg-[#ffedd5] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  How We Started
                </span>
                <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Built on trust, quality, and consistency.
                </h2>
              </div>

              <div className="space-y-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                <p>
                  Founded in 2018 by <strong className="font-semibold text-gray-900">Ihsan ul Haq</strong>, OrganoCity began with a simple belief: nature&apos;s purest offerings deserve to reach people who value authenticity.
                </p>
                <p>
                  Starting with Himalayan pink salt and traditional wellness products, he built the business around one enduring principle: <strong className="font-semibold text-gray-900">absolute authenticity</strong>. Every customer deserves honest information, thoughtful service, and products selected with care.
                </p>
                <p>
                  Today, OrganoCity serves customers across Pakistan with edible pink salt, handcrafted salt lamps and decor, pure Himalayan Shilajit, herbal products, honey, oils, dry fruits, and other natural wellness essentials.
                </p>
              </div>

              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 shadow-sm">
                    <CheckCircle className="h-5 w-5 shrink-0 text-[#C6A24A]" />
                    <span className="text-sm font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24 lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-[#C6A24A] bg-[#fcf5e8] p-8 text-gray-950 shadow-xl">
                <div className="absolute right-0 top-0 h-16 w-16 rounded-tr-3xl border-r-2 border-t-2 border-[#C6A24A]" />
                <h3 className="mb-4 font-serif text-2xl font-bold text-[#ea580c]">Our Commitment</h3>
                <blockquote className="mb-6 text-base leading-relaxed italic text-gray-700 sm:text-lg">
                  &ldquo;We are committed to genuine Himalayan pink salt and wellness essentials, handled responsibly and delivered with purity, care, and customer trust at the center.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C6A24A] bg-[#f6a45d]/20 text-[#ea580c]">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-950">Ihsan ul Haq</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#b57910]">Founder — OrganoCity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
            <span className="inline-flex rounded-full bg-[#ffedd5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ea580c]">
              Our Collections
            </span>
            <h2 className="font-serif text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Naturally sourced, thoughtfully selected
            </h2>
            <p className="text-base text-gray-600 sm:text-lg">
              Explore the product families at the heart of OrganoCity, chosen for authenticity, usefulness, and everyday wellbeing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group rounded-3xl border border-[#C6A24A]/20 bg-white p-8 shadow-lg transition-all hover:border-[#f6a45d]">
              <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src="https://res.cloudinary.com/dwfj50rzg/image/upload/v1775730375/organocity/products/v2ep6qff4zyhxq9vnqdt.jpg"
                  alt="Himalayan Shilajit"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-950 transition-colors group-hover:text-[#ea580c]">Himalayan Shilajit</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Pure Himalayan Shilajit selected for customers who value traditional wellness, authenticity, and clear product guidance.
              </p>
            </div>

            <div className="group rounded-3xl border border-[#C6A24A]/20 bg-white p-8 shadow-lg transition-all hover:border-[#f6a45d]">
              <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src="https://res.cloudinary.com/dwfj50rzg/image/upload/v1775730497/organocity/products/jtgbx8llvrsaef0chgzy.png"
                  alt="OrganoCity Himalayan edible pink salt"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-950 transition-colors group-hover:text-[#ea580c]">Himalayan Pink Salt</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Naturally mineral-rich edible salt, cooking products, bath care, and beautifully handcrafted lamps and decor from the Himalayan salt range.
              </p>
            </div>

            <div className="group rounded-3xl border border-[#C6A24A]/20 bg-white p-8 shadow-lg transition-all hover:border-[#f6a45d]">
              <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src="https://res.cloudinary.com/dwfj50rzg/image/upload/v1775730510/organocity/products/omm2anfecmznicysbzhd.jpg"
                  alt="OrganoCity herbal wellness product"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-950 transition-colors group-hover:text-[#ea580c]">Herbal & Wellness</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Herbal formulations, natural oils, honey, dry fruits, and carefully selected essentials designed to support a balanced everyday lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex rounded-full bg-[#ffedd5] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                Why Choose Us
              </span>
              <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Four pillars of our business success
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                We build relationships that go beyond a single order. Our commitment to trust guides how we source products, share information, package orders, and support every customer.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="rounded-full border border-[#C6A24A]/45 bg-black px-7 py-6 text-[#f6a45d] hover:bg-gray-900">
                  <Link href="/products">Shop the Catalog</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-gray-300 bg-white px-7 py-6 text-gray-800 hover:bg-gray-50">
                  <Link href="/contact">Contact OrganoCity</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-[#C6A24A]/25 bg-white p-6 shadow-md transition-all duration-300 hover:border-[#f6a45d]">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffedd5] text-[#ea580c]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 font-serif text-base font-bold text-gray-950">{item.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
