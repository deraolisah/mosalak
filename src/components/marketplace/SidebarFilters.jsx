import React from 'react';
import { useMarketplace } from '../../contexts/MarketplaceContext';

const SidebarFilters = ({ filters, onFilterChange }) => {
  const { categories, filterOptions } = useMarketplace();

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

  const handlePriceChange = (min, max) => {
    onFilterChange({ priceRange: [min, max] });
  };

  const resetFilters = () => {
    onFilterChange({
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
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="mb-6">
        {/* <h3 className="font-bold text-lg mb-4">Filters</h3> */}
        <button
          onClick={resetFilters}
          className="btn btn-text text-primary p-0 hover:text-primary/80 cursor-pointer"
        >
          Clear all filters
        </button>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Category</h4>
        <ul className='flex flex-col gap-2'>
          {categories.map((category, index) => {
            return (
              <label key={index} className='flex space-x-2'>
                <input type='checkbox' />
                <span> {category.name} </span>
              </label>            
            )
          })}
        </ul>
        {/* Category selection will be handled by navigation */}
      </div>

      {/* Condition */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Condition</h4>
        <div className="space-y-2">
          {filterOptions.conditions.map(cond => (
            <div key={cond.id} className="flex items-center">
              <input
                type="checkbox"
                id={`cond-${cond.id}`}
                checked={(filters.condition || []).includes(cond.id)}
                onChange={() => handleCheckboxChange('condition', cond.id)}
                className="mr-2"
              />
              <label htmlFor={`cond-${cond.id}`}>{cond.name}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Price Range</h4>
        <div className="space-y-2">
          {filterOptions.priceRanges.map(range => (
            <div key={range.id} className="flex items-center">
              <input
                type="radio"
                id={`price-${range.id}`}
                name="price"
                checked={
                  filters.priceRange[0] === range.min && 
                  filters.priceRange[1] === range.max
                }
                onChange={() => handlePriceChange(range.min, range.max)}
                className="mr-2"
              />
              <label htmlFor={`price-${range.id}`}>{range.label}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Location</h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {filterOptions.locations.map(location => (
            <div key={location} className="flex items-center">
              <input
                type="checkbox"
                id={`loc-${location}`}
                checked={(filters.locations || []).includes(location)}
                onChange={() => handleCheckboxChange('locations', location)}
                className="mr-2"
              />
              <label htmlFor={`loc-${location}`}>{location}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Sellers */}
      <div className="mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="verified-sellers"
            checked={filters.verifiedSellersOnly || false}
            onChange={(e) => onFilterChange({ verifiedSellersOnly: e.target.checked })}
            className="mr-2"
          />
          <label htmlFor="verified-sellers" className="font-semibold">
            Verified Sellers Only
          </label>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;