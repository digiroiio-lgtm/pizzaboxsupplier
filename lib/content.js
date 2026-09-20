export const SITE_URL = 'https://wholesalepizzaboxes.com'

export const BRAND = {
  name: 'WholesalePizzaBoxes.com',
  short: 'WPB',
  tagline: 'Wholesale Pizza Boxes for High-Volume U.S. Buyers',
}

// BUSINESS_DATA_REQUIRED: Replace with verified contact details before launch
export const CONTACT = {
  email: 'sales@wholesalepizzaboxes.com',
  phone: null, // BUSINESS_DATA_REQUIRED: verified US or international business phone
  address: null, // BUSINESS_DATA_REQUIRED: verified business address
}

export const VALUE_PROPS = [
  'Container-Volume Programs',
  'Wholesale Pricing',
  'Custom Printing',
  'Private Label',
  'Recurring Supply',
  'Nationwide Delivery Planning',
]

export const products = [
  {
    slug: 'wholesale-pizza-boxes',
    title: 'Wholesale Pizza Boxes',
    category: 'wholesale',
    shortTitle: 'Wholesale',
    description: 'Stock wholesale pizza boxes for high-volume U.S. buyers. Available in all standard sizes, suitable for distributors, chains and foodservice programs.',
    uses: ['Foodservice distributors', 'Restaurant chains', 'Packaging distributors', 'High-volume buyers'],
    sizes: ['8"', '10"', '12"', '14"', '16"', '18"', '20"'],
  },
  {
    slug: 'bulk-pizza-boxes',
    title: 'Bulk Pizza Boxes',
    category: 'bulk',
    shortTitle: 'Bulk',
    description: 'Bulk pizza box supply optimized for pallet and container-scale purchasing. Ideal for distribution programs and recurring procurement.',
    uses: ['Pallet-scale buyers', 'Container procurement', 'Distribution programs'],
    sizes: ['10"', '12"', '14"', '16"'],
  },
  {
    slug: 'custom-printed-pizza-boxes',
    title: 'Custom Printed Pizza Boxes',
    category: 'custom',
    shortTitle: 'Custom Printed',
    description: 'Custom printed pizza boxes with logo, branding or private-label printing. Available for chains, franchise groups and private-label buyers.',
    uses: ['Pizza chains', 'Franchise groups', 'Private-label programs', 'Branded packaging'],
    sizes: ['10"', '12"', '14"', '16"'],
  },
  {
    slug: 'white-pizza-boxes',
    title: 'White Pizza Boxes',
    category: 'material',
    shortTitle: 'White',
    description: 'White-top pizza boxes for premium presentation. Available plain or custom printed for branded programs.',
    uses: ['Premium restaurant programs', 'Custom printing base', 'White-label supply'],
    sizes: ['8"', '10"', '12"', '14"', '16"'],
  },
  {
    slug: 'kraft-pizza-boxes',
    title: 'Kraft Pizza Boxes',
    category: 'material',
    shortTitle: 'Kraft',
    description: 'Natural kraft pizza boxes with a clean, artisan aesthetic. Popular for independent pizzerias and craft-focused chain programs.',
    uses: ['Craft pizza programs', 'Artisan restaurant chains', 'Natural-look branding'],
    sizes: ['10"', '12"', '14"', '16"'],
  },
  {
    slug: 'clay-coated-pizza-boxes',
    title: 'Clay-Coated Pizza Boxes',
    category: 'material',
    shortTitle: 'Clay-Coated',
    description: 'Clay-coated board pizza boxes for high-quality print reproduction. Ideal for premium branding and high-resolution custom printing.',
    uses: ['Premium branded programs', 'High-resolution printing', 'Franchise groups'],
    sizes: ['10"', '12"', '14"', '16"'],
  },
  {
    slug: 'corrugated-pizza-boxes',
    title: 'Corrugated Pizza Boxes',
    category: 'construction',
    shortTitle: 'Corrugated',
    description: 'Corrugated construction pizza boxes for enhanced rigidity and insulation. Preferred for delivery-heavy operations and frozen pizza packaging.',
    uses: ['Delivery-focused operations', 'Frozen pizza manufacturers', 'Long-distance delivery'],
    sizes: ['10"', '12"', '14"', '16"'],
  },
  {
    slug: 'plain-pizza-boxes',
    title: 'Plain Pizza Boxes',
    category: 'print',
    shortTitle: 'Plain',
    description: 'Plain (unprinted) pizza boxes for distributors and buyers sourcing blank packaging for their own print programs or general supply.',
    uses: ['Packaging distributors', 'In-house print programs', 'General wholesale supply'],
    sizes: ['8"', '10"', '12"', '14"', '16"', '18"', '20"'],
  },
  {
    slug: 'premium-pizza-boxes',
    title: 'Premium Pizza Boxes',
    category: 'tier',
    shortTitle: 'Premium',
    description: 'Premium-grade pizza boxes with superior board construction and presentation quality. For high-end restaurant groups and upscale chain programs.',
    uses: ['Premium restaurant chains', 'High-end foodservice programs', 'Upscale franchise groups'],
    sizes: ['10"', '12"', '14"', '16"'],
  },
]

