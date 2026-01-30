// In marketplaceData.js or a new file for filter configurations
export const categoryFilters = {
  // Automobiles specific filters
  automobiles: {
    showBrandFilter: true,
    showConditionFilter: true,
    showYearFilter: true,
    showMileageFilter: true,
    showTransmissionFilter: true,
    showFuelTypeFilter: true,
    showLocationFilter: true,
    showVerifiedSellersOnly: true,
    brands: ['Toyota', 'Honda', 'Mercedes-Benz', 'BMW', 'Lexus', 'Nissan', 'Ford', 'Hyundai', 'Kia', 'Volkswagen', 'Audi', 'Peugeot', 'Other'],
    years: [
      { id: '2022-2026', label: '2022 - 2026', min: 2022, max: 2026 },
      { id: '2017-2021', label: '2017 - 2021', min: 2017, max: 2021 },
      { id: '2012-2016', label: '2012 - 2016', min: 2012, max: 2016 },
      { id: '2007-2011', label: '2007 - 2011', min: 2007, max: 2011 }
    ],
    transmissions: [
      { id: 'automatic', name: 'Automatic' },
      { id: 'manual', name: 'Manual' },
      { id: 'semi-automatic', name: 'Semi-Automatic' }
    ],
    fuelTypes: [
      { id: 'petrol', name: 'Petrol' },
      { id: 'diesel', name: 'Diesel' },
      { id: 'hybrid', name: 'Hybrid' },
      { id: 'electric', name: 'Electric' }
    ],
    mileageRanges: [
      { id: '0-50k', label: '0 - 50,000 km', min: 0, max: 50000 },
      { id: '50k-100k', label: '50,000 - 100,000 km', min: 50000, max: 100000 },
      { id: '100k-150k', label: '100,000 - 150,000 km', min: 100000, max: 150000 },
      { id: '150k-plus', label: '150,000+ km', min: 150000, max: 1000000 }
    ]
  },
  
  // Phones & Tablets specific filters
  'phones-tablets': {
    showBrandFilter: true,
    showConditionFilter: true,
    showStorageFilter: true,
    showRAMFilter: true,
    showNetworkFilter: true,
    showBatteryFilter: true,
    showLocationFilter: true,
    brands: ['Samsung', 'iPhone', 'Realme', 'Xiaomi', 'Oppo', 'Vivo', 'Huawei', 'Infinix', 'Tecno', 'Google', 'OnePlus', 'Nokia'],
    storageOptions: [
      { id: '32gb', name: '32 GB' },
      { id: '64gb', name: '64 GB' },
      { id: '128gb', name: '128 GB' },
      { id: '256gb', name: '256 GB' },
      { id: '512gb', name: '512 GB' },
      { id: '1tb', name: '1 TB' }
    ],
    ramOptions: [
      { id: '2gb', name: '2 GB' },
      { id: '4gb', name: '4 GB' },
      { id: '6gb', name: '6 GB' },
      { id: '8gb', name: '8 GB' },
      { id: '12gb', name: '12 GB' },
      { id: '16gb', name: '16 GB' }
    ],
    networkTypes: [
      { id: '2g', name: '2G' },
      { id: '3g', name: '3G' },
      { id: '4g', name: '4G' },
      { id: '5g', name: '5G' }
    ],
    batteryRanges: [
      { id: '0-3000', label: 'Up to 3000mAh', min: 0, max: 3000 },
      { id: '3000-4000', label: '3000 - 4000mAh', min: 3000, max: 4000 },
      { id: '4000-5000', label: '4000 - 5000mAh', min: 4000, max: 5000 },
      { id: '5000-plus', label: '5000mAh+', min: 5000, max: 10000 }
    ]
  },
  
  // Electronics specific filters
  electronics: {
    showBrandFilter: true,
    showConditionFilter: true,
    showTypeFilter: true,
    showWarrantyFilter: true,
    showLocationFilter: true,
    brands: ['Samsung', 'Apple', 'Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'Microsoft', 'Sony', 'LG', 'Toshiba', 'Panasonic'],
    productTypes: [
      { id: 'laptops', name: 'Laptops' },
      { id: 'desktops', name: 'Desktops' },
      { id: 'tablets', name: 'Tablets' },
      { id: 'monitors', name: 'Monitors' },
      { id: 'printers', name: 'Printers' },
      { id: 'audio', name: 'Audio Devices' },
      { id: 'cameras', name: 'Cameras' },
      { id: 'gaming', name: 'Gaming Consoles' }
    ],
    warrantyOptions: [
      { id: 'no-warranty', name: 'No Warranty' },
      { id: '1-month', name: '1 Month' },
      { id: '3-months', name: '3 Months' },
      { id: '6-months', name: '6 Months' },
      { id: '1-year', name: '1 Year' },
      { id: '2-years', name: '2 Years' }
    ]
  },
  
  // Fashion specific filters
  fashion: {
    showGenderFilter: true,
    showSizeFilter: true,
    showColorFilter: true,
    showMaterialFilter: true,
    showBrandFilter: true,
    showConditionFilter: true,
    genders: [
      { id: 'men', name: 'Men' },
      { id: 'women', name: 'Women' },
      { id: 'unisex', name: 'Unisex' },
      { id: 'kids', name: 'Kids' }
    ],
    sizes: [
      { id: 'xs', name: 'XS' },
      { id: 's', name: 'S' },
      { id: 'm', name: 'M' },
      { id: 'l', name: 'L' },
      { id: 'xl', name: 'XL' },
      { id: 'xxl', name: 'XXL' },
      { id: '3xl', name: '3XL' }
    ],
    colors: [
      { id: 'black', name: 'Black', color: '#000000' },
      { id: 'white', name: 'White', color: '#FFFFFF' },
      { id: 'red', name: 'Red', color: '#FF0000' },
      { id: 'blue', name: 'Blue', color: '#0000FF' },
      { id: 'green', name: 'Green', color: '#008000' },
      { id: 'yellow', name: 'Yellow', color: '#FFFF00' },
      { id: 'purple', name: 'Purple', color: '#800080' },
      { id: 'pink', name: 'Pink', color: '#FFC0CB' },
      { id: 'brown', name: 'Brown', color: '#A52A2A' },
      { id: 'gray', name: 'Gray', color: '#808080' }
    ],
    materials: [
      { id: 'cotton', name: 'Cotton' },
      { id: 'polyester', name: 'Polyester' },
      { id: 'wool', name: 'Wool' },
      { id: 'silk', name: 'Silk' },
      { id: 'leather', name: 'Leather' },
      { id: 'denim', name: 'Denim' },
      { id: 'linen', name: 'Linen' }
    ]
  },
  
  // Homes & Living specific filters
  'home-living': {
    showRoomFilter: true,
    showMaterialFilter: true,
    showColorFilter: true,
    showConditionFilter: true,
    showDeliveryFilter: true,
    rooms: [
      { id: 'living-room', name: 'Living Room' },
      { id: 'bedroom', name: 'Bedroom' },
      { id: 'kitchen', name: 'Kitchen' },
      { id: 'dining-room', name: 'Dining Room' },
      { id: 'office', name: 'Office' },
      { id: 'outdoor', name: 'Outdoor' },
      { id: 'bathroom', name: 'Bathroom' }
    ],
    materials: [
      { id: 'wood', name: 'Wood' },
      { id: 'metal', name: 'Metal' },
      { id: 'glass', name: 'Glass' },
      { id: 'plastic', name: 'Plastic' },
      { id: 'fabric', name: 'Fabric' },
      { id: 'marble', name: 'Marble' }
    ],
    deliveryOptions: [
      { id: 'pickup', name: 'Pickup Only' },
      { id: 'delivery', name: 'Delivery Available' },
      { id: 'assembly', name: 'Assembly Included' }
    ]
  },
  
  // Services specific filters
  services: {
    showServiceTypeFilter: true,
    showAvailabilityFilter: true,
    showExperienceFilter: true,
    showLocationFilter: true,
    serviceTypes: [
      { id: 'professional', name: 'Professional Services' },
      { id: 'home-services', name: 'Home Services' },
      { id: 'automotive', name: 'Automotive' },
      { id: 'beauty', name: 'Beauty & Wellness' },
      { id: 'events', name: 'Events & Catering' },
      { id: 'education', name: 'Education & Tutoring' },
      { id: 'health', name: 'Health & Fitness' },
      { id: 'it', name: 'IT & Technology' }
    ],
    availabilityOptions: [
      { id: 'immediate', name: 'Immediate' },
      { id: '24-hours', name: 'Within 24 Hours' },
      { id: '48-hours', name: 'Within 48 Hours' },
      { id: 'week', name: 'Within a Week' }
    ],
    experienceLevels: [
      { id: 'beginner', name: 'Beginner (< 1 year)' },
      { id: 'intermediate', name: 'Intermediate (1-3 years)' },
      { id: 'experienced', name: 'Experienced (3-5 years)' },
      { id: 'expert', name: 'Expert (5+ years)' }
    ]
  },
  
  // Agriculture specific filters
  agriculture: {
    showProductTypeFilter: true,
    showConditionFilter: true,
    showQuantityFilter: true,
    showSeasonFilter: true,
    showLocationFilter: true,
    productTypes: [
      { id: 'equipment', name: 'Equipment' },
      { id: 'seeds', name: 'Seeds' },
      { id: 'fertilizers', name: 'Fertilizers' },
      { id: 'livestock', name: 'Livestock' },
      { id: 'produce', name: 'Produce' },
      { id: 'tools', name: 'Tools' }
    ],
    quantityTypes: [
      { id: 'per-kg', name: 'Per KG' },
      { id: 'per-ton', name: 'Per Ton' },
      { id: 'per-bag', name: 'Per Bag' },
      { id: 'per-unit', name: 'Per Unit' }
    ],
    seasons: [
      { id: 'all-season', name: 'All Season' },
      { id: 'rainy-season', name: 'Rainy Season' },
      { id: 'dry-season', name: 'Dry Season' },
      { id: 'planting-season', name: 'Planting Season' },
      { id: 'harvest-season', name: 'Harvest Season' }
    ]
  },
  
  // Default filters for uncategorized or when viewing all categories
  default: {
    showConditionFilter: true,
    showLocationFilter: true,
    showPriceFilter: true,
    showVerifiedSellersOnly: true
  }
};

// Common filter components (used across multiple categories)
export const commonFilters = {
  priceRanges: [
    { id: '0-2m', label: 'Less than ₦2M', min: 0, max: 2000000 },
    { id: '2m-3m', label: '₦2M - ₦3M', min: 2000000, max: 3000000 },
    { id: '3m-4m', label: '₦3M - ₦4M', min: 3000000, max: 4000000 },
    { id: '4m-5m', label: '₦4M - ₦5M', min: 4000000, max: 5000000 },
    { id: '5m-plus', label: 'Above ₦5M', min: 5000000, max: 100000000 }
  ],
  conditions: [
    { id: 'new', name: 'New' },
    { id: 'foreign-used', name: 'Foreign Used' },
    { id: 'nigerian-used', name: 'Nigerian Used' },
    { id: 'refurbished', name: 'Refurbished' }
  ],
  locations: [
    'Lagos', 'Abuja', 'Ibadan', 'Kano', 'Port Harcourt', 
    'Benin City', 'Kaduna', 'Maiduguri', 'Zaria', 'Aba'
  ]
};