import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMarketplace } from '../../contexts/MarketplaceContext';
import car from "../../assets/car.png";
import { Heart, Share2, ShieldBan, ShoppingCart, Truck, Box, RotateCcw, ShieldCheck, Check, X, Shield } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, addToCart, wishlist, addToWishlist, removeFromWishlist } = useMarketplace();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isEscrowModalOpen, setIsEscrowModalOpen] = useState(false); // New state for escrow modal
  
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

  // Calculate escrow fee (3%)
  const escrowFee = Math.round(product.price * 0.03);
  const totalAmount = product.price + escrowFee;

  const handleEscrowPurchase = () => {
    setIsEscrowModalOpen(true);
  };

  const proceedToCheckout = () => {
    addToCart(product, quantity);
    navigate('/checkout');
    setIsEscrowModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">
            Home
          </button>
          <span className="mx-2">  &rsaquo; </span>
          <button onClick={() => navigate('/marketplace')} className="hover:text-blue-600">
            Marketplace
          </button>
          <span className="mx-2">  &rsaquo; </span>
          <button 
            onClick={() => navigate(`/marketplace/${product.category}`)}
            className="hover:text-blue-600 capitalize"
          >
            {product.category}
          </button>
          <span className="mx-2">  &rsaquo; </span>
          <span className="text-gray-900">{product.title.substring(0, 30)}...</span>
        </div>

        <div className="shadow-lg overflow-hidden">
          <div className="flex items-start flex-wrap lg:flex-nowrap gap-8 p-0">
            {/* Product Images */}
            <div>
              <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              >
                <img
                  src={car || product.images?.[selectedImage] || "https://via.placeholder.com/600x600"}
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

              {/* Lightbox Modal */}
              {isLightboxOpen && (
                <div
                  className="fixed inset-0 bg-black/80 backdrop-blur-xs bg-opacity-80 flex items-center justify-center z-100 p-2"
                  onClick={() => setIsLightboxOpen(false)}
                >
                  <img
                    src={car || product.images?.[selectedImage]}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain"
                  />
                  <button
                    className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
                    onClick={() => { setIsLightboxOpen(false); scrollTo(0,0); }}
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-medium text-gray-900 mb-3">{product.title}</h1>
              <p className='text-sm mb-4'> {product?.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempore porro incidunt, eius similique rerum ducimus eos error veritatis ipsum." } </p>
              
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
                  <span className="text-xl font-bold text-dark">
                    ₦{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-xl">
                      ₦{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              <hr className='w-full border-px border-dark/10 flex items-center my-6' />

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className='flex items-center gap-4'>
                  {/* Buy with Escrow Button */}
                  <button
                    onClick={handleEscrowPurchase}
                    className="btn"
                  >
                    <Shield size={18} />
                    Buy with Escrow
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="btn btn-tertiary">
                    <ShoppingCart size={18} strokeWidth={1.5} />
                    Add to Cart
                  </button>
                </div>

                <div className='flex items-center gap-2'>
                  <button onClick={handleWishlistToggle}>
                    <Heart fill={isInWishlist ? "currentColor" : "none"} />
                  </button>
                  <button onClick={shareProduct}>
                    <Share2 />
                  </button>
                </div>
              </div>

              <div className='bg-primary/50 text-dark p-4 rounded-t-md'>
                Escrow Protection Active
                <p> Your payment is held securely until you confirm receipt. Buy with confidence. </p>
              </div>
            </div>

            <div className='w-full max-w-80 border border-primary/30 rounded-sm overflow-hidden'>
              <div className='p-4 bg-primary/30 text-base flex items-center gap-2'>
                <Truck size={18} className="text-primary" />
                <p className='font-medium'> Delivery via Sarri Ride </p>
              </div>

              <div className='p-4 flex flex-col items-start gap-2'>
                <div className='w-full rounded p-2 border border-dark/10 flex gap-1'>
                  <Box size={18} className='mt-2' />
                  <span className='flex flex-col'>
                    <p className='font-semibold'> Delivery </p>
                    <small className='leading-tight flex text-dark/80'> Same-day / Next-day delivery within Lagos </small>
                    <p className='font-semibold'> N1,500 </p>
                  </span>
                </div>

                <div className='w-full rounded p-2 border border-dark/10 flex gap-1'>
                  <RotateCcw size={18} className="mt-2" />
                  <span className='flex flex-col'>
                    <p className='font-semibold'> Returns </p>
                    <small className='leading-tight flex text-dark/80'> 7-day return policy </small>
                  </span>
                </div>
                <div className='w-full rounded p-2 border border-dark/10 gap-1'>
                  <ShieldCheck size={18} className="mt-2" />
                  <span className='flex flex-col'>
                    <p className='font-semibold'> Inspection Safety: </p>
                    <small className='leading-tight text-dark/80'> 
                      Keep your transaction safe, all payments should stay in Mosalak Hub for fraud protection and support.
                    </small>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-6">
            <div className="flex border-b border-gray-200">
              <button className="px-6 py-4 font-medium text-blue-600 border-b-2 border-blue-600">
                Details
              </button>
              <button className="px-6 py-4 font-medium text-gray-600 hover:text-gray-900">
                Specifications
              </button>
              <button className="px-6 py-4 font-medium text-gray-600 hover:text-gray-900">
                Reviews ({Math.floor(Math.random() * 100)})
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <h3 className="text-xl font-bold mb-4"> Product Details </h3>
              <p className="text-gray-700 mb-6"> {product.description} </p>
              
              <h4 className="font-bold mb-3">Key Features</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-6">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 ">
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
              </div>

              {/* Seller Info */}
              <div className="bg-primary/10 border border-primary/20 rounded-sm p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className='text-2xl'> Seller Information </h3>
                    <div className="flex items-center gap-2 my-4">
                      <span className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center'>{product.seller.name[0]}</span>
                      <div className='flex flex-col gap-0'>
                        <h5 className="text-sm font-semibold">{product.seller.name}</h5>
                        {product.seller.verified && (
                          <span className='flex items-center gap-1 text-xs'>
                            <ShieldCheck size={12} />
                            Verified Seller
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-2 text-sm text-gray-600 mb-3">
                      Location:
                      Response Rate:
                      <div className="flex items-center">
                        Rating: {product.seller.rating}
                      </div>
                      <span>Member since 2024</span>
                    </div>
                    <button className='btn btn-tertiary'>
                      Chat with seller
                    </button>
                  </div>
                </div>
              </div>

              {/* How Escrow Works */}
              <div className='p-4 bg-primary/50 rounded-sm'>
                <h4 className="font-bold mb-3"> How Escrow Works </h4>
                <ul className="space-y-1 text-sm md:text-base">
                  <li className="flex items-start gap-1">
                    1. <span> Payment is held securely in escrow by Paystack. </span>
                  </li>
                  <li className="flex items-start gap-1">
                    2. <span> Sellers ships your order </span>
                  </li>
                  <li className="flex items-start gap-1">
                    3. <span> You receive and inspect the item </span>
                  </li>
                  <li className="flex items-start gap-1">
                    4. <span> Payment released to seller after confirmation </span>
                  </li>
                </ul>
              </div>

              {/* Return Policy */}
              <div className='bg-primary/10 p-4 rounded-sm'>
                <h3> Return Policy </h3>
                <p> 7-day return for items that are defective or not as described. </p>
                <button className='btn btn-text'>
                  Read Full Policy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Best Selling Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6"> Best Selling </h2>
        </div>

        {/* Recently Viewed Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6"> Recently Viewed </h2>
        </div>
      </div>

      {/* Escrow Modal */}
      {isEscrowModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-90 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <Shield className="text-blue-600" size={24} />
                <h2 className="text-xl font-bold">Buy with Escrow Protection</h2>
              </div>
              <button
                onClick={() => setIsEscrowModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              {/* Product Info */}
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                <div className="flex items-center gap-4 text-gray-600 mb-3">
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">{product.condition}</span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {product.location}
                  </span>
                </div>
              </div>

              {/* Payment Breakdown */}
              <div className="mb-6">
                <h4 className="font-bold mb-3">Payment Breakdown</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Product Amount</span>
                    <span className="font-bold">₦{product.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Escrow Fee (3%)</span>
                    <span className="font-bold">₦{escrowFee.toLocaleString()}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount</span>
                    <span>₦{totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* How Escrow Works */}
              <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <ShieldCheck className="text-blue-600" size={20} />
                  How Escrow Works
                </h4>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">1.</span>
                    <span>Payment is held securely in escrow by Paystack.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">2.</span>
                    <span>Sellers ships your order.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">3.</span>
                    <span>You receive and inspect the item.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">4.</span>
                    <span>Payment released to seller after confirmation.</span>
                  </li>
                </ol>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-bold mb-3">Benefits of Using Escrow</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 mt-0.5" size={16} />
                    <span>Your payment is protected until you receive the item.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 mt-0.5" size={16} />
                    <span>Fraud prevention and secure transaction.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 mt-0.5" size={16} />
                    <span>7-day return policy for defective items.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t bg-gray-50">
              <div className="flex gap-3">
                <button
                  onClick={() => setIsEscrowModalOpen(false)}
                  className="flex-1 btn btn-tertiary"
                >
                  Cancel
                </button>
                <button
                  onClick={proceedToCheckout}
                  className="flex-1 btn"
                >
                  Proceed to Checkout
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-3">
                By proceeding, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;