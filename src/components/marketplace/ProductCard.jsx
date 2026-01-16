import React from 'react';
import { useNavigate } from 'react-router-dom';
import car from "../../assets/car.png";
import avatarImg from "../../assets/avatar.png";

// import diamondImg from "../../assets/badges/diamond.png";
import platinumImg from "../../assets/badges/platinum.png";
import goldImg from "../../assets/badges/gold.png";
import silverImg from "../../assets/badges/silver.png";
import bronzeImg from "../../assets/badges/bronze.png";
// import basicImg from "../../assets/badges/basic.png";


const ProductCard = ({ product, showBadge = true }) => {
  const navigate = useNavigate();
  
  const getBadgeColor = (badge) => {
    const colors = {
      diamond: 'from-blue-500 to-indigo-600',
      platinum: 'from-gray-400 to-gray-600',
      gold: 'from-yellow-400 to-yellow-600',
      silver: 'from-gray-300 to-gray-400',
      bronze: 'from-orange-400 to-orange-600',
      basic: 'from-green-400 to-green-600'
    };
    return colors[badge.toLowerCase()] || 'from-gray-400 to-gray-600';
  };

  const getBadgeImage = (badge) => {
    const images = {
      // diamond: diamondImg,
      platinum: platinumImg,
      gold: goldImg,
      silver: silverImg,
      bronze: bronzeImg,
      // basic: basicImg,
    };
    return images[badge.toLowerCase()] || null; 
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group cursor-pointer">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100" onClick={handleProductClick}>
        <div className="aspect-square w-full">
          <img 
            // src={product.images?.[0] || car} 
            src={car} 
            alt={product.title}
            loading='lazy'
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Badge */}
        {/* {showBadge && product.badge && (
          <div
            className={`absolute top-3 left-3 bg-linear-to-r ${getBadgeColor(
              product.badge
            )} text-white px-3 py-1 rounded-full text-xs font-bold uppercase`}
          >
            {product.badge}
          </div>
        )} */}

        {/* Badge Image */}
        {showBadge && product.badge && (
          <div className="absolute top-0 right-0">
            <img
              src={getBadgeImage(product.badge)}
              alt={`${product.badge} badge`}
              className="w-fit h-10 md:h-8 shadow"
            />
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 left-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition" onClick={""}>
          {/* <FaHeart className="text-gray-600 hover:text-red-500" /> */}
        </button>


        <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
          {product.condition}
        </div>
      </div>


      <div className="p-4">
        <h3 
          onClick={handleProductClick}
          className="text-sm line-clamp-1 mb-2 hover:text-blue-600 cursor-pointer"
        >
          {product.title}
        </h3>        

        <div className="flex items-center gap-1.5 mb-3">
          <span className="text-base font-bold text-primary">
            ₦{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through text-xs mt-1">
              ₦{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        <p className="text-gray-600 text-sm line-clamp-1 mb-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between text-sm mb-4">
          <div className='flex items-center'>
            <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className='text-primary'>
              {product.location}
            </span>
          </div>

          <img src={avatarImg} alt='' className='w-6.5' />
        </div>

        <button className="w-full btn rounded-sm">
          Buy with Escrow
        </button>
      </div>
    </div>
  );
};

export default ProductCard;