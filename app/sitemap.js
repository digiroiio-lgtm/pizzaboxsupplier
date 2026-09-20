import { SITE_URL, products, sizes, locationPages, portPages, regionPages, statePages } from '@/lib/content'
import { contentGuides } from '@/lib/guides'

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

  const productPagesUrls = products.map(({ slug }) => ({
    url: `${SITE_URL}/products/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const sizePagesUrls = sizes.map(({ slug }) => ({
    url: `${SITE_URL}/pizza-box-sizes/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const locationPagesUrls = locationPages.map(({ slug }) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.65,
  }))

  const portPagesUrls = portPages.map(({ slug }) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const regionPagesUrls = regionPages.map(({ slug }) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.65,
  }))

  const statePagesUrls = statePages.map(({ slug }) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const guidePagesUrls = contentGuides.map(({ slug }) => ({
    url: `${SITE_URL}/resources/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Blog posts are noindex until content is published — excluded from sitemap
  return [
    ...staticPages,
    ...productPagesUrls,
    ...sizePagesUrls,
    ...locationPagesUrls,
    ...portPagesUrls,
    ...regionPagesUrls,
    ...statePagesUrls,
    ...guidePagesUrls,
  ]
}
