export const SITE_URL = "https://pizzaboxsupplier.com";

export const PRIMARY_KEYWORDS = [
  "pizza box supplier USA",
  "wholesale pizza boxes",
  "bulk pizza boxes",
  "custom pizza boxes wholesale",
  "pizza box manufacturer",
];

export const TRUST_BADGES = ["BRCGS Certified", "ISO 22000", "HACCP"];

export const CORE_BOOSTERS = [
  "Request Quote in 24 Hours",
  "Low MOQ Available",
  "Private Label Ready",
  "Direct Manufacturer Pricing",
];

export const CONTACT = {
  whatsapp: "https://wa.me/905301112233",
  phone: "+90 212 555 01 01",
  email: "sales@pizzaboxsupplier.com",
  address: "Ikitelli OSB, Basaksehir, Istanbul, Turkey",
};

export const productFaqs = [
  {
    question: "What is the minimum order quantity for pizza boxes?",
    answer: "MOQ starts from 10,000 pieces depending on size and print requirements.",
  },
  {
    question: "Do you offer custom printed pizza boxes?",
    answer: "Yes, we provide full CMYK custom printing, coating and private label options.",
  },
  {
    question: "Do you ship pizza boxes to the USA?",
    answer: "Yes, we export regularly to USA distributors and foodservice importers.",
  },
  {
    question: "What materials are used?",
    answer: "We use food-grade corrugated board with recyclable kraft and white liner options.",
  },
  {
    question: "How long is production time?",
    answer: "Typical lead time is 2-4 weeks after artwork and order confirmation.",
  },
];

export const products = [
  { slug: "5-inch-pizza-box", size: "5 Inch", uses: "single slice and mini pizza service" },
  { slug: "6-inch-pizza-box", size: "6 Inch", uses: "personal pan and side menu delivery" },
  { slug: "7-inch-pizza-box", size: "7 Inch", uses: "individual pizza programs" },
  { slug: "8-inch-pizza-box", size: "8 Inch", uses: "small meal combos and grab-and-go" },
  { slug: "9-inch-pizza-box", size: "9 Inch", uses: "small dine-in and takeaway" },
  { slug: "10-inch-pizza-box", size: "10 Inch", uses: "standard medium SKU for chains" },
  { slug: "12-inch-pizza-box", size: "12 Inch", uses: "high-volume classic menu" },
  { slug: "14-inch-pizza-box", size: "14 Inch", uses: "family size restaurant orders" },
  { slug: "16-inch-pizza-box", size: "16 Inch", uses: "large carryout and delivery" },
  { slug: "18-inch-pizza-box", size: "18 Inch", uses: "XL and party-size pizzas" },
  { slug: "20-inch-pizza-box", size: "20 Inch", uses: "jumbo wholesale and catering" },
  { slug: "custom-pizza-boxes", size: "Custom Pizza Boxes", uses: "private label distributor programs" },
  { slug: "custom-printed-pizza-boxes", size: "Custom Printed Pizza Boxes", uses: "brand-first marketing campaigns" },
  { slug: "personalized-pizza-boxes", size: "Personalized Pizza Boxes", uses: "regional chain localization" },
  { slug: "blank-pizza-boxes", size: "Blank Pizza Boxes", uses: "cost-efficient bulk purchasing" },
];

export const blogPosts = [
  {
    slug: "wholesale-pizza-boxes-usa",
    title: "Wholesale Pizza Boxes USA: Buying Guide for Distributors",
    description: "How USA importers compare quality, MOQ and freight for wholesale pizza boxes.",
    author: "ayse-demir",
  },
  {
    slug: "bulk-pizza-boxes-for-restaurants",
    title: "Bulk Pizza Boxes for Restaurants: Cost Control Framework",
    description: "Procurement tips for restaurant chains ordering bulk pizza boxes.",
    author: "mert-kaya",
  },
  {
    slug: "custom-pizza-box-printing-guide",
    title: "Custom Pizza Box Printing Guide for B2B Buyers",
    description: "Artwork, color, board, and finishing steps for custom pizza boxes wholesale.",
    author: "ayse-demir",
  },
  {
    slug: "pizza-packaging-trends-usa",
    title: "Pizza Packaging Trends USA: 2026 Buyer Priorities",
    description: "USA pizza packaging trends that matter for chains, distributors, and importers.",
    author: "mert-kaya",
  },
];

export const authors = {
  "ayse-demir": {
    name: "Ayse Demir",
    role: "Export Sales Director",
    bio: "Leads USA and EU export programs for pizza box manufacturer accounts.",
  },
  "mert-kaya": {
    name: "Mert Kaya",
    role: "Packaging Engineering Manager",
    bio: "Focuses on corrugated performance, print quality and high-volume production standards.",
  },
};

export const locationPages = [
  {
    slug: "pizza-box-supplier-usa",
    title: "Pizza Box Supplier USA",
    description: "Wholesale pizza boxes and custom pizza boxes wholesale shipped to USA distributors.",
  },
  {
    slug: "pizza-box-supplier-california",
    title: "Pizza Box Supplier California",
    description: "Bulk pizza boxes for California chains, wholesalers and importers.",
  },
  {
    slug: "pizza-box-supplier-new-york",
    title: "Pizza Box Supplier New York",
    description: "Pizza box manufacturer support for New York foodservice and distributor demand.",
  },
];

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: productFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
