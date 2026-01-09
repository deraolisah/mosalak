export const categories = [
  {
    id: 'cars',
    name: 'Cars',
    icon: '🚗',
    mainGroup: 'Automobiles',
    subCategories: [
      { id: 'sedan', name: 'Sedan' },
      { id: 'suv', name: 'SUV' },
      { id: 'coupe', name: 'Coupe' },
      { id: 'hatchback', name: 'Hatchback' },
      { id: 'convertible', name: 'Convertible' },
      { id: 'wagon', name: 'Station Wagon' }
    ]
  },
  {
    id: 'buses',
    name: 'Buses',
    icon: '🚌',
    mainGroup: 'Automobiles',
    subCategories: [
      { id: 'school-bus', name: 'School Bus' },
      { id: 'shuttle-bus', name: 'Shuttle Bus' },
      { id: 'coach-bus', name: 'Coach Bus' },
      { id: 'mini-bus', name: 'Mini Bus' }
    ]
  },
  {
    id: 'trucks',
    name: 'Trucks',
    icon: '🚚',
    mainGroup: 'Automobiles',
    subCategories: [
      { id: 'pickup', name: 'Pickup Trucks' },
      { id: 'dump-truck', name: 'Dump Trucks' },
      { id: 'tanker', name: 'Tanker Trucks' },
      { id: 'flatbed', name: 'Flatbed Trucks' }
    ]
  },
  {
    id: 'motorcycles',
    name: 'Motorcycles & Scooters',
    icon: '🏍️',
    mainGroup: 'Automobiles',
    subCategories: [
      { id: 'sport-bike', name: 'Sport Bikes' },
      { id: 'cruiser', name: 'Cruisers' },
      { id: 'scooter', name: 'Scooters' },
      { id: 'off-road', name: 'Off-road Bikes' }
    ]
  },
  {
    id: 'parts',
    name: 'Vehicle Parts & Accessories',
    icon: '🔧',
    mainGroup: 'Automobiles',
    subCategories: [
      { id: 'engine-parts', name: 'Engine Parts' },
      { id: 'transmission', name: 'Transmission' },
      { id: 'suspension', name: 'Suspension' },
      { id: 'electronics', name: 'Electronics' },
      { id: 'accessories', name: 'Accessories' },
      { id: 'tires-wheels', name: 'Tires & Wheels' }
    ]
  }
];

export const brands = {
  cars: [
    'Toyota', 'Honda', 'Mercedes-Benz', 'BMW', 'Lexus', 'Audi', 'Ford',
    'Chevrolet', 'Nissan', 'Volkswagen', 'Hyundai', 'Kia', 'Tesla', 'Porsche',
    'Jaguar', 'Land Rover', 'Volvo', 'Mazda', 'Subaru', 'Mitsubishi'
  ],
  motorcycles: [
    'Honda', 'Yamaha', 'Suzuki', 'Kawasaki', 'Harley-Davidson', 'Ducati',
    'BMW', 'Triumph', 'KTM', 'Royal Enfield', 'Vespa', 'Piaggio'
  ],
  trucks: [
    'Ford', 'Chevrolet', 'RAM', 'GMC', 'Toyota', 'Nissan', 'Isuzu',
    'Mercedes-Benz', 'Volvo', 'Kenworth', 'Peterbilt', 'Mack'
  ],
  parts: [
    'Bosch', 'Denso', 'NGK', 'Brembo', 'KYB', 'Monroe', 'Michelin',
    'Bridgestone', 'Goodyear', 'Mobil 1', 'Castrol', 'Valvoline'
  ]
};

export const conditions = [
  { id: 'new', name: 'New' },
  { id: 'foreign-used', name: 'Foreign Used' },
  { id: 'nigerian-used', name: 'Nigerian Used' },
  { id: 'refurbished', name: 'Refurbished' }
];

export const badges = [
  { id: 'diamond', name: 'Diamond', color: 'from-blue-500 to-indigo-600' },
  { id: 'platinum', name: 'PLATINUM', color: 'from-gray-400 to-gray-600' },
  { id: 'gold', name: 'Gold', color: 'from-yellow-400 to-yellow-600' },
  { id: 'silver', name: 'Silver', color: 'from-gray-300 to-gray-400' },
  { id: 'bronze', name: 'Bronze', color: 'from-orange-400 to-orange-600' },
  { id: 'basic', name: 'Basic', color: 'from-green-400 to-green-600' }
];

export const locations = [
  'Lagos', 'Abuja', 'Ibadan', 'Kano', 'Port Harcourt', 'Benin City',
  'Kaduna', 'Maiduguri', 'Zaria', 'Aba', 'Jos', 'Ilọrin', 'Oyo', 'Enugu',
  'Abeokuta', 'Sokoto', 'Onitsha', 'Warri', 'Calabar'
];

