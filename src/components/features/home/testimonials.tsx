"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "@esmate/shadcn/pkgs/lucide-react";
import { useRef } from "react";

import "swiper/css";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Software Developer – Lahore",
    text: "Bought an ASUS ROG Strix from OrganoCity. Runs every game at max settings. Genuine product with full warranty!",
  },
  {
    name: "Ayesha Siddiqua",
    role: "University Student – Karachi",
    text: "Got my Shilajit Air M2 here at a great price. Lightweight, fast, and the team helped me pick the right specs.",
  },
  {
    name: "Dr. Usman Malik",
    role: "Clinic Owner – Islamabad",
    text: "Ordered 5 herbal wellness products for our clinic. All arrived configured and ready. Excellent bulk order support.",
  },
  {
    name: "Fatima Noor",
    role: "Graphic Designer – Faisalabad",
    text: "The Himalayan salt lamp has a beautiful warm glow. OrganoCity delivered it securely packed.",
  },
  {
    name: "Muhammad Bilal",
    role: "Esports Player – Multan",
    text: "Excellent natural wellness selection in Pakistan. The products arrived fresh, secure, and exactly as described.",
  },
  {
    name: "Hassan Ali",
    role: "Freelancer – Rawalpindi",
    text: "Picked up a ThinkPad X1 Carbon and a Logitech mouse. Professional service and competitive pricing.",
  },
  {
    name: "Sana Tariq",
    role: "Teacher – Peshawar",
    text: "The edible pink salt is well packed and easy to use. Delivery was quick and the quality is excellent.",
  },
  {
    name: "Imran Shah",
    role: "IT Manager – Quetta",
    text: "We source all our office products from OrganoCity. Reliable, genuine, and always responsive.",
  },
];

const Testimonials = () => {
  const swiperRef = useRef<any>(null);

  return (
    
    <div className="relative">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#fcf5e8] p-2 shadow-md hover:bg-[#f6a45d] hover:text-white transition hidden md:block"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-8"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-xl border border-[#C6A24A]/20 bg-[#f4f1e8] p-6 h-full">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-[#C6A24A] text-lg">★</span>
                ))}
              </div>
              <p className="text-[#5A5E55] mb-4 text-sm leading-relaxed">&quot;{t.text}&quot;</p>
              <p className="font-semibold text-[#0a0a0a]">{t.name}</p>
              <p className="text-xs text-[#5A5E55]">{t.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#fcf5e8] p-2 shadow-md hover:bg-[#f6a45d] hover:text-white transition hidden md:block"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Testimonials;
