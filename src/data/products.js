// Furniture Hub Ayodhya — Central Product Data
// Edit this file to update products across the entire site.

export const WHATSAPP_NUMBER = '919580659559';
export const EMAIL = 'furniturehubayodhya@gmail.com';
export const BRAND_NAME = 'Furniture Hub Ayodhya';
export const TAGLINE = 'Smart, Sturdy, Good-Looking Furniture — Delivered Anywhere in India.';
export const PHONE_DISPLAY = '+91 95806 59559';

export const products = [
  // ═══════════════════════════════════════════
  //  PREMIUM RANGE — Solid Wood
  // ═══════════════════════════════════════════
  {
    id: 'p11',
    slug: 'premium-3-seater-solid-wood-sofa',
    name: 'Premium 3-Seater Solid Wood Sofa',
    category: 'premium',
    subType: 'sofa',
    material: 'Sheesham Wood',
    woodType: 'Sheesham',
    price: 34999,
    badge: 'New',
    description: 'A luxurious three-seater sofa that combines classic aesthetics with modern comfort. Crafted from solid wood with premium upholstery, offering a perfect centerpiece for your living room.\n\nKey Features\n✨ Premium Sheesham wood for lasting durability\n🛋️ Plush cushioning for exceptional comfort\n🎨 Timeless design to elevate any interior\n💪 Sturdy frame offering reliable support\n\nWhy Choose This Sofa?\nDesigned for elegance and everyday relaxation, this solid wood sofa brings warmth and sophistication to your living area. Ideal for family gatherings and entertaining guests.',
    specs: {
      dimensions: '72" × 30" × 32" (L × D × H)',
      finish: 'Natural Honey Finish',
      deliveryEstimate: '14–20 business days',
      warranty: '3 Year Frame Warranty',
    },
    images: [
      { label: 'Front View', src: '/3-seater-sofa-front-view.jpeg' },
      { label: 'Side View', src: '/3-seater-sofa-side-view.jpeg' },
      { label: 'Tilt View', src: '/3-seater-sofa-tilt-view.jpeg' },
      { label: 'Back View', src: '/3-seater-sofa-back-view.jpeg' },
    ],
  },
  {
    id: 'p12',
    slug: 'premium-white-3-seater-sofa',
    name: 'Premium White 3-Seater Sofa',
    category: 'premium',
    subType: 'sofa',
    material: 'Teak Wood',
    woodType: 'Teak',
    price: 38999,
    badge: 'New',
    description: 'An elegant three-seater sofa featuring pristine white upholstery paired with a durable solid wood frame. This minimalist design brightens up any living space while providing exceptional seating comfort.\n\nKey Features\n✨ Crisp white upholstery for a clean, modern look\n🪵 Premium Teak wood frame for maximum stability\n🛋️ Deep seating for superior relaxation\n🧹 Easy-to-maintain fabric for hassle-free cleaning\n\nWhy Choose This Sofa?\nA perfect blend of minimalist aesthetics and practical design, this white sofa adds a bright, airy feel to any contemporary home.',
    specs: {
      dimensions: '72" × 30" × 32" (L × D × H)',
      finish: 'Natural Teak Finish with White Upholstery',
      deliveryEstimate: '14–20 business days',
      warranty: '3 Year Frame Warranty',
    },
    images: [
      { label: 'Front View', src: '/white-3-seater-sofa-front-view.jpeg' },
      { label: 'Side View', src: '/white-3-seater-sofa-side-view.jpeg' },
      { label: 'Zoom View', src: '/white-3-seater-sofa-zoom-view.jpeg' },
      { label: 'Measurement View', src: '/white-3-seater-sofa-measurement-view.jpeg' },
    ],
  },

  // ═══════════════════════════════════════════
  // ─── BUDGET RANGE — Engineered Wood / Particle Board ───
  // ═══════════════════════════════════════════
  {
    id: 'b-exec-desk',
    slug: 'executive-office-desk',
    name: 'Executive Office Desk',
    category: 'budget',
    subType: 'table',
    material: 'Engineered Wood / Particle Board',
    dimensions: 'Spacious work surface',
    finish: 'Premium wood-grain finish',
    warranty: '1 Year Warranty',
    description: 'Upgrade your workspace with this modern wooden office desk, designed to combine style, functionality, and durability. Featuring a spacious tabletop, an open storage shelf for books and office essentials, a smooth-glide drawer, and a lockable cabinet, this desk keeps your workspace organized and clutter-free. Crafted from high-quality engineered wood with a premium wood-grain finish, it is built for everyday use in offices, home workspaces, study rooms, and commercial environments.\n\nKey Features\n🖥️ Spacious work surface for computers and documents\n🗄️ Integrated drawer and lockable cabinet for secure storage\n📚 Open shelf for easy access to books and files\n💪 Sturdy engineered wood construction\n\nWhy Choose This Desk?\nMaximize your productivity with a clutter-free and organized workspace. Perfect for home offices and study rooms.',
    specs: {
      dimensions: 'Spacious work surface',
      finish: 'Premium wood-grain finish',
      deliveryEstimate: '5-8 Business Days',
      warranty: '1 Year Warranty',
    },
    images: [
      { label: 'Front View', src: '/Executive Office Desk-front.jpeg' },
      { label: 'Side View', src: '/Executive Office Desk-side.jpeg' },
      { label: 'Zoom View', src: '/Executive Office Desk-zoom.jpeg' },
    ]
  },
  {
    id: 'b-vanity',
    slug: 'luxury-bathroom-vanity-unit',
    name: 'Luxury Bathroom Vanity Unit',
    category: 'budget',
    subType: 'vanity',
    material: 'Moisture-Resistant Engineered Wood',
    dimensions: 'Compact & spacious',
    finish: 'Marble-pattern & Gold accents',
    warranty: '1 Year Warranty',
    description: 'Elevate your bathroom with this premium vanity unit, designed to blend modern elegance with everyday functionality. Featuring a sleek ceramic wash basin, a stylish black-and-white marble-pattern cabinet, and elegant gold accents, this vanity adds a sophisticated touch to any bathroom. The spacious storage compartments help keep toiletries, cleaning essentials, and personal care items neatly organized while maintaining a clutter-free space.\n\nKey Features\n✨ Elegant marble-pattern finish with gold accents\n🚰 Sleek and durable ceramic wash basin\n🗄️ Ample storage for bathroom essentials\n💧 Moisture-resistant engineered wood for longevity\n\nWhy Choose This Vanity Unit?\nAdd a touch of luxury to your daily routine. This vanity unit combines sophisticated aesthetics with practical storage, keeping your bathroom organized and beautiful.',
    specs: {
      dimensions: 'Compact & spacious',
      finish: 'Marble-pattern & Gold accents',
      deliveryEstimate: '5-8 Business Days',
      warranty: '1 Year Warranty',
    },
    images: [
      { label: 'View 1', src: '/Luxury Bathroom Vanity Unit-1.jpeg' },
      { label: 'View 2', src: '/Luxury Bathroom Vanity Unit-2.jpeg' },
      { label: 'View 3', src: '/Luxury Bathroom Vanity Unit-3.jpeg' },
    ]
  },
  {
    id: 'b-wardrobe-3d',
    slug: '3-door-wooden-wardrobe',
    name: '3-Door Wooden Wardrobe',
    category: 'budget',
    subType: 'wardrobe',
    material: 'Engineered Wood / Particle Board',
    dimensions: 'Spacious 3-door design',
    finish: 'Wood-grain finish',
    warranty: '2 Year Warranty',
    description: 'Organize your belongings in style with this spacious 3-door wooden wardrobe, designed for modern homes. Featuring a durable wood-grain finish, multiple storage shelves, and a dedicated hanging section, this wardrobe offers the perfect combination of functionality and elegance. Its sturdy construction and lockable doors ensure your clothes, accessories, and essentials remain safe, organized, and easily accessible.\n\nKey Features\n🚪 3-door design for maximum storage capacity\n👗 Dedicated hanging section and multiple shelves\n🔒 Lockable doors for secure storage of valuables\n🪵 Premium wood-grain finish for a modern look\n\nWhy Choose This Wardrobe?\nKeep your bedroom tidy and stylish with this versatile wardrobe, offering ample space for all your clothing and accessories.',
    specs: {
      dimensions: 'Spacious 3-door design',
      finish: 'Wood-grain finish',
      deliveryEstimate: '5-8 Business Days',
      warranty: '2 Year Warranty',
    },
    images: [
      { label: 'Closed View', src: '/3-Door Wooden Wardrobe-side.jpeg' },
      { label: 'One Door Open', src: '/3-Door Wooden Wardrobe-one-door-open.jpeg' },
      { label: 'Open View', src: '/3-Door Wooden Wardrobe-open.jpeg' },
      { label: 'Lock Detail', src: '/3-Door Wooden Wardrobe-zoom-lock.jpeg' },
    ]
  },
  {
    id: 'b-tv-unit',
    slug: 'modern-wall-mounted-tv-unit',
    name: 'Modern Wall-Mounted TV Unit',
    category: 'budget',
    subType: 'tv-unit',
    material: 'Engineered Wood / Particle Board',
    dimensions: 'Space-saving floating design',
    finish: 'Premium wood finish',
    warranty: '1 Year Warranty',
    description: 'Enhance your living space with this sleek and contemporary wall-mounted TV unit, designed to combine elegance with practical storage. Featuring a floating entertainment shelf, an upper display ledge, and open compartments for media devices, this unit offers a clean, clutter-free look while maximizing space. Its premium wood finish and minimalist design make it a perfect addition to modern homes.\n\nKey Features\n📺 Floating wall-mounted design to save floor space\n🎮 Open compartments for media devices and consoles\n📚 Upper display ledge for décor and books\n🪵 Sleek wood finish for a contemporary aesthetic\n\nWhy Choose This TV Unit?\nCreate a modern entertainment center in your living room. The space-saving design and practical storage keep your area neat and stylish.',
    specs: {
      dimensions: 'Space-saving floating design',
      finish: 'Premium wood finish',
      deliveryEstimate: '5-8 Business Days',
      warranty: '1 Year Warranty',
    },
    images: [
      { label: 'Front View', src: '/Modern Wall-Mounted TV Unit-front.jpeg' },
      { label: 'Side View', src: '/Modern Wall-Mounted TV Unit-side.jpeg' },
    ]
  },
  {
    id: 'b-shoe-rack',
    slug: 'modern-wooden-shoe-rack-cabinet',
    name: 'Modern Wooden Shoe Rack Cabinet',
    category: 'budget',
    subType: 'shoe-rack',
    material: 'Engineered Wood / Particle Board',
    dimensions: 'Compact space-saving design',
    finish: 'Wood-grain finish',
    warranty: '1 Year Warranty',
    description: 'Keep your footwear neatly organized with this stylish and space-saving wooden shoe rack cabinet. Designed with a modern wood-grain finish, this cabinet features multiple spacious shelves to store shoes, sandals, slippers, and other essentials while keeping them dust-free. Its compact design makes it a perfect storage solution for entryways, bedrooms, hallways, and apartments.\n\nKey Features\n👟 Multiple spacious shelves for organized footwear storage\n🚪 Closed cabinet design to keep shoes dust-free\n🏠 Compact and space-saving, perfect for entryways\n🪵 Durable engineered wood with an elegant finish\n\nWhy Choose This Shoe Rack?\nMaintain a clean and welcoming entryway with this functional and stylish shoe cabinet, designed to complement any modern home décor.',
    specs: {
      dimensions: 'Compact space-saving design',
      finish: 'Wood-grain finish',
      deliveryEstimate: '5-8 Business Days',
      warranty: '1 Year Warranty',
    },
    images: [
      { label: 'Front View', src: '/Modern Wooden Shoe Rack Cabinet-front.jpeg' },
      { label: 'Open View', src: '/Modern Wooden Shoe Rack Cabinet-open.jpeg' },
      { label: 'Side View', src: '/Modern Wooden Shoe Rack Cabinet-side.jpeg' },
    ]
  },
  {
    id: 'b-mandir-1',
    slug: 'premium-white-wooden-mandir-led',
    name: 'Premium White Wooden Mandir with LED Backlit Design & Storage',
    category: 'budget',
    subType: 'mandir',
    material: 'Premium Engineered Wood',
    finish: 'Matte',
    description: 'Bring peace, elegance, and devotion into your home with this beautifully crafted Modern Wooden Home Temple (Mandir). Designed with intricate laser-cut patterns, warm LED backlighting, and spacious storage, this temple perfectly blends traditional spirituality with contemporary style.',
    specs: {
      dimensions: 'See measurement image',
      finish: 'Matte White',
      storage: '2 Drawers + 2-Door Cabinet + Side Shelves',
      deliveryEstimate: '5-8 Business Days',
      warranty: '1 Year Warranty',
    },
    images: [
      { label: 'Front View', src: '/mandrir-1-front.jpg' },
      { label: 'Open View', src: '/mandrir-1-open.jpg' },
      { label: 'Measurement', src: '/mandrir-1-measurement.jpg' },
    ]
  },
  {
    id: 'b-mandir-2',
    slug: 'premium-marble-finish-wooden-mandir-led',
    name: 'Premium Marble Finish Wooden Mandir with LED Backlit Ganesh Design',
    category: 'budget',
    subType: 'mandir',
    material: 'Premium Engineered Wood',
    finish: 'Marble Texture',
    description: 'Create a serene and elegant prayer space with this Premium Marble Finish Wooden Temple (Mandir). Featuring a stunning marble-textured finish, warm LED backlit Lord Ganesh design, intricate laser-cut detailing, and spacious storage, this mandir beautifully combines modern aesthetics with traditional devotion.',
    specs: {
      dimensions: 'See measurement image',
      finish: 'White with Grey Marble Pattern',
      storage: '1 Drawer + 2-Door Cabinet + Side Shelves',
      deliveryEstimate: '5-8 Business Days',
      warranty: '1 Year Warranty',
    },
    images: [
      { label: 'Front View', src: '/mandrir-2-front..jpg' },
      { label: 'Open Front View', src: '/mandrir-2-open-front.jpg' },
      { label: 'Open Side View', src: '/mandrir-2-open-side.jpg' },
      { label: 'Measurement', src: '/mandrir-2-measurement.jpg' },
    ]
  },
  {
    id: 'b-bed-whitora',
    slug: 'whitora-premium-hydraulic-storage-bed',
    name: 'Whitora Bed: Premium Hydraulic Storage Bed with Bookshelf Headboard – Modern White Finish',
    category: 'budget',
    subType: 'bed',
    material: 'Premium Engineered Wood',
    finish: 'Matte White',
    description: 'Upgrade your bedroom with this Premium Wooden Hydraulic Storage Bed, thoughtfully designed to combine modern aesthetics with practical functionality. Featuring a spacious hydraulic storage compartment and a multi-shelf bookshelf headboard, this bed is perfect for organizing your essentials while adding a clean, contemporary look to your space.\n\nKey Features\n🛏️ Premium engineered wood construction for strength and durability\n📚 Spacious bookshelf headboard with multiple open storage compartments\n📦 Large hydraulic storage underneath for blankets, pillows, luggage, and seasonal items\n✨ Elegant white finish that complements modern interiors\n🏠 Space-saving design ideal for apartments, homes, and guest rooms\n💪 Sturdy frame with excellent weight-bearing capacity\n🧹 Smooth surface for easy cleaning and low maintenance\n🎨 Contemporary minimalist design to enhance any bedroom décor\n\nWhy Choose This Bed?\nDesigned for modern lifestyles, this hydraulic storage bed offers the perfect balance of style, comfort, and functionality. The spacious under-bed storage keeps your room clutter-free, while the integrated bookshelf headboard provides convenient access to books, décor, and everyday essentials—making it an ideal choice for contemporary homes.',
    specs: {
      dimensions: '221.3 cm × 160.4 cm × 91.8 cm (L × W × H)',
      finish: 'Matte White',
      storage: 'Hydraulic Under-Bed Storage',
      deliveryEstimate: '5-8 Business Days',
      warranty: '1 Year Warranty',
    },
    images: [
      { label: 'Front View', src: '/Whitora-Bed.jpg' },
      { label: 'Without Mattress', src: '/Whitora-Bed-without-mattress.jpg' },
      { label: 'Side View', src: '/Whitora-Bed-side.jpg' },
      { label: 'Measurement', src: '/Whitora-Bed-measurement.jpg' },
    ]
  },
  {
    id: 'b-bed-darkwalnut',
    slug: 'modern-engineered-wood-bed-dark-walnut',
    name: 'Modern Engineered Wood Bed with Storage Headboard – Dark Walnut Finish',
    category: 'budget',
    subType: 'bed',
    material: 'Premium Engineered Wood',
    finish: 'Matte Wood Grain',
    description: 'Transform your bedroom with this Modern Engineered Wood Bed, designed to offer the perfect combination of style, comfort, and functionality. Featuring a sleek dark walnut finish and a practical storage headboard, this bed enhances your bedroom décor while keeping your everyday essentials within easy reach.\n\nKey Features\n🛏️ Premium engineered wood construction for long-lasting durability\n🌰 Elegant dark walnut finish for a sophisticated, modern look\n📚 Spacious storage headboard with open shelves for books, décor, and daily essentials\n🏠 Contemporary design that complements modern and classic interiors\n💪 Strong and sturdy frame for enhanced stability and support\n🧹 Scratch-resistant, smooth surface that is easy to clean and maintain\n✨ Space-saving design ideal for homes, apartments, and guest rooms\n🛠️ Precision-crafted with quality hardware for lasting performance\n\nWhy Choose This Bed?\nDesigned for modern living, this bed combines elegant aesthetics with practical storage. The integrated headboard shelves provide convenient space for books, décor, and bedtime essentials, while the sturdy engineered wood frame ensures years of reliable comfort. Its timeless dark walnut finish adds warmth and sophistication to any bedroom, making it a perfect choice for contemporary homes.',
    specs: {
      dimensions: 'Queen Size (Mattress not included)',
      finish: 'Dark Walnut Matte',
      storage: 'Headboard Storage Shelves',
      deliveryEstimate: '5-8 Business Days',
      warranty: '1 Year Warranty',
    },
    images: [
      { label: 'Side View', src: '/Dark-Walnut-side.jpg' },
      { label: 'Front View', src: '/Dark-Walnut-front.jpg' },
      { label: 'Measurement', src: '/Dark-Walnut-measurement.jpg' },
    ]
  }
];

