/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'api.squarecomputer.net',
      'squarecomputer.net',
      'localhost',
      '127.0.0.1',
      'fonts.maateen.me'
    ],
  },
  // Enable React Strict Mode
  reactStrictMode: true,
  // Enable TypeScript type checking
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable ESLint on build
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
