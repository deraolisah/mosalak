import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products = [], emptyMessage = "No products found" }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12 bg-muted/10 rounded-lg">
        <div className="text-5xl mb-4">😔</div>
        <h3 className="text-xl font-medium mb-2">{emptyMessage}</h3>
        <p className="text-gray-600">Try adjusting your filters or check back later.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;