/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_OAUTH_REDIRECT_URL: process.env.GOOGLE_OAUTH_REDIRECT_URL,
    CLAUDINARY_URL: process.env.CLAUDINARY_URL
  },
  images: {
    domains: ['res.cloudinary.com', 'pbs.twimg.com'],
  },
}

module.exports = nextConfig