export const sizes = [
  {
    slug: '8-inch',
    inches: 8,
    title: '8 Inch Pizza Boxes',
    shortTitle: '8"',
    commonUses: ['Personal pizzas', 'Small specialty pizzas', 'Kids menu programs', 'Appetizer packaging'],
    notes: 'Suitable for personal-size and specialty pizza programs.',
  },
  {
    slug: '10-inch',
    inches: 10,
    title: '10 Inch Pizza Boxes',
    shortTitle: '10"',
    commonUses: ['Small pizzas', 'Individual pies', 'Specialty programs', 'Lunch menus'],
    notes: 'High-velocity SKU for small-format pizza programs.',
  },
  {
    slug: '12-inch',
    inches: 12,
    title: '12 Inch Pizza Boxes',
    shortTitle: '12"',
    commonUses: ['Medium pizzas', 'Standard delivery programs', 'Chain programs', 'Franchise supply'],
    notes: 'One of the most common sizes for chain and delivery programs.',
  },
  {
    slug: '14-inch',
    inches: 14,
    title: '14 Inch Pizza Boxes',
    shortTitle: '14"',
    commonUses: ['Large pizzas', 'Standard chain sizes', 'High-volume delivery', 'Family programs'],
    notes: 'Widely used across chain and independent programs.',
  },
  {
    slug: '16-inch',
    inches: 16,
    title: '16 Inch Pizza Boxes',
    shortTitle: '16"',
    commonUses: ['Extra-large pizzas', 'Family-size programs', 'Premium offerings', 'Large format delivery'],
    notes: 'Popular for family-size and premium pizza offerings.',
  },
  {
    slug: '18-inch',
    inches: 18,
    title: '18 Inch Pizza Boxes',
    shortTitle: '18"',
    commonUses: ['Party-size pizzas', 'Large format programs', 'Catering operations', 'Jumbo pizza menus'],
    notes: 'Used in catering, party-size and jumbo pizza programs.',
  },
  {
    slug: '20-inch',
    inches: 20,
    title: '20 Inch Pizza Boxes',
    shortTitle: '20"',
    commonUses: ['Jumbo pizzas', 'Large-format specialty programs', 'Catering supply', 'Special events'],
    notes: 'Specialty size for jumbo and large-format programs.',
  },
]

export const industries = [
  {
    slug: 'foodservice-distributors',
    title: 'Foodservice Distributors',
    description: 'Container-volume supply programs designed for foodservice distributors requiring consistent delivery, broad SKU coverage and reliable reorder cycles.',
    icon: 'truck',
  },
  {
    slug: 'packaging-distributors',
    title: 'Packaging Distributors',
    description: 'Wholesale pizza box supply for packaging distributors requiring broad size coverage, plain and custom-printed options, and efficient container loading.',
    icon: 'box',
  },
  {
    slug: 'restaurant-supply-distributors',
    title: 'Restaurant Supply Distributors',
    description: 'Supply programs for restaurant supply distributors serving pizza operators across regional and national markets.',
    icon: 'store',
  },
  {
    slug: 'pizza-chains',
    title: 'Pizza Chains & Franchise Groups',
    description: 'Branded and private-label pizza box programs for multi-location pizza chains and franchise groups requiring consistency across locations.',
    icon: 'franchise',
  },
  {
    slug: 'food-manufacturers',
    title: 'Food Manufacturers',
    description: 'Container-volume pizza box supply for food manufacturers, frozen pizza producers and co-packers requiring high-volume corrugated packaging.',
    icon: 'factory',
  },
  {
    slug: 'importers-wholesalers',
    title: 'Importers & Wholesalers',
    description: 'Direct container purchasing programs for U.S. importers, packaging wholesalers and procurement departments with established import experience.',
    icon: 'globe',
  },
]

