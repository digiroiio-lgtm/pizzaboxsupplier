/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
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
      {
        source: '/blog/wholesale-pizza-box-buying-guide',
        destination: '/resources/how-to-buy-pizza-boxes-wholesale',
        permanent: true,
      },
      {
        source: '/blog/pizza-box-sizes-explained',
        destination: '/resources/pizza-box-sizes-guide',
        permanent: true,
      },
      {
        source: '/blog/custom-printed-pizza-boxes-what-buyers-need-to-know',
        destination: '/resources/custom-pizza-box-printing-guide',
        permanent: true,
      },
      {
        source: '/blog/container-load-pizza-boxes-guide',
        destination: '/resources/pizza-box-container-quantity',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
