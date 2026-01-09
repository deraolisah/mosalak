import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const SortDropdown = ({ sortBy, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Customer Rating' }
  ];

  const currentOption = sortOptions.find(opt => opt.value === sortBy) || sortOptions[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-gray-50 transition"
      >
        <span className="text-gray-700">Sort by: <span className="font-medium">{currentOption.label}</span></span>
        <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            {sortOptions.map(option => (
              <button
                key={option.value}
                onClick={() => {
                  onSortChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition ${
                  sortBy === option.value 
                    ? 'bg-primary/5 text-primary font-medium' 
                    : 'text-gray-700'
                } first:rounded-t-lg last:rounded-b-lg`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SortDropdown;