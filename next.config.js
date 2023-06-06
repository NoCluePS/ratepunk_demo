/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MASTER_KEY: process.env.MASTER_KEY,
  },
};

module.exports = nextConfig
