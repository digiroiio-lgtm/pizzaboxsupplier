import { blogPosts, products, SITE_URL } from "@/lib/content";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/products",
    "/wholesale",
    "/bulk-orders",
    "/custom-pizza-boxes",
    "/about-us",
    "/blog",
    "/contact",
    "/get-quote",
    "/pizza-box-supplier-usa",
    "/pizza-box-supplier-california",
    "/pizza-box-supplier-new-york",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${SITE_URL}/products/${product.slug}`,
      changeFrequency: "weekly",
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}
