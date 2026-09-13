import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Our own locally-authored placeholder illustrations are SVGs (not
    // user-uploaded content), so allowing next/image to serve them through
    // its optimizer is safe here. The CSP locks down what an SVG could ever
    // execute even in principle.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