export const products = [
  {
    id: '1',
    title: '2015 Porsche Macan Turbo - Fully Loaded',
    description: 'Imported from USA. Clean title, no accident history. Fully loaded with panoramic sunroof, premium audio, and advanced safety features.',
    price: 22000000,
    originalPrice: 44000000,
    discount: 50,
    category: 'cars',
    subCategory: 'suv',
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
    images: [
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w-800'
    ],
    features: ['Panoramic Sunroof', 'Premium Audio', 'Backup Camera', 'Leather Seats', 'Heated Seats'],
    createdAt: '2024-01-15',
    views: 1250,
    favorites: 89
  },
  {
    id: '2',
    title: '2020 Toyota Camry XLE',
    description: 'Excellent condition, one owner, full service history. Economical and reliable sedan perfect for family use.',
    price: 8500000,
    originalPrice: 9500000,
    discount: 10,
    category: 'cars',
    subCategory: 'sedan',
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
    images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800'],
    features: ['Sunroof', 'Navigation', 'Backup Camera', 'Bluetooth', 'Keyless Entry'],
    createdAt: '2024-01-20',
    views: 980,
    favorites: 45
  },
  {
    id: '3',
    title: '2018 Mercedes-Benz GLE 350',
    description: 'Luxury SUV with AMG package. All wheel drive, impeccable maintenance records.',
    price: 28000000,
    originalPrice: 35000000,
    discount: 20,
    category: 'cars',
    subCategory: 'suv',
    brand: 'Mercedes-Benz',
    condition: 'foreign-used',
    badge: 'diamond',
    location: 'Lagos',
    year: 2018,
    mileage: 55000,
    seller: {
      id: 'seller3',
      name: 'German Auto Imports',
      verified: true,
      rating: 4.7
    },
    images: ['https://images.unsplash.com/photo-1555212697-194d092e3b8f?auto=format&fit=crop&w=800'],
    features: ['AMG Package', 'Panoramic Roof', 'Premium Package', 'Driver Assistance', 'Burmester Audio'],
    createdAt: '2024-01-18',
    views: 2100,
    favorites: 120
  },
  {
    id: '4',
    title: '2016 Honda Civic Touring',
    description: 'Fuel efficient, low maintenance cost. Perfect for daily commute.',
    price: 5500000,
    originalPrice: 6500000,
    discount: 15,
    category: 'cars',
    subCategory: 'sedan',
    brand: 'Honda',
    condition: 'nigerian-used',
    badge: 'silver',
    location: 'Ibadan',
    year: 2016,
    mileage: 85000,
    seller: {
      id: 'seller4',
      name: 'Honda Direct',
      verified: true,
      rating: 4.5
    },
    images: ['https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800'],
    features: ['Sunroof', 'Lane Watch', 'Smart Entry', 'Touchscreen', 'Rear Camera'],
    createdAt: '2024-01-22',
    views: 750,
    favorites: 32
  },
  {
    id: '5',
    title: '2021 BMW X5 xDrive40i',
    description: 'Executive SUV with all luxury features. Still under manufacturer warranty.',
    price: 45000000,
    originalPrice: 52000000,
    discount: 13,
    category: 'cars',
    subCategory: 'suv',
    brand: 'BMW',
    condition: 'new',
    badge: 'diamond',
    location: 'Abuja',
    year: 2021,
    mileage: 12000,
    seller: {
      id: 'seller5',
      name: 'BMW Premium Selection',
      verified: true,
      rating: 4.9
    },
    images: ['https://images.unsplash.com/photo-1555218553-cdb7b1cda9f5?auto=format&fit=crop&w=800'],
    features: ['M Sport Package', 'Executive Package', 'Driving Assistant', 'Harman Kardon', 'Air Suspension'],
    createdAt: '2024-01-10',
    views: 3100,
    favorites: 210
  },
  {
    id: '6',
    title: '2019 Lexus RX 350 Luxury',
    description: 'Quiet luxury with exceptional reliability. Comprehensive service history available.',
    price: 32000000,
    originalPrice: 38000000,
    discount: 15,
    category: 'cars',
    subCategory: 'suv',
    brand: 'Lexus',
    condition: 'foreign-used',
    badge: 'platinum',
    location: 'Lagos',
    year: 2019,
    mileage: 40000,
    seller: {
      id: 'seller6',
      name: 'Lexus Certified',
      verified: true,
      rating: 4.8
    },
    images: ['https://images.unsplash.com/photo-1563720223485-8d6d5c55e7d3?auto=format&fit=crop&w=800'],
    features: ['Mark Levinson Audio', 'Heads-up Display', 'Premium Package', 'Memory Seats', '360 Camera'],
    createdAt: '2024-01-12',
    views: 1850,
    favorites: 95
  },
  {
    id: '7',
    title: '2017 Ford Ranger Raptor',
    description: 'Off-road capable pickup truck. Perfect for both work and adventure.',
    price: 18000000,
    originalPrice: 22000000,
    discount: 18,
    category: 'trucks',
    subCategory: 'pickup',
    brand: 'Ford',
    condition: 'foreign-used',
    badge: 'gold',
    location: 'Port Harcourt',
    year: 2017,
    mileage: 65000,
    seller: {
      id: 'seller7',
      name: 'Truck Masters',
      verified: true,
      rating: 4.6
    },
    images: ['https://images.unsplash.com/photo-1563720223485-8d6d5c55e7d3?auto=format&fit=crop&w=800'],
    features: ['4x4', 'Off-road Package', 'Leather Interior', 'Navigation', 'Tow Package'],
    createdAt: '2024-01-14',
    views: 1200,
    favorites: 67
  },
  {
    id: '8',
    title: '2020 Yamaha R6',
    description: 'Sport bike in excellent condition. Rare find with low mileage.',
    price: 4500000,
    originalPrice: 5500000,
    discount: 18,
    category: 'motorcycles',
    subCategory: 'sport-bike',
    brand: 'Yamaha',
    condition: 'foreign-used',
    badge: 'silver',
    location: 'Kano',
    year: 2020,
    mileage: 8000,
    seller: {
      id: 'seller8',
      name: 'Bike Empire',
      verified: true,
      rating: 4.7
    },
    images: ['https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800'],
    features: ['ABS', 'Quick Shifter', 'LED Lights', 'Sport Mode', 'Adjustable Suspension'],
    createdAt: '2024-01-16',
    views: 850,
    favorites: 42
  },
  {
    id: '9',
    title: 'Premium Car Audio System',
    description: 'Complete car audio upgrade package with subwoofer, amplifiers, and speakers.',
    price: 350000,
    originalPrice: 450000,
    discount: 22,
    category: 'parts',
    subCategory: 'electronics',
    brand: 'Pioneer',
    condition: 'new',
    badge: 'bronze',
    location: 'Lagos',
    year: 2023,
    seller: {
      id: 'seller9',
      name: 'Audio Experts',
      verified: true,
      rating: 4.8
    },
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800'],
    features: ['1000W Subwoofer', '4-channel Amp', 'Component Speakers', 'Wiring Kit', 'Digital Processor'],
    createdAt: '2024-01-19',
    views: 320,
    favorites: 18
  },
  {
    id: '10',
    title: '2022 Toyota Hiace Bus',
    description: 'Brand new passenger bus, perfect for transportation business.',
    price: 28000000,
    originalPrice: 32000000,
    discount: 12,
    category: 'buses',
    subCategory: 'shuttle-bus',
    brand: 'Toyota',
    condition: 'new',
    badge: 'gold',
    location: 'Abuja',
    year: 2022,
    mileage: 0,
    seller: {
      id: 'seller10',
      name: 'Commercial Vehicles Ltd',
      verified: true,
      rating: 4.9
    },
    images: ['https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800'],
    features: ['18 Seater', 'AC', 'Power Steering', 'Audio System', 'Spare Tire'],
    createdAt: '2024-01-21',
    views: 1500,
    favorites: 76
  }
];

