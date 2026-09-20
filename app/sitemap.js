import { SITE_URL, products, sizes, locationPages } from '@/lib/content'

const lastModified = new Date().toISOString()

export default function sitemap() {
  const staticPages = [
    { url: SITE_URL, priority: 1.0 },
    { url: `${SITE_URL}/products`, priority: 0.9 },
    { url: `${SITE_URL}/pizza-box-sizes`, priority: 0.9 },
    { url: `${SITE_URL}/custom-pizza-boxes`, priority: 0.9 },
    { url: `${SITE_URL}/industries`, priority: 0.8 },
    { url: `${SITE_URL}/about-us`, priority: 0.8 },
    { url: `${SITE_URL}/resources`, priority: 0.8 },
    { url: `${SITE_URL}/get-quote`, priority: 0.9 },
    { url: `${SITE_URL}/contact`, priority: 0.7 },
  ].map(({ url, priority }) => ({
    url,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }))

  const productPages = products.map(({ slug }) => ({
    url: `${SITE_URL}/products/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const sizePages = sizes.map(({ slug }) => ({
    url: `${SITE_URL}/pizza-box-sizes/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const locationPagesUrls = locationPages.map(({ slug }) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  // Blog posts are noindex until content is published — excluded from sitemap
  return [
    ...staticPages,
    ...productPages,
    ...sizePages,
    ...locationPagesUrls,
  ]
}
