/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    publicRuntimeConfig: {
      env: {
        MONGO_URL: process.env.MONGO_URL,
      },
    },
}

export default nextConfig;
