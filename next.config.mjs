/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/convert/:path*",
        destination:
          "https://5000-0armaan025-stream2scrip-b9k60oacmtb.ws-us114.gitpod.io/:path*", // Proxying to external server
      },
    ];
  },
};

export default nextConfig;
