import type { NextConfig } from "next";
import { LEGACY_NEWS_REDIRECTS } from "./src/lib/legacyNewsRedirects";

const nextConfig: NextConfig = {
  // Inline Tailwind CSS into the HTML so it isn't a render-blocking request (PageSpeed).
  experimental: {
    inlineCss: true,
  },
  async redirects() {
    return [
      ...LEGACY_NEWS_REDIRECTS.map(([source, destination]) => ({ source, destination, permanent: true })),
      // Anything else from the old news section (listing pages, Arabic-slug posts) lands on the media page.
      { source: "/news/:path*", destination: "/media", permanent: true },
      { source: "/ar/news/:path*", destination: "/media", permanent: true },
    ];
  },
  images: {
    // Next.js 16 only allows quality values listed here (defaults to [75] otherwise),
    // so any <Image quality={...}> prop outside this list gets rejected by the optimizer.
    qualities: [75, 90, 95, 100],
    // AVIF first (smaller files, same look), WebP fallback.
    formats: ["image/avif", "image/webp"],
    // Blog images uploaded through the NIT admin panel.
    // remotePatterns: [{ protocol: "https", hostname: "nit-admin.zakhf.com", pathname: "/media/**" }],
    remotePatterns: [
    {
      protocol: "https",
      hostname: "nit-admin.zakhf.com",
      pathname: "/media/**",
    },
    {
      protocol: "https",
      hostname: "admin.nesmainfrastructure.com",
      pathname: "/media/**",
    },
  ],

  },
};

export default nextConfig;
