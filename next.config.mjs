/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/wholesale',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bulk-orders',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/wholesale/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bulk-orders/:path*',
        destination: '/products',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
