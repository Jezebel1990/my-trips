/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa'

const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProduction,
  },
})

export default {
  ...nextConfig,
  images: {
    domains: ['ca-central-1.graphassets.com'],
  },
}

