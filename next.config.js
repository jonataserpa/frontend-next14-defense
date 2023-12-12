/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: "public",
    cacheOnFrontEndNav: true,
    reloadOnOnline: true,
    disable: false,
    skipWaiting: true,
  });
  
  const nextConfig = withPWA({
    experimental: {
      newNextLinkBehavior: true,
    },
  });

module.exports = nextConfig
