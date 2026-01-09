// Centralized data structure
export const marketplaceData = {
  // const categories = [
  //   { tag: "gadgets", name: "Phones & Tablets", color: "from-[#82F69B] to-[#396E45]" },
  //   { tag: "fashion", name: "Fashion", color: "from-[#24589B] to-[#0C1E35]" },
  //   { tag: "homes&living", name: "Homes & Living", color: "from-[#CC8CA6] to-[#6F4556]" },
  //   { tag: "electronics", name: "Electronics", color: "from-[#004B14] to-[#00B12F]" },
  //   { tag: "cars", name: "Services", color: "from-[#FE7309] to-[#C55500]" },
  //   { tag: "agriculture", name: "Agriculture", color: "from-[#ADBF81] to-[#51593C]" },
  // ];
  // Categories with their IDs (these should match backend)
  categories: [
    {
      id: 'automobiles',
      name: 'Automobiles',
      icon: '🚗',
      color: "from-[#FE7309] to-[#C55500]",
      subcategories: ['cars', 'buses', 'trucks', 'motorcycles', 'vehicle-parts']
    },
    {
      id: 'gadgets',
      name: 'Phones & Tablets',
      icon: '🚗',
      color: "from-[#82F69B] to-[#396E45]",
      subcategories: ['cars', 'buses', 'trucks', 'motorcycles', 'vehicle-parts']
    },
    {
      id: 'fashion',
      name: 'Fashion',
      icon: '👕',
      color: "from-[#24589B] to-[#0C1E35]",
      subcategories: ['men', 'women', 'kids', 'accessories']
    },
    {
      id: 'home-living',
      name: 'Homes & Living',
      icon: '🏠',
      color: "from-[#CC8CA6] to-[#6F4556]",
      subcategories: ['furniture', 'appliances', 'decor', 'kitchen']
    },
    {
      id: 'electronics',
      name: 'Electronics',
      icon: '📱',
      color: "from-[#004B14] to-[#00B12F]",
      subcategories: ['phones-tablets', 'laptops', 'audio', 'gaming']
    },
    {
      id: 'services',
      name: 'Services',
      icon: '🔧',
      color: "from-[#ADBF81] to-[#51593C]",
      subcategories: ['professional', 'home-services', 'automotive', 'beauty']
    },
    {
      id: 'agriculture',
      name: 'Agriculture',
      icon: '🚜',
      color: "from-[#ADBF81] to-[#51593C]",
      subcategories: ['equipment', 'supplies', 'livestock', 'produce']
    }
  ],

  // Products data
  products: [
    {
      id: '1',
      title: '2015 Porsche Macan Turbo - Fully Loaded',
      description: 'Imported from USA. Clean title, no accident history.',
      price: 22000000,
      originalPrice: 44000000,
      discount: 50,
      featured: false,
      trending: true,
      category: 'automobiles',
      subcategory: 'cars',
      brand: 'Porsche',
      condition: 'foreign-used',
      badge: 'platinum',
      location: 'Lagos',
      year: 2015,
      mileage: 75000,
      seller: {
        id: 'seller1',
        name: 'Auto Elite Motors',
        verified: true,
        rating: 4.8
      },
      images: ['https://via.placeholder.com/400x300'],
      features: ['Panoramic Sunroof', 'Premium Audio', 'Backup Camera'],
      createdAt: '2024-01-15',
      views: 1250,
      favorites: 89
    },
    {
      id: '2',
      title: '2020 Toyota Camry XLE',
      description: 'Excellent condition, one owner, full service history.',
      price: 8500000,
      originalPrice: 9500000,
      discount: 10,
      featured: false,
      trending: true,
      category: 'automobiles',
      subcategory: 'cars',
      brand: 'Toyota',
      condition: 'foreign-used',
      badge: 'gold',
      location: 'Abuja',
      year: 2020,
      mileage: 45000,
      seller: {
        id: 'seller2',
        name: 'Toyota Certified',
        verified: true,
        rating: 4.9
      },
      images: ['https://via.placeholder.com/400x300'],
      features: ['Sunroof', 'Navigation', 'Backup Camera'],
      createdAt: '2024-01-20',
      views: 980,
      favorites: 45
    },
    {
      id: '3',
      title: '2017 Ford Ranger Raptor',
      description: 'Off-road capable pickup truck.',
      price: 18000000,
      originalPrice: 22000000,
      discount: 18,
      featured: false,
      trending: true,
      category: 'automobiles',
      subcategory: 'trucks',
      brand: 'Ford',
      condition: 'foreign-used',
      badge: 'gold',
      location: 'Port Harcourt',
      year: 2017,
      mileage: 65000,
      seller: {
        id: 'seller3',
        name: 'Truck Masters',
        verified: true,
        rating: 4.6
      },
      images: ['https://via.placeholder.com/400x300'],
      features: ['4x4', 'Off-road Package', 'Leather Interior'],
      createdAt: '2024-01-14',
      views: 1200,
      favorites: 67
    },
    {
      id: '4',
      title: 'Gaming Laptop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 18000000,
      originalPrice: 850000,
      discount: 18,
      featured: false,
      trending: true,
      category: 'automobiles',
      subcategory: 'trucks',
      brand: 'Ford',
      condition: 'foreign-used',
      badge: 'gold',
      location: 'Port Harcourt',
      year: 2017,
      mileage: 65000,
      seller: {
        id: 'seller3',
        name: 'TechHub NG',
        verified: true,
        rating: 4.6
      },
      images: ['https://via.placeholder.com/400x300'],
      features: ['4x4', 'Off-road Package', 'Leather Interior'],
      createdAt: '2024-01-14',
      views: 1200,
      favorites: 67
    },
    {
      id: '5',
      title: 'Gaming Laptop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 18000000,
      originalPrice: 850000,
      discount: 18,
      featured: false,
      trending: true,
      category: 'automobiles',
      subcategory: 'trucks',
      brand: 'Ford',
      condition: 'foreign-used',
      badge: 'gold',
      location: 'Port Harcourt',
      year: 2017,
      mileage: 65000,
      seller: {
        id: 'seller3',
        name: 'TechHub NG',
        verified: true,
        rating: 4.6
      },
      images: ['https://via.placeholder.com/400x300'],
      features: ['4x4', 'Off-road Package', 'Leather Interior'],
      createdAt: '2024-01-14',
      views: 1200,
      favorites: 67
    },
    // Add more products...
  ],

  // Filter options
  filterOptions: {
    conditions: [
      { id: 'new', name: 'New' },
      { id: 'foreign-used', name: 'Foreign Used' },
      { id: 'nigerian-used', name: 'Nigerian Used' },
      { id: 'refurbished', name: 'Refurbished' }
    ],
    badges: [
      { id: 'diamond', name: 'Diamond' },
      { id: 'platinum', name: 'PLATINUM' },
      { id: 'gold', name: 'Gold' },
      { id: 'silver', name: 'Silver' },
      { id: 'bronze', name: 'Bronze' }
    ],
    priceRanges: [
      { id: '0-2m', label: 'Less than ₦2M', min: 0, max: 2000000 },
      { id: '2m-3m', label: '₦2M - ₦3M', min: 2000000, max: 3000000 },
      { id: '3m-4m', label: '₦3M - ₦4M', min: 3000000, max: 4000000 },
      { id: '4m-5m', label: '₦4M - ₦5M', min: 4000000, max: 5000000 },
      { id: '5m-plus', label: 'Above ₦5M', min: 5000000, max: 100000000 }
    ],
    yearRanges: [
      { id: '2022-2026', label: '2022 - 2026', min: 2022, max: 2026 },
      { id: '2017-2021', label: '2017 - 2021', min: 2017, max: 2021 },
      { id: '2012-2016', label: '2012 - 2016', min: 2012, max: 2016 },
      { id: '2007-2011', label: '2007 - 2011', min: 2007, max: 2011 }
    ],
    locations: [
      'Lagos', 'Abuja', 'Ibadan', 'Kano', 'Port Harcourt', 
      'Benin City', 'Kaduna', 'Maiduguri', 'Zaria', 'Aba'
    ]
  }
};


// Helper functions - Add this new function
export const getTrendingProducts = (limit = 4) => {
  return [...marketplaceData.products]
    .filter(product => product.trending === true) // Only trending products
    .sort((a, b) => b.views - a.views) // Sort by popularity
    .slice(0, limit);
};

// Helper functions
export const getCategoryById = (categoryId) => {
  return marketplaceData.categories.find(cat => cat.id === categoryId);
};

export const getProductsByCategory = (categoryId) => {
  return marketplaceData.products.filter(product => product.category === categoryId);
};

export const getSubcategoryProducts = (categoryId, subcategoryId) => {
  return marketplaceData.products.filter(
    product => product.category === categoryId && product.subcategory === subcategoryId
  );
};

export const getProductById = (productId) => {
  return marketplaceData.products.find(product => product.id === productId);
};

export const getFeaturedProducts = (limit = 4) => {
  return [...marketplaceData.products]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
};

export const getBestSellingProducts = (limit = 4) => {
  return [...marketplaceData.products]
    .sort((a, b) => b.favorites - a.favorites)
    .slice(0, limit);
};