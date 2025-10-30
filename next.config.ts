import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'portfolio'; // Your GitHub repo name

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ontario.ca",
        pathname: "/themes/custom/ontario_theme/images/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/commons/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/devicon/**",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
