import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 only allows quality values listed here (defaults to [75] otherwise),
    // so any <Image quality={...}> prop outside this list gets rejected by the optimizer.
    qualities: [75, 90, 95, 100],
  },
};

export default nextConfig;
