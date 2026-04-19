import { blogPosts, products, SITE_URL } from "@/lib/content";

const HIGH_PRIORITY_PREFIXES = [
  "/pizza-box-supplier",
  "/pizza-box-price",
  "/pizza-box-cost-per-1000",
  "/custom-pizza-box-cost",
];

function routePriority(path) {
  if (path === "") return 1;
  if (HIGH_PRIORITY_PREFIXES.some((prefix) => path.startsWith(prefix))) return 0.85;
  return 0.8;
}

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
    // Geo: state pages
    "/pizza-box-supplier-usa",
    "/pizza-box-supplier-california",
    "/pizza-box-supplier-new-york",
    "/pizza-box-supplier-texas",
    "/pizza-box-supplier-florida",
    "/pizza-box-supplier-new-jersey",
    "/pizza-box-supplier-illinois",
    // Logistics pages
    "/shipping-pizza-boxes-to-usa",
    "/pizza-box-container-loading",
    "/pizza-box-import-process-usa",
    "/pizza-box-freight-cost-estimator",
    // Pricing pages
    "/pizza-box-price",
    "/pizza-box-cost-per-1000",
    "/custom-pizza-box-cost",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      priority: routePriority(path),
    })),
    ...products.map((product) => ({
      url: `${SITE_URL}/products/${product.slug}`,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      priority: 0.6,
    })),
  ];
}
