import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async rewrites() {
    // Serve English content at the root URL (no /en prefix visible to users).
    // The middleware separately redirects any direct /en/* requests back to /
    // so the canonical English URL is always the prefix-free version.
    return [
      { source: "/", destination: "/en" },
      // Sub-paths: /web-design → /en/web-design, etc. (only when no locale prefix)
      {
        source: "/:path((?!en|es|fr|ca|_next|api|studio|icon\\.png|robots\\.txt|sitemap\\.xml).*)",
        destination: "/en/:path",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes EXCEPT /studio
        source: "/((?!studio).*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
