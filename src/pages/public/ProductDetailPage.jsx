import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMarketplace } from '../../contexts/MarketplaceContext';
// import { FaHeart, FaShoppingCart, FaShieldAlt, FaShareAlt, FaStar, FaCheckCircle } from 'react-icons/fa';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, addToCart, wishlist, addToWishlist, removeFromWishlist } = useMarketplace();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = getProductById(id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <button 
            onClick={() => navigate('/marketplace')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }
  
  const isInWishlist = wishlist?.includes(product.id);
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    // You can show a toast notification here
    alert(`${product.title} added to cart!`);
  };
  
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };
  
  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">
            Home
          </button>
          <span className="mx-2">›</span>
          <button onClick={() => navigate('/marketplace')} className="hover:text-blue-600">
            Marketplace
          </button>
          <span className="mx-2">›</span>
          <button 
            onClick={() => navigate(`/marketplace/${product.category}`)}
            className="hover:text-blue-600 capitalize"
          >
            {product.category}
          </button>
          <span className="mx-2">›</span>
          <span className="text-gray-900">{product.title.substring(0, 30)}...</span>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img 
                  src={product.images?.[selectedImage] || "https://via.placeholder.com/600x600"} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnails */}
              {product.images?.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${product.title} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              {/* Badge */}
              {product.badge && (
                <div className="inline-block px-3 py-1 bg-linear-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold rounded-full mb-4">
                  {product.badge.toUpperCase()}
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.title}</h1>
              
              {/* Condition & Location */}
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">{product.condition}</span>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {product.location}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-bold text-blue-600">
                    ₦{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-xl">
                      ₦{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">Inclusive of all taxes</p>
              </div>

              {/* Seller Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{product.seller.name}</h3>
                      {/* {product.seller.verified && (
                        <FaCheckCircle className="text-green-500" title="Verified Seller" />
                      )} */}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        {/* <FaStar className="text-yellow-400 mr-1" /> */}
                        {product.seller.rating}
                      </div>
                      <span>•</span>
                      <span>Member since 2024</span>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Profile
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button 
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(q => q + 1)}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-sm text-gray-600">
                    Only {Math.floor(Math.random() * 50) + 1} items left in stock!
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  {/* <FaShoppingCart /> */}
                  Add to Cart
                </button>
                <button
                  onClick={handleWishlistToggle}
                  className={`border ${
                    isInWishlist 
                      ? 'border-red-600 text-red-600' 
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  } py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2`}
                >
                  {/* <FaHeart className={isInWishlist ? 'fill-red-600' : ''} /> */}
                  {isInWishlist ? 'Saved' : 'Save for Later'}
                </button>
              </div>

              {/* Buy Now Button */}
              <button
                onClick={() => {
                  addToCart(product, quantity);
                  navigate('/checkout'); // You'll create this later
                }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-green-700 flex items-center justify-center gap-2 mb-4"
              >
                {/* <FaShieldAlt /> */}
                Buy Now with Escrow Protection
              </button>

              {/* Share Button */}
              <button
                onClick={shareProduct}
                className="text-gray-600 hover:text-gray-800 flex items-center gap-2 text-sm"
              >
                {/* <FaShareAlt /> */}
                Share this product
              </button>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex border-b border-gray-200">
              <button className="px-6 py-4 font-medium text-blue-600 border-b-2 border-blue-600">
                Description
              </button>
              <button className="px-6 py-4 font-medium text-gray-600 hover:text-gray-900">
                Specifications
              </button>
              <button className="px-6 py-4 font-medium text-gray-600 hover:text-gray-900">
                Reviews ({Math.floor(Math.random() * 100)})
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Product Description</h3>
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <h4 className="font-bold mb-3">Key Features</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    {/* <FaCheckCircle className="text-green-500 mr-2" /> */}
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Additional Information</h4>
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 text-gray-600">Brand</td>
                        <td className="py-2 font-medium">{product.brand}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 text-gray-600">Year</td>
                        <td className="py-2 font-medium">{product.year}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 text-gray-600">Mileage</td>
                        <td className="py-2 font-medium">{product.mileage?.toLocaleString()} km</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 text-gray-600">Condition</td>
                        <td className="py-2 font-medium capitalize">{product.condition?.replace('-', ' ')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3">Why Buy with Escrow?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      {/* <FaShieldAlt className="text-blue-600 mt-1 mr-2" /> */}
                      <span>Secure payment held until you receive the item</span>
                    </li>
                    <li className="flex items-start">
                      {/* <FaCheckCircle className="text-green-500 mt-1 mr-2" /> */}
                      <span>Verified sellers with ratings</span>
                    </li>
                    <li className="flex items-start">
                      {/* <FaShieldAlt className="text-blue-600 mt-1 mr-2" /> */}
                      <span>Money-back guarantee if item doesn't match description</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products - You can implement this later */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
          {/* You can add a RelatedProducts component here */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;