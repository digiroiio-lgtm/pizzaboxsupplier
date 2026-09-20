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
    image: '/NPIB-24408-hero-pizza-Boxes-Stacked-T3-Plus-001.jpeg',
  },
  {
    slug: 'bulk-pizza-boxes',
    title: 'Bulk Pizza Boxes',
    category: 'bulk',
    shortTitle: 'Bulk',
    description: 'Bulk pizza box supply optimized for pallet and container-scale purchasing. Ideal for distribution programs and recurring procurement.',
    uses: ['Pallet-scale buyers', 'Container procurement', 'Distribution programs'],
    sizes: ['10"', '12"', '14"', '16"'],
    image: '/NPIB-69854-Napoletana-Take-Out-Counter-Pizza-Boxes-001.jpeg',
  },
  {
    slug: 'custom-printed-pizza-boxes',
    title: 'Custom Printed Pizza Boxes',
    category: 'custom',
    shortTitle: 'Custom Printed',
    description: 'Custom printed pizza boxes with logo, branding or private-label printing. Available for chains, franchise groups and private-label buyers.',
    uses: ['Pizza chains', 'Franchise groups', 'Private-label programs', 'Branded packaging'],
    sizes: ['10"', '12"', '14"', '16"'],
    image: '/NPIB-20404-NA-Custom-Pizza-Boxes-Overview-T4-001.jpeg',
  },
  {
    slug: 'white-pizza-boxes',
    title: 'White Pizza Boxes',
    category: 'material',
    shortTitle: 'White',
    description: 'White-top pizza boxes for premium presentation. Available plain or custom printed for branded programs.',
    uses: ['Premium restaurant programs', 'Custom printing base', 'White-label supply'],
    sizes: ['8"', '10"', '12"', '14"', '16"'],
    image: '/NPIB-24408-NA-Custom-Pizza-Boxes-white-T3-001.jpeg',
  },
  {
    slug: 'kraft-pizza-boxes',
    title: 'Kraft Pizza Boxes',
    category: 'material',
    shortTitle: 'Kraft',
    description: 'Natural kraft pizza boxes with a clean, artisan aesthetic. Popular for independent pizzerias and craft-focused chain programs.',
    uses: ['Craft pizza programs', 'Artisan restaurant chains', 'Natural-look branding'],
    sizes: ['10"', '12"', '14"', '16"'],
    image: '/NPIB-22773-hero-PizzaBoxes-Kraft-10x10x2-T6-NA-001.jpeg',
  },
  {
    slug: 'clay-coated-pizza-boxes',
    title: 'Clay-Coated Pizza Boxes',
    category: 'material',
    shortTitle: 'Clay-Coated',
    description: 'Clay-coated board pizza boxes for high-quality print reproduction. Ideal for premium branding and high-resolution custom printing.',
    uses: ['Premium branded programs', 'High-resolution printing', 'Franchise groups'],
    sizes: ['10"', '12"', '14"', '16"'],
    image: '/NPIB-24408-NA-Custom-Pizza-Boxes-white-T3-001.jpeg',
  },
  {
    slug: 'corrugated-pizza-boxes',
    title: 'Corrugated Pizza Boxes',
    category: 'construction',
    shortTitle: 'Corrugated',
    description: 'Corrugated construction pizza boxes for enhanced rigidity and insulation. Preferred for delivery-heavy operations and frozen pizza packaging.',
    uses: ['Delivery-focused operations', 'Frozen pizza manufacturers', 'Long-distance delivery'],
    sizes: ['10"', '12"', '14"', '16"'],
    image: '/NPIB-69148-Packaging-Product-Tile-Food-Packaging-Pizza-Boxes-001.jpeg',
  },
  {
    slug: 'plain-pizza-boxes',
    title: 'Plain Pizza Boxes',
    category: 'print',
    shortTitle: 'Plain',
    description: 'Plain (unprinted) pizza boxes for distributors and buyers sourcing blank packaging for their own print programs or general supply.',
    uses: ['Packaging distributors', 'In-house print programs', 'General wholesale supply'],
    sizes: ['8"', '10"', '12"', '14"', '16"', '18"', '20"'],
    image: '/NPIB-24408-hero-pizza-Boxes-Stacked-T3-Plus-001.jpeg',
  },
  {
    slug: 'premium-pizza-boxes',
    title: 'Premium Pizza Boxes',
    category: 'tier',
    shortTitle: 'Premium',
    description: 'Premium-grade pizza boxes with superior board construction and presentation quality. For high-end restaurant groups and upscale chain programs.',
    uses: ['Premium restaurant chains', 'High-end foodservice programs', 'Upscale franchise groups'],
    sizes: ['10"', '12"', '14"', '16"'],
    image: '/NPIB-24408-NA-Custom-Pizza-Boxes-wedding-T3-001.jpeg',
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

// Port-led geo architecture — confirmed East Coast served routes only
export const portPages = [
  {
    slug: 'pizza-box-supplier-port-new-york-new-jersey',
    portName: 'Port of New York and New Jersey',
    region: 'Northeast',
    title: 'Wholesale Pizza Boxes for New York & New Jersey Importers',
    metaTitle: 'Wholesale Pizza Boxes — Port of New York & New Jersey | Container Supply',
    description: 'Container-volume pizza box programs for importers and distributors receiving shipments through the Port of New York and New Jersey. Wholesale pricing and freight planning for Northeast buyers.',
    statesCovered: ['New York', 'New Jersey', 'Connecticut', 'Pennsylvania', 'Massachusetts'],
    buyerContext: 'Major foodservice distribution hubs in northern New Jersey, Brooklyn, and the greater NYC metro area make this the highest-volume receiving port for East Coast pizza box distribution.',
    distributionContext: 'Containers clearing NY/NJ port reach distribution centers in Secaucus, Carlstadt, Woodbridge and Brooklyn within hours of unloading. Access to the full Northeast corridor via I-95 and major rail networks.',
  },
  {
    slug: 'pizza-box-supplier-port-of-savannah',
    portName: 'Port of Savannah',
    region: 'Southeast',
    title: 'Wholesale Pizza Boxes for Southeast Importers — Port of Savannah',
    metaTitle: 'Wholesale Pizza Boxes — Port of Savannah | Container Supply Southeast',
    description: 'Container-volume pizza box programs for Southeast importers and distributors receiving shipments through the Port of Savannah. Wholesale pricing and freight planning for Georgia, Florida and the Southeast.',
    statesCovered: ['Georgia', 'Florida', 'South Carolina', 'North Carolina', 'Tennessee', 'Alabama'],
    buyerContext: 'The Port of Savannah is the primary deep-water gateway for Southeast distribution. Atlanta, Jacksonville, Charlotte and Tampa distribution hubs are all efficiently reached from the Savannah container terminal.',
    distributionContext: 'Georgia\'s established distribution network extends container cargo inland to Atlanta within hours. Savannah is the fastest-growing container port on the East Coast and the primary entry point for Southeast foodservice distribution.',
  },
  {
    slug: 'pizza-box-supplier-port-of-virginia',
    portName: 'Port of Virginia',
    region: 'Mid-Atlantic',
    title: 'Wholesale Pizza Boxes for Mid-Atlantic Importers — Port of Virginia',
    metaTitle: 'Wholesale Pizza Boxes — Port of Virginia | Container Supply Mid-Atlantic',
    description: 'Container-volume pizza box programs for Mid-Atlantic importers and distributors receiving shipments through the Port of Virginia. Wholesale pricing and freight planning for Virginia, Maryland and Mid-Atlantic buyers.',
    statesCovered: ['Virginia', 'Maryland', 'Delaware', 'Washington DC', 'West Virginia', 'Pennsylvania'],
    buyerContext: 'The Port of Virginia (Norfolk/Portsmouth) is the deepest natural harbor on the East Coast. Ideal for Mid-Atlantic buyers in Virginia, Maryland, DC and the broader Chesapeake region with access to I-64, I-95 and inland distribution.',
    distributionContext: 'Richmond, Baltimore and Washington DC distribution centers are all reached within a day from the Port of Virginia terminal. Strong access to the I-81 corridor into Pennsylvania and the Midwest.',
  },
]

export const regionPages = [
  {
    slug: 'pizza-box-supplier-northeast',
    region: 'Northeast',
    title: 'Wholesale Pizza Boxes — Northeast USA',
    metaTitle: 'Wholesale Pizza Boxes — Northeast USA | Container Supply Programs',
    description: 'Container-volume pizza box supply for Northeast U.S. distributors and buyers. Wholesale programs for New York, New Jersey, Pennsylvania, Massachusetts, Connecticut and surrounding states.',
    statesCovered: ['New York', 'New Jersey', 'Pennsylvania', 'Massachusetts', 'Connecticut', 'Rhode Island', 'Vermont', 'New Hampshire', 'Maine'],
    primaryPort: 'Port of New York and New Jersey',
    primaryPortSlug: 'pizza-box-supplier-port-new-york-new-jersey',
    buyerContext: 'The Northeast is the highest-density pizza market in the United States, with strong distributor networks across the NY/NJ metro, Philadelphia corridor and Boston area.',
  },
  {
    slug: 'pizza-box-supplier-mid-atlantic',
    region: 'Mid-Atlantic',
    title: 'Wholesale Pizza Boxes — Mid-Atlantic USA',
    metaTitle: 'Wholesale Pizza Boxes — Mid-Atlantic USA | Container Supply Programs',
    description: 'Container-volume pizza box supply for Mid-Atlantic distributors and buyers in Virginia, Maryland, DC and Delaware. Freight planning through the Port of Virginia.',
    statesCovered: ['Virginia', 'Maryland', 'Delaware', 'Washington DC', 'West Virginia'],
    primaryPort: 'Port of Virginia',
    primaryPortSlug: 'pizza-box-supplier-port-of-virginia',
    buyerContext: 'The Mid-Atlantic corridor from Baltimore to Richmond hosts major foodservice distribution and restaurant chain procurement operations.',
  },
  {
    slug: 'pizza-box-supplier-southeast',
    region: 'Southeast',
    title: 'Wholesale Pizza Boxes — Southeast USA',
    metaTitle: 'Wholesale Pizza Boxes — Southeast USA | Container Supply Programs',
    description: 'Container-volume pizza box supply for Southeast U.S. distributors and buyers in Georgia, Florida, South Carolina and surrounding states. Freight planning through the Port of Savannah.',
    statesCovered: ['Georgia', 'Florida', 'South Carolina', 'North Carolina', 'Tennessee', 'Alabama', 'Mississippi'],
    primaryPort: 'Port of Savannah',
    primaryPortSlug: 'pizza-box-supplier-port-of-savannah',
    buyerContext: 'The Southeast is one of the fastest-growing U.S. food markets, with Atlanta as a major distribution hub and Florida\'s large chain and franchise population driving significant pizza box volume.',
  },
]

export const statePages = [
  {
    slug: 'pizza-box-supplier-new-jersey',
    state: 'New Jersey',
    title: 'Wholesale Pizza Box Supplier — New Jersey',
    metaTitle: 'Wholesale Pizza Box Supplier — New Jersey | Container & Pallet Programs',
    description: 'Wholesale pizza box supplier for New Jersey buyers. Container-volume programs for foodservice distributors and high-volume buyers. Freight planning through the Port of NY/NJ.',
    portSlug: 'pizza-box-supplier-port-new-york-new-jersey',
    portName: 'Port of New York and New Jersey',
    buyerContext: 'New Jersey is one of the densest foodservice distribution markets in the U.S., with major distribution hubs in Carlstadt, Secaucus, Woodbridge and Edison serving the NY metro region and the entire Northeast corridor.',
  },
  {
    slug: 'pizza-box-supplier-pennsylvania',
    state: 'Pennsylvania',
    title: 'Wholesale Pizza Box Supplier — Pennsylvania',
    metaTitle: 'Wholesale Pizza Box Supplier — Pennsylvania | Container & Pallet Programs',
    description: 'Wholesale pizza box supplier for Pennsylvania buyers. Container-volume programs for foodservice distributors and high-volume buyers in the Philadelphia and Pittsburgh corridors.',
    portSlug: 'pizza-box-supplier-port-new-york-new-jersey',
    portName: 'Port of New York and New Jersey',
    buyerContext: 'Pennsylvania\'s foodservice distribution network spans Philadelphia, Pittsburgh and the Central PA corridor, serving one of the largest concentrations of independent pizzerias and chain operators on the East Coast.',
  },
  {
    slug: 'pizza-box-supplier-virginia',
    state: 'Virginia',
    title: 'Wholesale Pizza Box Supplier — Virginia',
    metaTitle: 'Wholesale Pizza Box Supplier — Virginia | Container & Pallet Programs',
    description: 'Wholesale pizza box supplier for Virginia buyers. Container-volume programs with freight planning through the Port of Virginia for distributors and high-volume buyers in the Mid-Atlantic.',
    portSlug: 'pizza-box-supplier-port-of-virginia',
    portName: 'Port of Virginia',
    buyerContext: 'Virginia\'s position as the entry point for the Port of Virginia makes it a natural distribution hub for the Mid-Atlantic. Richmond and Northern Virginia are key distribution centers for the DC metro foodservice market.',
  },
  {
    slug: 'pizza-box-supplier-georgia',
    state: 'Georgia',
    title: 'Wholesale Pizza Box Supplier — Georgia',
    metaTitle: 'Wholesale Pizza Box Supplier — Georgia | Container & Pallet Programs',
    description: 'Wholesale pizza box supplier for Georgia buyers. Container-volume programs with freight planning through the Port of Savannah for Atlanta and Southeast distributors.',
    portSlug: 'pizza-box-supplier-port-of-savannah',
    portName: 'Port of Savannah',
    buyerContext: 'Atlanta is the Southeast\'s primary logistics and distribution hub, with major foodservice distributors and restaurant chain procurement operations across the metro area. The Port of Savannah is only 4 hours from Atlanta by truck.',
  },
  {
    slug: 'pizza-box-supplier-florida',
    state: 'Florida',
    title: 'Wholesale Pizza Box Supplier — Florida',
    metaTitle: 'Wholesale Pizza Box Supplier — Florida | Container & Pallet Programs',
    description: 'Wholesale pizza box supplier for Florida buyers. Container-volume programs for foodservice distributors and high-volume buyers across Miami, Tampa, Orlando and Jacksonville.',
    portSlug: 'pizza-box-supplier-port-of-savannah',
    portName: 'Port of Savannah',
    buyerContext: 'Florida has one of the highest concentrations of pizza chains, franchise groups and independent operators in the United States. Miami, Tampa, Orlando and Jacksonville are major distribution hubs with strong recurring volume demand.',
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
