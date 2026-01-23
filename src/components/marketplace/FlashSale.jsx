// src/components/FlashSaleBannerEmbla.jsx - Using Embla Carousel
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
// import { CheckBadgeIcon, ChevronLeftIcon, ChevronRightIcon, ShieldCheckIcon, StarIcon, FireIcon } from '@heroicons/react/24/solid';
// import { ClockIcon, TruckIcon, TagIcon } from '@heroicons/react/24/outline';
import { BadgeCheck, ChevronLeftIcon, ChevronRightIcon, ShieldCheck } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import watch from "../../assets/watch.png";
import "../home/custom.css";
// import { Link } from 'lucide-react';
import { Link } from 'react-router-dom';

const FlashSale = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    // duration: 500
  }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);


  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onInit);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  const slides = [
    {
      id: 1,
      title: "Best Deal Online on smart watches",
      subtitle: "Apple Watch Series 9",
      discount: "UP to 25% OFF",
      imageColor: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Limited Time Offer",
      subtitle: "iPhone 15 Pro Max",
      discount: "UP to 20% OFF",
      imageColor: "from-purple-600 to-pink-600",
    },
    {
      id: 3,
      title: "Summer Sale Special",
      subtitle: "Samsung Galaxy Watch 6",
      discount: "UP to 30% OFF",
      imageColor: "from-green-500 to-emerald-600",
    },
    {
      id: 4,
      title: "Summer Sale Special",
      subtitle: "Samsung Galaxy Watch 6",
      discount: "UP to 30% OFF",
      imageColor: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section className="py-8 md:py-12 overflow-x-clip">
      <div className="container">

        {/* Embla Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl z-1" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide) => (
                <div key={slide.id} className="flex-[0_0_100%] min-w-0 gap-4 space-x-4">
                  <div className="bg-primary rounded-3xl overflow-hidden border border-gray-200 space-x-4 mx-1 md:mx-1.5">
                    <div className="grid grid-cols-2 mb-6">
                      {/* Left side - Product Info */}
                      <div className="p-6 md:p-8 lg:p-12">
                        <div className="inline-flex items-center px-4 py-2 bg-[#F59E0B] rounded-sm mb-2 md:mb-4">
                          <span className="text-white uppercase text-[8px] sm:text-sm"> Flash Sale </span>
                        </div>

                        <h4 className="text-xs sm:text-xl text-nowrap font-semibold text-white mb-1 md:mb-2 leading-tight">
                          {slide.title}
                        </h4>
                        
                        <h4 className="text-base sm:text-3xl text-nowrap lg:text-4xl font-bold text-white md:mb-4">
                          {slide.subtitle}
                        </h4>

                        <div className="mb-2.5 md:mb-4">
                          <span className="text-sm sm:text-lg text-white font-medium">{slide.discount}</span>
                        </div>

                        <Link to="/shop">
                          <button className="btn btn-secondary text-xs md:text-base">
                            View Product
                          </button>
                        </Link>
                      </div>

                      {/* Right side - Product Image */}
                      <div className="overflow-hidden">
                        <div className="h-full flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="text-6xl mb-4">
                              <img src={watch} alt={slide.title} className='ml-auto h-26 sm:h-44 md:h-60' />
                            </div>
                            {/* <div className="text-2xl font-bold">{slide.subtitle}</div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-2 w-full flex items-center justify-between md:justify-center space-x-2 z-2 px-4">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <ShieldCheck className="w-5 h-5 text-white" />
              <span className="md:font-medium text-xs md:text-sm text-white text-nowrap"> Escrow Protected </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-2">
              <BadgeCheck className="w-5 h-5 text-white" />
              <span className="md:font-medium text-xs md:text-sm text-white text-nowrap"> Verified Seller </span>
            </div>
          </div>


          {/* Navigation Buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute top-1/2 -left-5 md:-left-7 transform -translate-y-1/2 z-10 text-white bg-primary border-3 md:border-5 border-white hover:bg-primary/90 w-10 h-10 md:w-14 md:h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
          >
            <ChevronLeftIcon className="w-5 md:w-8 h-5 md:h-8 text-whie" />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute top-1/2 -right-5 md:-right-7 transform -translate-y-1/2 z-10 text-white bg-primary border-3 md:border-5 border-white hover:bg-primary/90 w-10 h-10 md:w-14 md:h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
          >
            <ChevronRightIcon className="w-5 md:w-8 h-5 md:h-8 text-white" />
          </button>
        </div>



        {/* PAGINATION DOTS */}
        <div className="flex justify-center mt-8 space-x-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={`relative w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === selectedIndex 
                  ? 'bg-primary scale-125 w-6 h-2' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === selectedIndex && (
                <span className="absolute -inset-2 animate-ping rounded-full bg-primary/20 opacity-30"></span>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Pagination with Numbers */}
        {/* <div className="mt-4 flex flex-col items-center">
          <div className="w-full max-w-md h-1 bg-gray-200 rounded-full mb-2 overflow-hidden">
            <div 
              className="h-full bg-linear-to-r from-red-500 to-orange-500 transition-all duration-500"
              style={{ width: `${((selectedIndex + 1) / slides.length) * 100}%` }}
            ></div>
          </div>
          
          <div className="text-sm text-gray-600 font-medium">
            <span className="text-red-600 font-bold">{selectedIndex + 1}</span>
            <span className="mx-2">of</span>
            <span>{slides.length}</span>
            <span className="ml-4 text-gray-500">Flash Sale Products</span>
          </div>
        </div> */}


        {/* <div className="flex justify-center mt-8 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'bg-linear-to-r from-red-500 to-orange-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default FlashSale;