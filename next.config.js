/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  images: {
    domains: ["tecdn.b-cdn.net"],
  },
  i18n,
  /* config options here */
};

module.exports = nextConfig;
