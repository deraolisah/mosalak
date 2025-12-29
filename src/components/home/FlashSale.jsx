// src/components/FlashSaleBannerEmbla.jsx - Using Embla Carousel
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { CheckBadgeIcon, ChevronLeftIcon, ChevronRightIcon, ShieldCheckIcon, StarIcon, FireIcon } from '@heroicons/react/24/solid';
import { ClockIcon, TruckIcon, TagIcon } from '@heroicons/react/24/outline';
import Autoplay from 'embla-carousel-autoplay';
import watch from "../../assets/watch.png";

const FlashSale = () => {
  // const [timeLeft, setTimeLeft] = useState({
  //   hours: 23,
  //   minutes: 59,
  //   seconds: 59
  // });

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
  ];

  return (
    <section className="py-12 overflow-x-clip">
      <div className="container">

        {/* Embla Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl z-1" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide) => (
                <div key={slide.id} className="flex-[0_0_100%] min-w-0 gap-4 space-x-4">
                  <div className="bg-primary rounded-3xl overflow-hidden border border-gray-200 space-x-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Left side - Product Info */}
                      <div className="p-8 lg:p-12">
                        <div className="inline-flex items-center px-4 py-2 bg-[#F59E0B] rounded-sm mb-4">
                          <span className="text-white uppercase text-sm"> Flash Sale </span>
                        </div>

                        <h4 className="text-xl font-semibold text-white mb-2 leading-tight">
                          {slide.title}
                        </h4>
                        
                        <h4 className="text-3xl text-nowrap lg:text-4xl font-bold text-white mb-3">
                          {slide.subtitle}
                        </h4>

                        <div className="mb-8">
                          <span className="text-lg text-white font-medium">{slide.discount}</span>
                        </div>

                        <button className="btn btn-secondary">
                          View Product
                        </button>
                      </div>

                      {/* Right side - Product Image */}
                      <div className="overflow-hidden">
                        <div className="h-full flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="text-6xl mb-4">
                              <img src={watch} alt={slide.title} className='min-h-20 lg:min-h-60' />
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

          <div className="absolute bottom-2 w-full flex items-center justify-between md:justify-center space-x-2 z-2">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <ShieldCheckIcon className="w-5 h-5 text-white" />
              <span className="font-medium text-sm text-white"> Escrow Protected </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-2">
              <CheckBadgeIcon className="w-5 h-5 text-white" />
              <span className="font-medium text-sm text-white"> Verified Seller </span>
            </div>
          </div>


          {/* Navigation Buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute top-1/2 -left-7 transform -translate-y-1/2 z-10 text-white bg-primary border-5 border-white hover:bg-primary/90 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
          >
            <ChevronLeftIcon className="w-8 h-8 text-whie" />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute top-1/2 -right-7 transform -translate-y-1/2 z-10 text-white bg-primary border-5 border-white hover:bg-primary/90 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
          >
            <ChevronRightIcon className="w-8 h-8 text-white" />
          </button>
        </div>



        {/* PAGINATION DOTS */}
        <div className="flex justify-center mt-8 space-x-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === selectedIndex && (
                <span className="absolute -inset-2 animate-ping rounded-full bg-red-400 opacity-30"></span>
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

        {/* Additional Info Banner */}
        {/* <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex flex-col md:flexRow items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Why Shop with Mosalak?</h3>
              <p className="text-blue-100">Escrow protection ensures your money is safe until you receive your order</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <CheckBadgeIcon className="w-8 h-8 text-white mr-3" />
                <div>
                  <div className="font-bold">100% Secure</div>
                  <div className="text-sm text-blue-200">Payment Protection</div>
                </div>
              </div>
              <div className="flex items-center">
                <ShieldCheckIcon className="w-8 h-8 text-white mr-3" />
                <div>
                  <div className="font-bold">Verified Sellers</div>
                  <div className="text-sm text-blue-200">Quality Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FlashSale;