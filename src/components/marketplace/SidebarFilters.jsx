// components/marketplace/SidebarFilters.jsx
import React, { useState, useEffect } from 'react';
import { useMarketplace } from '../../contexts/MarketplaceContext';
import { categoryFilters, commonFilters } from '../../data/categoryFilters';

const SidebarFilters = ({ filters, onFilterChange, onClearAllFilters }) => {
  const { categories, getCategoryById, filterOptions } = useMarketplace();
  
  // Get current category's filter configuration
  const currentCategoryId = filters.category;
  const currentCategory = currentCategoryId ? getCategoryById(currentCategoryId) : null;
  const categoryFilterConfig = currentCategoryId 
    ? categoryFilters[currentCategoryId] || categoryFilters.default
    : categoryFilters.default;

  // State for collapsible sections
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    subcategories: true,
    condition: true,
    price: true,
    location: true,
    badges: false,
    brands: false,
    year: false,
    transmission: false,
    fuelType: false,
    mileage: false,
    storage: false,
    ram: false,
    network: false,
    battery: false,
    gender: false,
    size: false,
    color: false,
    material: false,
    type: false,
    warranty: false,
    verifiedSellers: true
  });

  // Auto-expand relevant sections based on category
  useEffect(() => {
    if (currentCategoryId) {
      const newExpandedSections = { ...expandedSections };
      
      // Auto-expand category-specific sections
      if (currentCategoryId === 'automobiles') {
        newExpandedSections.brands = true;
        newExpandedSections.year = true;
        newExpandedSections.transmission = true;
        newExpandedSections.fuelType = true;
        newExpandedSections.mileage = true;
      } else if (currentCategoryId === 'phones-tablets') {
        newExpandedSections.brands = true;
        newExpandedSections.storage = true;
        newExpandedSections.ram = true;
        newExpandedSections.network = true;
        newExpandedSections.battery = true;
      } else if (currentCategoryId === 'electronics') {
        newExpandedSections.brands = true;
        newExpandedSections.type = true;
        newExpandedSections.warranty = true;
      } else if (currentCategoryId === 'fashion') {
        newExpandedSections.gender = true;
        newExpandedSections.size = true;
        newExpandedSections.color = true;
        newExpandedSections.material = true;
      }
      
      setExpandedSections(newExpandedSections);
    }
  }, [currentCategoryId]);

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Common handler functions
  const handleCheckboxChange = (type, value) => {
    const current = filters[type] || [];
    const newValue = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    onFilterChange({ [type]: newValue });
  };

  const handleRadioChange = (type, value) => {
    onFilterChange({ [type]: value });
  };

  const handleRangeChange = (type, min, max) => {
    onFilterChange({ [type]: [min, max] });
  };

  const handleSingleCheckboxChange = (type, value) => {
    onFilterChange({ [type]: value });
  };

  // Handler for subcategory selection
  const handleSubcategoryChange = (subcategoryId) => {
    if (filters.subcategory === subcategoryId) {
      onFilterChange({ subcategory: null });
    } else {
      onFilterChange({ subcategory: subcategoryId });
    }
  };

  // Render collapsible filter section
  const renderCollapsibleFilterSection = (title, type, options, renderType = 'checkbox', sectionKey) => {
    if (!options || options.length === 0) return null;

    const isExpanded = expandedSections[sectionKey] !== undefined ? expandedSections[sectionKey] : true;

    return (
      <div className="mb-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
        <button
          type="button"
          className="flex items-center justify-between w-full font-semibold text-gray-800 hover:text-gray-900 mb-2"
          onClick={() => toggleSection(sectionKey)}
        >
          <span className="text-sm uppercase tracking-wide">{title}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isExpanded && (
          <div className="space-y-2">
            {/* Add "All" option for radio filters */}
            {renderType === 'radio' && (
              <div className="flex items-center">
                <input
                  type="radio"
                  id={`${type}-all`}
                  name={type}
                  checked={!filters[type] || filters[type].length === 0}
                  onChange={() => onFilterChange({ [type]: [] })}
                  className="mr-2"
                />
                <label htmlFor={`${type}-all`} className="cursor-pointer text-sm">
                  All
                </label>
              </div>
            )}

            {options.map(option => (
              <div key={option.id || option} className="flex items-center">
                {renderType === 'checkbox' ? (
                  <input
                    type="checkbox"
                    id={`${type}-${option.id || option}`}
                    checked={(filters[type] || []).includes(option.id || option)}
                    onChange={() => handleCheckboxChange(type, option.id || option)}
                    className="mr-2"
                  />
                ) : (
                  <input
                    type="radio"
                    id={`${type}-${option.id || option}`}
                    name={type}
                    checked={filters[type] === option.id || filters[type] === option}
                    onChange={() => handleRadioChange(type, option.id || option)}
                    className="mr-2"
                  />
                )}
                <label htmlFor={`${type}-${option.id || option}`} className="cursor-pointer text-sm">
                  {option.name || option.label || option}
                </label>
                {option.color && (
                  <span 
                    className="ml-2 w-3 h-3 rounded-full inline-block border border-gray-300"
                    style={{ backgroundColor: option.color }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Render collapsible range filter
  const renderCollapsibleRangeFilter = (title, type, ranges, sectionKey) => {
    if (!ranges || ranges.length === 0) return null;

    const isExpanded = expandedSections[sectionKey] !== undefined ? expandedSections[sectionKey] : true;

    return (
      <div className="mb-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
        <button
          type="button"
          className="flex items-center justify-between w-full font-semibold text-gray-800 hover:text-gray-900 mb-2"
          onClick={() => toggleSection(sectionKey)}
        >
          <span className="text-sm uppercase tracking-wide">{title}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isExpanded && (
          <div className="space-y-2">
            {/* "All Price Ranges" option */}
            <div className="flex items-center">
              <input
                type="radio"
                id={`${type}-all`}
                name={type}
                checked={filters[type][0] === 0 && filters[type][1] === 100000000}
                onChange={() => handleRangeChange(type, 0, 100000000)}
                className="mr-2"
              />
              <label htmlFor={`${type}-all`} className="cursor-pointer text-sm">
                All Prices
              </label>
            </div>

            {ranges.map(range => (
              <div key={range.id} className="flex items-center">
                <input
                  type="radio"
                  id={`${type}-${range.id}`}
                  name={type}
                  checked={
                    filters[type][0] === range.min && 
                    filters[type][1] === range.max
                  }
                  onChange={() => handleRangeChange(type, range.min, range.max)}
                  className="mr-2"
                />
                <label htmlFor={`${type}-${range.id}`} className="cursor-pointer text-sm">
                  {range.label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Render collapsible subcategories section
  const renderCollapsibleSubcategories = () => {
    if (!currentCategory || !currentCategory.subcategories || currentCategory.subcategories.length === 0) {
      return null;
    }

    const isExpanded = expandedSections.subcategories;

    return (
      <div className="mb-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
        <button
          type="button"
          className="flex items-center justify-between w-full font-semibold text-gray-800 hover:text-gray-900 mb-2"
          onClick={() => toggleSection('subcategories')}
        >
          <span className="text-sm uppercase tracking-wide">Subcategories</span>
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isExpanded && (
          <div className="space-y-2">
            {/* "All Subcategories" option */}
            <div className="flex items-center">
              <input
                type="radio"
                id="subcategory-all"
                name="subcategory"
                checked={!filters.subcategory}
                onChange={() => handleSubcategoryChange(null)}
                className="mr-2"
              />
              <label htmlFor="subcategory-all" className="cursor-pointer text-sm">
                All {currentCategory.name}
              </label>
            </div>
            
            {/* Individual subcategories */}
            {currentCategory.subcategories.map(subcategory => {
              const subcategoryId = typeof subcategory === 'object' ? subcategory.id : subcategory;
              const subcategoryName = typeof subcategory === 'object' ? subcategory.name : subcategory;
              
              return (
                <div key={subcategoryId} className="flex items-center">
                  <input
                    type="radio"
                    id={`subcategory-${subcategoryId}`}
                    name="subcategory"
                    checked={filters.subcategory === subcategoryId}
                    onChange={() => handleSubcategoryChange(subcategoryId)}
                    className="mr-2"
                  />
                  <label htmlFor={`subcategory-${subcategoryId}`} className="cursor-pointer text-sm">
                    {subcategoryName}
                  </label>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // Render search input for brands (like in the image)
  const renderBrandSearch = () => {
    const isExpanded = expandedSections.brands;
    const brandOptions = currentCategoryId && categoryFilters[currentCategoryId]?.brands 
      ? categoryFilters[currentCategoryId].brands.map(brand => ({ id: brand.toLowerCase(), name: brand }))
      : [];

    if (brandOptions.length === 0) return null;

    return (
      <div className="mb-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
        <button
          type="button"
          className="flex items-center justify-between w-full font-semibold text-gray-800 hover:text-gray-900 mb-2"
          onClick={() => toggleSection('brands')}
        >
          <span className="text-sm uppercase tracking-wide">Brands</span>
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isExpanded && (
          <div className="space-y-3">
            {/* Search input for brands */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search brands..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                onChange={(e) => {
                  // You can implement search functionality here
                  console.log('Search:', e.target.value);
                }}
              />
              <svg
                className="absolute right-3 top-2.5 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {/* "All Brands" option */}
              <div className="flex items-center">
                <input
                  type="radio"
                  id="brand-all"
                  name="brand"
                  checked={!filters.brand || filters.brand.length === 0}
                  onChange={() => onFilterChange({ brand: [] })}
                  className="mr-2"
                />
                <label htmlFor="brand-all" className="cursor-pointer text-sm">
                  All
                </label>
              </div>

              {brandOptions.map(brand => (
                <div key={brand.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`brand-${brand.id}`}
                    checked={(filters.brand || []).includes(brand.id)}
                    onChange={() => handleCheckboxChange('brand', brand.id)}
                    className="mr-2"
                  />
                  <label htmlFor={`brand-${brand.id}`} className="cursor-pointer text-sm">
                    {brand.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render single checkbox section (like Verified Sellers)
  const renderCollapsibleSingleCheckbox = (title, type, checked, sectionKey) => {
    const isExpanded = expandedSections[sectionKey];

    return (
      <div className="mb-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
        <button
          type="button"
          className="flex items-center justify-between w-full font-semibold text-gray-800 hover:text-gray-900 mb-2"
          onClick={() => toggleSection(sectionKey)}
        >
          <span className="text-sm uppercase tracking-wide">{title}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isExpanded && (
          <div className="flex items-center">
            <input
              type="checkbox"
              id={type}
              checked={checked || false}
              onChange={(e) => onFilterChange({ [type]: e.target.checked })}
              className="mr-2"
            />
            <label htmlFor={type} className="cursor-pointer text-sm">
              {title}
            </label>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      {/* Header with Clear All button */}
      <div className="mb-6 flex justify-between items-center">
        <h3 className="font-bold text-lg">Filters</h3>
        <button
          onClick={onClearAllFilters}
          className="text-sm text-primary hover:text-primary/80 cursor-pointer font-medium"
        >
          Clear all
        </button>
      </div>

      {/* Category Selection */}
      <div className="mb-4 border-b border-gray-100 pb-4">
        <button
          type="button"
          className="flex items-center justify-between w-full font-semibold text-gray-800 hover:text-gray-900 mb-2"
          onClick={() => toggleSection('category')}
        >
          <span className="text-sm uppercase tracking-wide">Category</span>
          <svg
            className={`w-4 h-4 transition-transform ${expandedSections.category ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {expandedSections.category && (
          <ul className='flex flex-col gap-2'>
            <label className='flex space-x-2 cursor-pointer items-center'>
              <input 
                type='radio'
                name="category"
                className="cursor-pointer"
                checked={!filters.category}
                onChange={() => handleRadioChange('category', null)}
              />
              <span className="select-none text-sm">All Categories</span>
            </label>
            
            {categories.map((category) => (
              <label key={category.id} className='flex space-x-2 cursor-pointer items-center'>
                <input 
                  type='radio'
                  name="category"
                  className="cursor-pointer"
                  checked={filters.category === category.id}
                  onChange={() => handleRadioChange('category', category.id)}
                />
                <span className="select-none text-sm">{category.name}</span>
              </label>            
            ))}
          </ul>
        )}
      </div>

      {/* Subcategories Section - Only show when a category is selected */}
      {currentCategory && renderCollapsibleSubcategories()}

      {/* Badges Filter */}
      {renderCollapsibleFilterSection(
        'Badges',
        'badges',
        filterOptions.badges || [],
        'radio',
        'badges'
      )}

      {/* Condition Filter */}
      {categoryFilterConfig.showConditionFilter && renderCollapsibleFilterSection(
        'Condition',
        'condition',
        commonFilters.conditions,
        'checkbox',
        'condition'
      )}

      {/* Price Range */}
      {categoryFilterConfig.showPriceFilter && renderCollapsibleRangeFilter(
        'Price',
        'priceRange',
        commonFilters.priceRanges,
        'price'
      )}

      {/* Location Filter */}
      {categoryFilterConfig.showLocationFilter && renderCollapsibleFilterSection(
        'Location',
        'locations',
        commonFilters.locations.map(loc => ({ id: loc, name: loc })),
        'checkbox',
        'location'
      )}

      {/* CATEGORY-SPECIFIC FILTERS */}
      
      {/* Automobiles Specific Filters */}
      {currentCategoryId === 'automobiles' && (
        <>
          {/* Brands with search */}
          {(filters.subcategory === 'cars' || !filters.subcategory) && renderBrandSearch()}
          
          {categoryFilterConfig.showYearFilter && renderCollapsibleRangeFilter(
            'Year',
            'years',
            categoryFilterConfig.years,
            'year'
          )}
          
          {categoryFilterConfig.showTransmissionFilter && renderCollapsibleFilterSection(
            'Transmission',
            'transmission',
            categoryFilterConfig.transmissions,
            'checkbox',
            'transmission'
          )}
          
          {categoryFilterConfig.showFuelTypeFilter && renderCollapsibleFilterSection(
            'Fuel Type',
            'fuelType',
            categoryFilterConfig.fuelTypes,
            'checkbox',
            'fuelType'
          )}
          
          {categoryFilterConfig.showMileageFilter && renderCollapsibleRangeFilter(
            'Mileage',
            'mileageRange',
            categoryFilterConfig.mileageRanges,
            'mileage'
          )}
        </>
      )}

      {/* Phones & Tablets Specific Filters */}
      {currentCategoryId === 'phones-tablets' && (
        <>
          {renderBrandSearch()}
          
          {categoryFilterConfig.showStorageFilter && renderCollapsibleFilterSection(
            'Storage',
            'storage',
            categoryFilterConfig.storageOptions,
            'checkbox',
            'storage'
          )}
          
          {categoryFilterConfig.showRAMFilter && renderCollapsibleFilterSection(
            'RAM',
            'ram',
            categoryFilterConfig.ramOptions,
            'checkbox',
            'ram'
          )}
          
          {categoryFilterConfig.showNetworkFilter && renderCollapsibleFilterSection(
            'Network',
            'networkType',
            categoryFilterConfig.networkTypes,
            'checkbox',
            'network'
          )}
          
          {categoryFilterConfig.showBatteryFilter && renderCollapsibleRangeFilter(
            'Battery',
            'batteryRange',
            categoryFilterConfig.batteryRanges,
            'battery'
          )}
        </>
      )}

      {/* Fashion Specific Filters */}
      {currentCategoryId === 'fashion' && (
        <>
          {categoryFilterConfig.showGenderFilter && renderCollapsibleFilterSection(
            'Gender',
            'gender',
            categoryFilterConfig.genders,
            'checkbox',
            'gender'
          )}
          
          {categoryFilterConfig.showSizeFilter && renderCollapsibleFilterSection(
            'Size',
            'size',
            categoryFilterConfig.sizes,
            'checkbox',
            'size'
          )}
          
          {categoryFilterConfig.showColorFilter && renderCollapsibleFilterSection(
            'Color',
            'color',
            categoryFilterConfig.colors,
            'checkbox',
            'color'
          )}
          
          {categoryFilterConfig.showMaterialFilter && renderCollapsibleFilterSection(
            'Material',
            'material',
            categoryFilterConfig.materials,
            'checkbox',
            'material'
          )}
        </>
      )}

      {/* Electronics Specific Filters */}
      {currentCategoryId === 'electronics' && (
        <>
          {renderBrandSearch()}
          
          {categoryFilterConfig.showTypeFilter && renderCollapsibleFilterSection(
            'Type',
            'productType',
            categoryFilterConfig.productTypes,
            'checkbox',
            'type'
          )}
          
          {categoryFilterConfig.showWarrantyFilter && renderCollapsibleFilterSection(
            'Warranty',
            'warranty',
            categoryFilterConfig.warrantyOptions,
            'checkbox',
            'warranty'
          )}
        </>
      )}

      {/* Verified Sellers Only */}
      {categoryFilterConfig.showVerifiedSellersOnly && renderCollapsibleSingleCheckbox(
        'Verified Sellers Only',
        'verifiedSellersOnly',
        filters.verifiedSellersOnly,
        'verifiedSellers'
      )}
    </div>
  );
};

export default SidebarFilters;