export const RFQ_COMPANY_TYPES = [
  'Foodservice Distributor',
  'Packaging Distributor',
  'Restaurant Supply Distributor',
  'Pizza Chain',
  'Franchise Group',
  'Restaurant Group',
  'Food Manufacturer',
  'Importer / Wholesaler',
  'Other',
]

export const RFQ_VOLUME_TIERS = [
  '1 Container',
  '2–3 Containers',
  '4–10 Containers',
  '10+ Containers',
  'Recurring Container Program',
  'Not Sure / Need Assistance',
]

export const RFQ_FREQUENCIES = [
  'One-Time',
  'Monthly',
  'Quarterly',
  'Recurring / Contract',
  'Other',
]

export const productFaqs = [
  {
    question: 'What is the minimum order quantity for wholesale pizza boxes?',
    answer: 'Our programs are designed for high-volume buyers. Minimum order quantities depend on the box size, material and print specification. Contact us to discuss your volume requirements and we will confirm the MOQ applicable to your program.',
  },
  {
    question: 'How many pizza boxes fit on a pallet or in a container?',
    answer: 'Pallet and container quantities vary by box size, board grade and case dimensions. We provide detailed loading specifications during the quoting process. Request container pricing to receive a full breakdown for your specific SKU.',
  },
  {
    question: 'Can pizza boxes be custom printed with our logo or branding?',
    answer: 'Yes. We offer custom printing on pizza boxes including logo printing, full custom design and private-label programs. Print options, artwork requirements and MOQ for custom printing are confirmed during the quoting process.',
  },
  {
    question: 'What pizza box sizes are available for wholesale ordering?',
    answer: 'We supply pizza boxes from 8 inch through 20 inch in standard sizes. The most common high-volume sizes are 10", 12", 14" and 16". Contact us to confirm availability and volume pricing for your required size.',
  },
  {
    question: 'How does freight and delivery work for container orders?',
    answer: 'We work with buyers to plan freight and delivery logistics appropriate to their volume and destination. Container orders to U.S. buyers typically involve standard import logistics. Freight planning is part of the quoting process.',
  },
  {
    question: 'Can I set up a recurring supply program?',
    answer: 'Yes. Recurring supply programs are a core part of our offering for distributors, chains and high-volume buyers. We work with buyers to establish reorder schedules, consistent specifications and supply continuity. Discuss your requirements when you request pricing.',
  },
]

export const homepageFaqs = [
  {
    question: 'What types of buyers do you supply pizza boxes to?',
    answer: 'Our primary customers are foodservice distributors, packaging distributors, restaurant supply distributors, pizza chains, franchise groups, food manufacturers and importers requiring container-scale purchasing. Independent operators are welcome to inquire, though our primary programs are designed for high-volume buyers.',
  },
  {
    question: 'What is container-scale purchasing?',
    answer: 'Container-scale purchasing refers to orders sized around one or more standard shipping containers of pizza boxes. A single container holds a significant quantity of pizza boxes depending on size and configuration. We work with buyers who need this level of volume on a one-time or recurring basis.',
  },
  {
    question: 'Do you offer custom printed pizza boxes?',
    answer: 'Yes. We offer custom printing including logo printing, branded designs and private-label programs. Custom print options, MOQ requirements and artwork specifications are confirmed during the quoting process.',
  },
  {
    question: 'What pizza box sizes do you supply?',
    answer: 'We supply pizza boxes from 8 inch through 20 inch. Common high-volume sizes include 10", 12", 14" and 16". Size availability for specific materials and print options is confirmed during quoting.',
  },
  {
    question: 'How do I request container pricing?',
    answer: 'Use the Request Container Pricing form on this page or the Get Quote page. Provide your company details, required sizes and estimated volume. We will follow up to discuss your program and provide pricing.',
  },
  {
    question: 'Do you deliver to all U.S. states?',
    answer: 'We work with buyers across the United States. Delivery logistics, freight planning and lead times are confirmed during the quoting process based on destination, volume and order type.',
  },
]

