/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NASA_API_KEY: process.env.NASA_API_KEY,
  },
};

module.exports = nextConfig;
