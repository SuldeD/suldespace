import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // https://hebbkx1anhila5yf.public.blob.vercel-storage.com how to host images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
