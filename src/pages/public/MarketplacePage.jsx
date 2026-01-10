import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMarketplace } from '../../contexts/MarketplaceContext';
import SidebarFilters from '../../components/marketplace/SidebarFilters';
import ProductGrid from '../../components/marketplace/ProductGrid';
import SortDropdown from '../../components/marketplace/SortDropdown';

import Breadcrumbs from "../../components/marketplace/Breadcrumbs";
import SearchBar from '../../components/marketplace/SearchBar';
import CategoriesBar from '../../components/marketplace/CategoriesBar';

const MarketplacePage = () => {
  const { category } = useParams();
  const { 
    filteredProducts, 
    filters, 
    sortBy, 
    pagination,
    updateFilters, 
    setSortBy, 
    changePage,
    getCategoryById,
    getFeaturedProducts,
    getBestSellingProducts 
  } = useMarketplace();
  
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const currentCategory = getCategoryById(category);

  // Update category when URL changes
  useEffect(() => {
    if (category) {
      updateFilters({ category });
    }
  }, [category, updateFilters]);

  // Reset category when component unmounts (optional)
  useEffect(() => {
    return () => {
      // Don't reset here - keep filters when navigating
    };
  }, []);

  return (
    <section className="min-h-screen bg-gray-50">
      <div className='bg-[#eaeaea]'>
        <SearchBar />
      </div>
      <div className="sticky top-16 md:top-20 z-40">
        <CategoriesBar />
      </div>

      <Breadcrumbs category={category} />

      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>
      </div>

      {/* Page Header */}
      {/* <div className="bg-white border-b">
        <div className="container py-4">
          <h1 className="text-2xl font-bold">
            {currentCategory?.name || 'All Products'}
            <span className="text-gray-500 font-normal text-lg ml-2">
              ({pagination.total} products found)
            </span>
          </h1>
          {currentCategory && (
            <p className="text-gray-600 mt-1">
              Browse our selection of {currentCategory.name.toLowerCase()}
            </p>
          )}
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container">
        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <div className="hidden lg:block w-1/5">
            <SidebarFilters 
              filters={filters} 
              onFilterChange={updateFilters}
            />
          </div>

                    

          {/* Mobile Filter Button */}
          {/* <div className="lg:hidden fixed bottom-6 right-6 z-40">
            <button
              onClick={() => setShowMobileFilters(true)}
              className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
            >
              Filters
            </button>
          </div> */}

          {/* Main Content */}
          <div className="flex-1 bg-white p-4 rounded-2xl shadow-md">
            {/* Toolbar */}
            <div className="mb-6 flex justify-between items-center">
              <h4 className="text-base font-medium">
                {currentCategory?.name || 'All Products'}
                <span className="text-gray-500 font-normal ml-1.5">
                  ({pagination.total} products found)
                </span>
              </h4>

              <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
              {/* <div className="text-sm text-gray-600">
                Showing {filteredProducts.length} of {pagination.total} products
              </div> */}
            </div>

            {/* Products */}
            <ProductGrid products={filteredProducts} />

            {/* Pagination */}
            {pagination.total > pagination.limit && (
              <div className="mt-8 flex justify-center">
                <div className="flex gap-2">
                  {[...Array(Math.ceil(pagination.total / pagination.limit))].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => changePage(i + 1)}
                      className={`px-4 py-2 rounded ${
                        pagination.page === i + 1
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Featured Sections */}
            {!category && (
              <>
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Best Selling</h2>
                  <ProductGrid products={getBestSellingProducts(4)} />
                </div>
                
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
                  <ProductGrid products={getFeaturedProducts(4)} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Overlay */}
      {showMobileFilters && (
        <div className="fixed top-16 inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileFilters(false)}
          />
          <div className="absolute inset-y-0 left-0 w-4/5 max-w-sm bg-white overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Filters</h2>
                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <SidebarFilters 
                filters={filters} 
                onFilterChange={updateFilters}
                currentCategory={currentCategory}
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Filters Modal */}
      {/* {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileFilters(false)}
          />
          <div className="absolute inset-y-0 right-0 w-4/5 bg-white overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Filters</h2>
                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="text-gray-500"
                >
                  ✕
                </button>
              </div>
              <SidebarFilters 
                filters={filters} 
                onFilterChange={updateFilters}
              />
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default MarketplacePage;