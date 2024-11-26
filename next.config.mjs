import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Override the default webpack configuration
  images: {
    remotePatterns: [
      {
        hostname: 'i.ibb.co'
      },
      {
        hostname: 'res.cloudinary.com'
      },
      {
        hostname: 'images.unsplash.com'
      },
      {
        hostname: 'skillicons.dev'
      }
    ]
  }
}

export default withNextIntl(nextConfig)
