import { ReactNode, Suspense } from "react";
import Providers from "../components/providers/providers";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import ServiceWorkerRegistration from "@/components/core/service-worker-registration";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { MetaPixel } from "@/components/integrations/meta-pixel";
import { GoogleMarketing } from "@/components/integrations/google-marketing";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OrganoCity | Himalayan Pink Salt, Shilajit & Herbal Products",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Shop authentic Himalayan pink salt, pure Shilajit, handcrafted salt lamps and natural herbal wellness products from OrganoCity Pakistan.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "OrganoCity",
  },
  icons: {
    icon: [
      { url: "/icons/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/icons/icon.svg", type: "image/svg+xml" }],
    apple: [
      { url: "/icons/icon.svg", type: "image/svg+xml" },
    ],
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } } : {}),
  } : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C6A24A",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
        <link rel="shortcut icon" type="image/svg+xml" href="/icons/icon.svg" />
        <link rel="apple-touch-icon" href="/icons/icon.svg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="OrganoCity" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body suppressHydrationWarning>
        <Script
          id="performance-measure-guard"
          strategy="beforeInteractive"
          src="/performance-measure-guard.js"
        />
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        <GoogleMarketing />
        <Providers>
          {children}
          <SpeedInsights />
          <Analytics />
        </Providers>
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
