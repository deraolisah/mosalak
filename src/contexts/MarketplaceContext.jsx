import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { 
  marketplaceData, 
  getCategoryById, 
  getProductsByCategory,
  getProductById,
  getFeaturedProducts,
  getBestSellingProducts,
  getTrendingProducts 
} from '../data/marketplaceData';

// Create context
export const MarketplaceContext = createContext();

// Provider component
export const MarketplaceProvider = ({ children }) => {
  // State
  const [products] = useState(marketplaceData.products);
  const [filteredProducts, setFilteredProducts] = useState(marketplaceData.products);
  const [categories] = useState(marketplaceData.categories);
  const [filterOptions] = useState(marketplaceData.filterOptions);

    // Add these to your state in MarketplaceContext.jsx
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  
  const [filters, setFilters] = useState({
    category: null,
    subcategory: null,
    brand: [],
    condition: [],
    badges: [],
    priceRange: [0, 100000000],
    locations: [],
    years: [],
    verifiedSellersOnly: false,
    searchQuery: ''
  });
  
  const [sortBy, setSortBy] = useState('popularity');
  const [pagination, setPagination] = useState({ page: 1, limit: 12, total: marketplaceData.products.length });

  // Apply filters
  const applyFilters = useCallback(() => {
    let filtered = [...products];
    
    // Category filter
    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    // Subcategory filter
    if (filters.subcategory) {
      filtered = filtered.filter(p => p.subcategory === filters.subcategory);
    }
    
    // Brand filter
    if (filters.brand.length > 0) {
      filtered = filtered.filter(p => filters.brand.includes(p.brand));
    }
    
    // Condition filter
    if (filters.condition.length > 0) {
      filtered = filtered.filter(p => filters.condition.includes(p.condition));
    }
    
    // Badge filter
    if (filters.badges.length > 0) {
      filtered = filtered.filter(p => filters.badges.includes(p.badge));
    }
    
    // Price range filter
    filtered = filtered.filter(p => 
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );
    
    // Location filter
    if (filters.locations.length > 0) {
      filtered = filtered.filter(p => filters.locations.includes(p.location));
    }
    
    // Year filter
    if (filters.years.length === 2) {
      filtered = filtered.filter(p => 
        p.year >= filters.years[0] && p.year <= filters.years[1]
      );
    }
    
    // Verified sellers only
    if (filters.verifiedSellersOnly) {
      filtered = filtered.filter(p => p.seller.verified);
    }
    
    // Search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query)
      );
    }
    
    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => b.views - a.views);
    }
    
    // Update pagination
    setPagination(prev => ({ ...prev, total: filtered.length }));
    
    // Apply pagination
    const start = (pagination.page - 1) * pagination.limit;
    const paginated = filtered.slice(start, start + pagination.limit);
    
    setFilteredProducts(paginated);
  }, [filters, sortBy, pagination.page, pagination.limit, products]);

  // Initialize filters
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  // Update filters
  const updateFilters = useCallback((newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setPagination(prev => ({ ...prev, page: 1 }));
  }, []);

  // Reset all filters
  const resetFilters = useCallback(() => {
    setFilters({
      category: null,
      subcategory: null,
      brand: [],
      condition: [],
      badges: [],
      priceRange: [0, 100000000],
      locations: [],
      years: [],
      verifiedSellersOnly: false,
      searchQuery: ''
    });
    setPagination(prev => ({ ...prev, page: 1 }));
  }, []);

  // Change page
  const changePage = useCallback((page) => {
    setPagination(prev => ({ ...prev, page }));
  }, []);





  // Add to cart function
  const addToCart = useCallback((product, quantity = 1) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  }, []);

  // Remove from cart
  const removeFromCart = useCallback((productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  }, []);

  // Add to wishlist
  const addToWishlist = useCallback((productId) => {
    setWishlist(prev => [...prev, productId]);
  }, []);

  // Remove from wishlist
  const removeFromWishlist = useCallback((productId) => {
    setWishlist(prev => prev.filter(id => id !== productId));
  }, []);


  // Context value
  const value = {
    // Data
    products,
    filteredProducts,
    categories,
    filterOptions,
    
    // State
    filters,
    sortBy,
    pagination,
    
    // Actions
    updateFilters,
    resetFilters,
    setSortBy,
    changePage,
    
    // Getters
    getCategoryById,
    getProductById,
    getFeaturedProducts,
    getBestSellingProducts,
    getProductsByCategory,
    getTrendingProducts,

    // Add these to your context value:
    wishlist,
    cart,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <MarketplaceContext.Provider value={value}>
      {children}
    </MarketplaceContext.Provider>
  );
};

// Custom hook
export const useMarketplace = () => {
  const context = useContext(MarketplaceContext);
  if (!context) {
    throw new Error('useMarketplace must be used within MarketplaceProvider');
  }
  return context;
};