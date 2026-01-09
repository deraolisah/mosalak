import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X, ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMarketplace } from "../../contexts/MarketplaceContext";

const CategoriesBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedMain, setSelectedMain] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [mobileView, setMobileView] = useState("main");

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const navigate = useNavigate();
  
  // Use your marketplace context
  const { 
    categories, 
    products, 
    updateFilters,
    getCategoryById
  } = useMarketplace();

  // Convert your context categories to mega menu format
  const megaMenuData = React.useMemo(() => {
    if (!categories || categories.length === 0) return {};

    const menuStructure = {};

    // Group by main categories (using your actual category data)
    categories.forEach(category => {
      // Each category in your data is a main category
      const mainCategory = category.name;
      
      if (!menuStructure[mainCategory]) {
        menuStructure[mainCategory] = {
          id: category.id,
          subcategories: {},
          banner: null,
          color: category.color,
          icon: category.icon
        };
      }

      // Get products for this category
      const categoryProducts = products.filter(p => p.category === category.id);
      
      // Get unique brands from products in this category
      const brands = [...new Set(categoryProducts.map(p => p.brand).filter(Boolean))];
      
      // Get subcategories for this category
      const subcategories = [...new Set(categoryProducts.map(p => p.subcategory).filter(Boolean))];
      
      // Create subcategory entries
      if (subcategories.length > 0) {
        subcategories.forEach(sub => {
          const subProducts = categoryProducts.filter(p => p.subcategory === sub);
          const subBrands = [...new Set(subProducts.map(p => p.brand).filter(Boolean))];
          
          menuStructure[mainCategory].subcategories[sub] = {
            tag: `${category.id}/${sub}`,
            brands: ['All ' + sub, ...subBrands].slice(0, 10),
            featured: subProducts.slice(0, 4).map(p => ({
              id: p.id,
              title: p.title,
              price: `₦${p.price.toLocaleString()}`,
              image: p.images?.[0] || "https://via.placeholder.com/300x200",
              brand: p.brand
            }))
          };
        });
      } else {
        // If no subcategories, create a default one
        menuStructure[mainCategory].subcategories[mainCategory] = {
          tag: category.id,
          brands: ['All ' + mainCategory, ...brands].slice(0, 10),
          featured: categoryProducts.slice(0, 4).map(p => ({
            id: p.id,
            title: p.title,
            price: `₦${p.price.toLocaleString()}`,
            image: p.images?.[0] || "https://via.placeholder.com/300x200",
            brand: p.brand
          }))
        };
      }
    });

    return menuStructure;
  }, [categories, products]);

  const resetMobileView = () => {
    setMobileView("main");
  };

  const handleMainCategoryClick = (category) => {
    setSelectedMain(category);
    const subKeys = Object.keys(megaMenuData[category]?.subcategories || {});
    if (subKeys.length > 0) {
      setSelectedSub(subKeys[0]);
    }
    setMobileView("sub");
  };

  const handleSubcategoryClick = (sub) => {
    setSelectedSub(sub);
    setMobileView("brands");
  };

  const handleBrandClick = (brand) => {
    const currentMain = megaMenuData[selectedMain];
    const currentSubData = currentMain?.subcategories?.[selectedSub];
    
    if (currentSubData) {
      console.log(`Selected: ${selectedMain} > ${selectedSub} > ${brand}`);
      
      // Navigate to marketplace with the category
      if (currentSubData.tag.includes('/')) {
        const [categoryId, subcategoryId] = currentSubData.tag.split('/');
        navigate(`/marketplace/${categoryId}/${subcategoryId}`);
        updateFilters({ 
          category: categoryId,
          subcategory: subcategoryId
        });
      } else {
        navigate(`/marketplace/${currentSubData.tag}`);
        updateFilters({ 
          category: currentMain.id,
          subcategory: null
        });
      }
      
      // Apply filters based on brand selection
      if (brand !== `All ${selectedSub}`) {
        updateFilters({ brand: [brand] });
      } else {
        updateFilters({ brand: [] }); // Clear brand filter for "All"
      }
      
      if (currentSubData?.featured && currentSubData.featured.length > 0) {
        setMobileView("featured");
      } else {
        setDropdownOpen(false);
        resetMobileView();
      }
    }
  };

  const handleFeaturedProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setDropdownOpen(false);
    resetMobileView();
  };

  const handleShopFeatured = () => {
    const currentMain = megaMenuData[selectedMain];
    const currentSubData = currentMain?.subcategories?.[selectedSub];
    if (currentSubData) {
      if (currentSubData.tag.includes('/')) {
        const [categoryId, subcategoryId] = currentSubData.tag.split('/');
        navigate(`/marketplace/${categoryId}/${subcategoryId}`);
      } else {
        navigate(`/marketplace/${currentSubData.tag}`);
      }
      setDropdownOpen(false);
      resetMobileView();
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownOpen) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(e.target) &&
          buttonRef.current &&
          !buttonRef.current.contains(e.target)
        ) {
          setDropdownOpen(false);
          resetMobileView();
        }
      }
    };
    
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);

  // Initialize selected categories when mega menu opens
  useEffect(() => {
    if (dropdownOpen && Object.keys(megaMenuData).length > 0) {
      const mainKeys = Object.keys(megaMenuData);
      if (!selectedMain || !megaMenuData[selectedMain]) {
        setSelectedMain(mainKeys[0]);
        const subKeys = Object.keys(megaMenuData[mainKeys[0]]?.subcategories || {});
        if (subKeys.length > 0) {
          setSelectedSub(subKeys[0]);
        }
      }
    }
  }, [dropdownOpen, megaMenuData]);

  const currentMainData = megaMenuData[selectedMain];
  const currentSubData = currentMainData?.subcategories?.[selectedSub];

  const mainCategories = Object.keys(megaMenuData);

  const MobileHeader = ({ title, onBack }) => (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-600 text-white z-10">
      <button
        onClick={onBack}
        className="flex items-center gap-2 p-1 hover:bg-blue-700 rounded"
      >
        <ChevronLeft size={20} />
        <span className="text-sm">Back</span>
      </button>
      <h3 className="font-semibold text-center flex-1">{title}</h3>
      <button
        onClick={() => {
          setDropdownOpen(false);
          resetMobileView();
        }}
        className="p-1 hover:bg-blue-700 rounded"
      >
        <X size={20} />
      </button>
    </div>
  );


  return (
    <div className="bg-indigo-200 z-40">
      <div className="container flex items-center gap-8 py-4 text-sm overflow-x-auto">
        <button
          ref={buttonRef}
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
            if (!dropdownOpen) resetMobileView();
          }}
          className="flex items-center gap-1 font-medium whitespace-nowrap text-nowrap"
        >
          All Categories
          <ChevronDown
            size={16}
            className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        <button 
          onClick={() => {
            navigate('/marketplace');
            updateFilters({}); // Clear filters for featured
          }}
          className="whitespace-nowrap cursor-pointer"
        >
          Featured selections
        </button>
        <button 
          onClick={() => {
            navigate('/marketplace');
            updateFilters({ sort: 'popularity' });
          }}
          className="whitespace-nowrap cursor-pointer"
        >
          Best Sellers
        </button>
        <button 
          onClick={() => {
            navigate('/marketplace');
            updateFilters({ sort: 'newest' });
          }}
          className="whitespace-nowrap cursor-pointer"
        >
          Newest Arrivals
        </button>

        {dropdownOpen && (
          <div
            className="fixed top-0 inset-0 bg-black/60 -z-2"
            onClick={() => {
              setDropdownOpen(false);
              resetMobileView();
            }}
          />
        )}

        {/* Mega Menu Dropdown */}
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="fixed md:absolute left-1/2 top-16 md:top-full mt-0 md:mt-2 w-full md:w-[95vw] container -translate-x-1/2 bg-white shadow-2xl rounded-b-lg md:rounded-sm! border-t md:border border-gray-200 z-40 overflow-hidden p-0"
          >
            {/* DESKTOP VIEW */}
            <div className="hidden md:flex flex-col md:flex-row max-h-[80vh] md:max-h-[70vh] overflow-hidden">
              {/* COLUMN 1: Main Categories */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50 overflow-y-auto">
                <div className="p-2">
                  <h4 className="hidden md:block font-semibold text-gray-900 px-3 py-3">
                    All Categories
                  </h4>
                  <ul className="space-y-1">
                    {mainCategories.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => {
                            setSelectedMain(category);
                            const subKeys = Object.keys(megaMenuData[category]?.subcategories || {});
                            if (subKeys.length > 0) {
                              setSelectedSub(subKeys[0]);
                            }
                          }}
                          className={`w-full text-left px-3 py-3 rounded-lg flex items-center justify-between transition-all ${
                            selectedMain === category
                              ? "bg-white text-blue-600 font-medium shadow-sm border border-blue-100"
                              : "hover:bg-white hover:shadow-sm text-gray-700"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span>{megaMenuData[category]?.icon}</span>
                            <span>{category}</span>
                          </span>
                          <ChevronRight size={16} className="text-gray-400" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* COLUMN 2: Subcategories */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 overflow-y-auto">
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {selectedMain}
                  </h4>
                  <ul className="space-y-1">
                    {currentMainData?.subcategories &&
                      Object.keys(currentMainData.subcategories).map((sub) => (
                        <li key={sub}>
                          <button
                            onClick={() => setSelectedSub(sub)}
                            className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between transition-all ${
                              selectedSub === sub
                                ? "bg-blue-50 text-blue-600 font-medium"
                                : "hover:bg-gray-50 text-gray-700"
                            }`}
                          >
                            <span>{sub}</span>
                            <ChevronRight size={16} className="text-gray-400" />
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              {/* COLUMN 3: Brands */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 overflow-y-auto">
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {selectedSub}
                  </h4>
                  <ul className="space-y-1">
                    {currentSubData?.brands?.map((brand) => (
                      <li key={brand}>
                        <button
                          onClick={() => handleBrandClick(brand)}
                          className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
                        >
                          {brand}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* COLUMN 4: Featured Products */}
              <div className="flex-1 min-w-0 overflow-y-auto">
                <div className="p-4 h-full">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    FEATURED {selectedSub?.toUpperCase()}
                  </h4>
                  {currentSubData?.featured && currentSubData.featured.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentSubData.featured.map((item) => (
                        <div key={item.id} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="aspect-video bg-gray-100 rounded mb-3 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = "https://via.placeholder.com/300x200";
                              }}
                            />
                          </div>
                          <h5 className="text-sm font-medium text-gray-900 line-clamp-2">
                            {item.title}
                          </h5>
                          <p className="text-blue-600 font-bold mt-2">{item.price}</p>
                          <button 
                            onClick={() => handleFeaturedProductClick(item.id)}
                            className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm transition-colors"
                          >
                            SHOP NOW →
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400 p-8">
                      <p className="text-center mb-4">No featured products available</p>
                      <button
                        onClick={handleShopFeatured}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded text-sm transition-colors"
                      >
                        Browse {selectedSub}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* MOBILE VIEW */}
            <div className="md:hidden h-[70vh] overflow-hidden flex flex-col">
              {/* Main Categories View */}
              {mobileView === "main" && (
                <>
                  <MobileHeader
                    title="All Categories"
                    onBack={() => {
                      setDropdownOpen(false);
                      resetMobileView();
                    }}
                  />
                  <div className="flex-1 overflow-y-auto p-4">
                    <ul className="space-y-2">
                      {mainCategories.map((category) => (
                        <li key={category}>
                          <button
                            onClick={() => handleMainCategoryClick(category)}
                            className="w-full text-left px-4 py-4 rounded-lg flex items-center justify-between bg-gray-50 hover:bg-white hover:shadow-sm text-gray-700 border border-gray-200 transition-all"
                          >
                            <span className="font-medium flex items-center gap-2">
                              <span>{megaMenuData[category]?.icon}</span>
                              <span>{category}</span>
                            </span>
                            <ChevronRight size={18} className="text-gray-400" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* Subcategories View */}
              {mobileView === "sub" && (
                <>
                  <MobileHeader
                    title={selectedMain}
                    onBack={() => setMobileView("main")}
                  />
                  <div className="flex-1 overflow-y-auto p-4">
                    <ul className="space-y-2">
                      {currentMainData?.subcategories &&
                        Object.keys(currentMainData.subcategories).map((sub) => (
                          <li key={sub}>
                            <button
                              onClick={() => handleSubcategoryClick(sub)}
                              className="w-full text-left px-4 py-4 rounded-lg flex items-center justify-between bg-gray-50 hover:bg-white hover:shadow-sm text-gray-700 border border-gray-200 transition-all"
                            >
                              <span className="font-medium">{sub}</span>
                              <ChevronRight size={18} className="text-gray-400" />
                            </button>
                          </li>
                        ))}
                    </ul>
                  </div>
                </>
              )}

              {/* Brands View */}
              {mobileView === "brands" && (
                <>
                  <MobileHeader
                    title={selectedSub}
                    onBack={() => setMobileView("sub")}
                  />
                  <div className="flex-1 overflow-y-auto p-4">
                    <ul className="space-y-2">
                      {currentSubData?.brands?.map((brand) => (
                        <li key={brand}>
                          <button
                            onClick={() => handleBrandClick(brand)}
                            className="w-full text-left px-4 py-4 rounded-lg flex items-center justify-between bg-gray-50 hover:bg-white hover:shadow-sm text-gray-700 border border-gray-200 transition-all"
                          >
                            <span className="font-medium">{brand}</span>
                            <ChevronRight size={18} className="text-gray-400" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* Featured Products View */}
              {mobileView === "featured" && (
                <>
                  <MobileHeader
                    title={`Featured ${selectedSub}`}
                    onBack={() => setMobileView("brands")}
                  />
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-4">
                      {currentSubData?.featured?.map((item) => (
                        <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="aspect-video bg-gray-100 rounded mb-3 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = "https://via.placeholder.com/300x200";
                              }}
                            />
                          </div>
                          <h5 className="text-sm font-medium text-gray-900 mb-2">
                            {item.title}
                          </h5>
                          <p className="text-blue-600 font-bold mb-3">{item.price}</p>
                          <button 
                            onClick={() => handleFeaturedProductClick(item.id)}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded text-sm transition-colors"
                          >
                            SHOP NOW →
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesBar;