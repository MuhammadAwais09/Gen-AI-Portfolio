import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    domains: ["cdn.sanity.io"], // ✅ whitelist Sanity CDN
    // Optional: more secure/flexible
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "cdn.sanity.io",
    //     pathname: "/images/**",
    //   },
    // ],
  },
};

export default nextConfig;
