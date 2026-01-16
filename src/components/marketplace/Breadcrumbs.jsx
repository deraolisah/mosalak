// In Breadcrumbs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useMarketplace } from '../../contexts/MarketplaceContext';

const Breadcrumbs = ({ category, categoryId }) => {
  const { getCategoryById } = useMarketplace();
  
  // If category is not provided but categoryId is, get the category
  const currentCategory = category || (categoryId ? getCategoryById(categoryId) : null);

  return (
    <div className="container py-4">
      <nav className="flex text-sm">
        <Link to="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <span className="mx-2 text-gray-400"> &rsaquo; </span>
        <Link to="/marketplace" className="text-gray-600 hover:text-gray-900">
          Marketplace
        </Link>
        {currentCategory && (
          <>
            <span className="mx-2 text-gray-400">  &rsaquo; </span>
            <span className="text-gray-900 font-medium">
              {currentCategory.name}
            </span>
          </>
        )}
      </nav>
    </div>
  );
};

export default Breadcrumbs;