export const premiumProducts = products.filter(p => p.category === 'premium');
export const budgetProducts = products.filter(p => p.category === 'budget');

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);

export const getRelatedProducts = (product, limit = 4) => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    city: 'Mumbai',
    text: 'The Sheesham bed we ordered is absolutely stunning. The wood grain is beautiful and the craftsmanship is top-notch. Delivered all the way to Mumbai without a scratch!',
  },
  {
    id: 2,
    name: 'Priya Nair',
    city: 'Bengaluru',
    text: 'I was skeptical about ordering furniture online from Ayodhya, but Furniture Hub exceeded my expectations. The dining table set is gorgeous and the WhatsApp support was incredibly helpful.',
  },
  {
    id: 3,
    name: 'Amit Verma',
    city: 'Delhi',
    text: 'Got a custom bookshelf made exactly to my specifications. The team was patient with my multiple design changes and the final product is perfect. Highly recommend!',
  },
  {
    id: 4,
    name: 'Sneha Patel',
    city: 'Pune',
    text: 'We furnished our entire new apartment with their budget range. Great quality for the price — the wardrobe and study table look premium. Fast delivery to Pune too.',
  },
  {
    id: 5,
    name: 'Arjun Das',
    city: 'Kolkata',
    text: 'The Teakwood rocking chair is now my grandfather\'s favourite seat. Beautiful finish, smooth rocking motion, and it arrived well-packaged in Kolkata within two weeks.',
  },
  {
    id: 6,
    name: 'Kavita Reddy',
    city: 'Hyderabad',
    text: 'Second order from Furniture Hub — first was a coffee table, now a TV unit. Both in Rosewood and they match beautifully. These people know their wood and their craft.',
  },
];

export const trustStats = [
  { label: 'Years of Craftsmanship', value: 15 },
  { label: 'Happy Families', value: 2500 },
  { label: 'Cities Delivered', value: 150 },
  { label: 'Custom Pieces Crafted', value: 800 },
];
