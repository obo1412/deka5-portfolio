/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deka.co.kr",
        port: "8527",
        pathname: "/files/**",
      },
    ],
  },
};

module.exports = nextConfig;
