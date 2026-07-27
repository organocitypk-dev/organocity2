"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid3X3, Phone } from "@esmate/shadcn/pkgs/lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { contact as trackContact } from "@/lib/pixel";

const PHONE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923171707418";

export function MobileBottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const openChat = () =>
    window.dispatchEvent(new CustomEvent("open-mobile-chat"));

  const homeActive = isActive("/");
  const productsActive =
    isActive("/products") || isActive("/category") || isActive("/collections");

  const navItemClass =
    "relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300";
  const activeItemClass =
    "-translate-y-4 bg-gradient-to-br from-[#f6bd38] via-[#f9734d] to-[#ec297b] text-white shadow-[0_8px_20px_rgba(236,41,123,0.35)] ring-[7px] ring-[#1a1308]";
  const inactiveItemClass = "text-gray-400 hover:text-[#C6A24A]";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-2 md:hidden">
      <div className="rounded-t-[1.75rem] border border-b-0 border-white/10 bg-[#1a1308] shadow-[0_-8px_24px_rgba(0,0,0,0.18)]">
        <div className="flex h-16 items-center justify-around px-1 pt-1">
          {/* AI Chat */}
          <button
            onClick={openChat}
            aria-label="Open AI chat"
            className={`${navItemClass} ${inactiveItemClass}`}
          >
            <BsChatDots className="h-5 w-5" />
          </button>

          {/* Home */}
          <Link
            href="/"
            aria-label="Home"
            aria-current={homeActive ? "page" : undefined}
            className={`${navItemClass} ${
              homeActive ? activeItemClass : inactiveItemClass
            }`}
          >
            <Home className="h-5 w-5" />
          </Link>

          {/* Products */}
          <Link
            href="/products"
            aria-label="Products"
            aria-current={productsActive ? "page" : undefined}
            className={`${navItemClass} ${
              productsActive ? activeItemClass : inactiveItemClass
            }`}
          >
            <Grid3X3 className="h-5 w-5" />
          </Link>

          {/* Phone */}
          <a
            href={`tel:+${PHONE_NUMBER}`}
            aria-label="Call us"
            className={`${navItemClass} ${inactiveItemClass}`}
          >
            <Phone className="h-5 w-5" />
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            onClick={() => trackContact("WhatsApp mobile navigation")}
            className={`${navItemClass} ${inactiveItemClass}`}
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
