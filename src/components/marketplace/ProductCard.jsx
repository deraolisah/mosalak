import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import car from "../../assets/car.png";
import avatarImg from "../../assets/avatar.png";

import platinumImg from "../../assets/badges/platinum.png";
import goldImg from "../../assets/badges/gold.png";
import silverImg from "../../assets/badges/silver.png";
import bronzeImg from "../../assets/badges/bronze.png";
import { CircleQuestionMarkIcon, Eye, Heart, ShoppingCart } from 'lucide-react';


const ProductCard = ({ product, showBadge = true }) => {
  const [ showActions, setShowActions ] = useState(false);

  const navigate = useNavigate();
  
  const getBadgeColor = (badge) => {
    const colors = {
      platinum: 'bg-purple-200',
      gold: 'bg-yellow-200',
      silver: 'bg-[#EAEAEA] text-[#393A40]',
      bronze: 'bg-red-200',
    };
    return colors[badge.toLowerCase()] || 'bg-gray-200';
  };

  const getBadgeImage = (badge) => {
    const images = {
      platinum: platinumImg,
      gold: goldImg,
      silver: silverImg,
      bronze: bronzeImg,
    };
    return images[badge.toLowerCase()] || null; 
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
    scrollTo(0,0);
  };

  const handleActionClick = () => {
    setShowActions(!showActions);
  }

  return (
    <div className="bg-white rounded-xl rounded-tr-3xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden! group">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <div className="aspect-4/3 w-full">
          <img 
            src={product.images[0] || car} 
            alt={product.title}
            loading='lazy'
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Badge Image */}
        {showBadge && product.badge && (
          <div className="absolute top-0 -right-0.5">
            <span className={`flex flex-col items-center p-2 px-4 rounded-tr-2xl rounded-bl-2xl ${getBadgeColor(product.badge)}`}>
              <img
                src={getBadgeImage(product.badge)}
                alt={`${product.badge} badge`}
                className="w-fit h-4 object-cover"
                />
                <small className='font-medium uppercase text-[10px]'> {product.badge} </small>
            </span>
          </div>
        )}

        {/* Actions Button for Mobile */}
        <button className="absolute top-3 left-3 p-2 bg-white/80 backdrop-blur-sm rounded-full transition cursor-pointer hover:bg-white flex md:hidden" onClick={() => { handleActionClick() }}>
          <CircleQuestionMarkIcon size={14} />
        </button>

        <div className={`absolute top-1/2 left-1/2 -translate-1/2 flex gap-2 z-20 transition-all duration-500 ${showActions ? "opacity-100" : "opacity-0"}`}>
          <button className='bg-white rounded-full p-2' >
            <Heart size={18}/>
          </button>
          <button className='bg-white rounded-full p-2'>
            <ShoppingCart size={18} />
          </button>
          <button className='bg-red-500 rounded-full p-2' onClick={() => { handleProductClick() }}>
            <Eye size={18} />
          </button>
        </div>

        {/* Show Actions on hover - Desktop */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-1/2 gap-2 z-10 transition-all duration-500 opacity-0 group-hover:opacity-100">
          <button className='bg-white rounded-full p-2 cursor-pointer!' >
            <Heart size={18}/>
          </button>
          <button className='bg-white rounded-full p-2 cursor-pointer!'>
            <ShoppingCart size={18} />
          </button>
          <button className='bg-white rounded-full p-2 cursor-pointer!' onClick={() => { handleProductClick() }}>
            <Eye size={18} />
          </button>
        </div>


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

        <div className="flex items-center gap-1.5 mb-3" onClick={handleProductClick}>
          <span className="text-base font-bold text-primary">
            ₦{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through text-xs mt-1">
              ₦{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        <p className="text-gray-600 text-sm line-clamp-1 mb-3" onClick={handleProductClick}>
          {product.description}
        </p>

        <div className="flex items-center justify-between text-sm mb-4" onClick={handleProductClick}>
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

        <button className="w-full btn rounded-sm" onClick={() => { handleProductClick() }}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;