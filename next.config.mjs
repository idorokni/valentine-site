/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: "/valentine-site",
  assetPrefix: "/valentine-site/",
}

export default nextConfig