export const resourceGuides = [
  {
    slug: 'wholesale-pizza-box-buying-guide',
    title: 'Wholesale Pizza Box Buying Guide',
    description: 'A procurement guide for distributors and high-volume buyers covering sizes, materials, MOQ, pallet and container quantities.',
    category: 'Buyer Guide',
  },
  {
    slug: 'custom-printed-pizza-box-guide',
    title: 'Custom Printed Pizza Box Guide',
    description: 'Everything procurement buyers need to know about custom printing: options, artwork, MOQ, lead times and repeat runs.',
    category: 'Buyer Guide',
  },
  {
    slug: 'pizza-box-size-guide',
    title: 'Pizza Box Size Guide',
    description: 'Size-by-size comparison guide for wholesale buyers covering 8"–20" pizza boxes, common uses and ordering considerations.',
    category: 'Specification Guide',
  },
  {
    slug: 'container-ordering-guide',
    title: 'Container Ordering Guide',
    description: 'How container-volume pizza box ordering works: quantities, loading, logistics and program setup for high-volume buyers.',
    category: 'Procurement Guide',
  },
]

export const locationPages = [
  {
    slug: 'pizza-box-supplier-usa',
    title: 'Wholesale Pizza Box Supplier — USA',
    description: 'Wholesale pizza box supply for U.S. buyers. Container-volume programs for foodservice distributors, restaurant chains and high-volume buyers nationwide.',
  },
  {
    slug: 'pizza-box-supplier-california',
    title: 'Wholesale Pizza Box Supplier — California',
    description: 'Wholesale pizza box supply for California buyers. Container and pallet programs for distributors, restaurant groups and foodservice buyers.',
  },
  {
    slug: 'pizza-box-supplier-new-york',
    title: 'Wholesale Pizza Box Supplier — New York',
    description: 'Wholesale pizza box supply for New York buyers. Container-volume programs for foodservice distributors, pizza chains and high-volume buyers.',
  },
]

// Blog posts — content required before indexing
export const blogPosts = [
  {
    slug: 'wholesale-pizza-box-buying-guide',
    title: 'How to Source Wholesale Pizza Boxes: A Buyer\'s Guide',
    description: 'A practical guide for distributors and high-volume buyers on sourcing wholesale pizza boxes at container scale.',
    author: 'wpb-editorial',
    published: false, // BUSINESS_DATA_REQUIRED: Add real content before setting published: true
  },
  {
    slug: 'pizza-box-sizes-explained',
    title: 'Pizza Box Sizes Explained: 8-Inch to 20-Inch Wholesale Guide',
    description: 'A size-by-size reference for wholesale pizza box buyers covering dimensions, uses and ordering at volume.',
    author: 'wpb-editorial',
    published: false,
  },
  {
    slug: 'custom-printed-pizza-boxes-what-buyers-need-to-know',
    title: 'Custom Printed Pizza Boxes: What Procurement Buyers Need to Know',
    description: 'A procurement guide to custom printed pizza boxes covering printing options, MOQ, artwork requirements and supply programs.',
    author: 'wpb-editorial',
    published: false,
  },
  {
    slug: 'container-load-pizza-boxes-guide',
    title: 'Container Load Pizza Boxes: Quantities, Loading and Logistics',
    description: 'A practical reference for buyers ordering pizza boxes at container scale, covering quantities, pallet configurations and freight considerations.',
    author: 'wpb-editorial',
    published: false,
  },
]

export const authors = {
  'wpb-editorial': {
    name: 'WPB Editorial',
    role: 'Packaging Procurement Team',
    bio: 'The WholesalePizzaBoxes.com editorial team covers wholesale packaging procurement for U.S. foodservice and distribution buyers.',
  },
}

export function buildFaqSchema(faqs) {
  const faqArray = faqs || productFaqs
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqArray.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}