// Additional helper data
export const priceRanges = [
  { id: 'range-1', label: 'Less than ₦2M', min: 0, max: 2000000 },
  { id: 'range-2', label: '₦2M - ₦3M', min: 2000000, max: 3000000 },
  { id: 'range-3', label: '₦3M - ₦4M', min: 3000000, max: 4000000 },
  { id: 'range-4', label: '₦4M - ₦5M', min: 4000000, max: 5000000 },
  { id: 'range-5', label: 'Above ₦5M', min: 5000000, max: 1000000000 }
];

export const yearRanges = [
  { id: '2022-2026', label: '2022 - 2026', min: 2022, max: 2026 },
  { id: '2017-2021', label: '2017 - 2021', min: 2017, max: 2021 },
  { id: '2012-2016', label: '2012 - 2016', min: 2012, max: 2016 },
  { id: '2007-2011', label: '2007 - 2011', min: 2007, max: 2011 },
  { id: '2002-2006', label: '2002 - 2006', min: 2002, max: 2006 }
];

// Helper functions
export const getBrandsByCategory = (category) => {
  return brands[category] || [];
};

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (productId) => {
  return products.find(product => product.id === productId);
};

export const getFeaturedProducts = (limit = 8) => {
  return [...products]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
};

export const getBestSellingProducts = (limit = 6) => {
  return [...products]
    .sort((a, b) => b.favorites - a.favorites)
    .slice(0, limit);
};