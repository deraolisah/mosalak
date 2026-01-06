import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Eye, Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

import starImg from "../../assets/star.svg";
import securityImg from "../../assets/security.svg";
import "../home/custom.css";

const products = [
  {
    title: "Gaming Laptop",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    price: "₦850,000",
    seller: "TechHub NG",
    tag: "Hot",
  },
  {
    title: "Designer Handbag",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    price: "₦850,000",
    seller: "TechHub NG",
    tag: "New",
  },
  {
    title: "Coffee Machine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    price: "₦850,000",
    seller: "HomeGoods",
    tag: "Sale",
  },
  {
    title: "Electric Scooter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    price: "₦850,000",
    seller: "TechHub NG",
    tag: "Trending",
  },
  {
    title: "Electric Scooter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    price: "₦850,000",
    seller: "TechHub NG",
    tag: "Trending",
  },
];

const tagColors = {
  Hot: "bg-red-500",
  New: "bg-blue-500",
  Sale: "bg-orange-500",
  Trending: "bg-green-500",
};

const TrendingSales = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          {/* <h2 className="section-title">Trending Near You</h2> */}
          <div className="flex items-center gap-4">
            <span className="w-1 h-8 bg-primary rounded-full"></span>
            <h2 className="section-title mb-0"> Trending Sales </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="h-9 w-9 rounded-full border flex items-center justify-center text-white bg-primary hover:bg-primary/80 cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="h-9 w-9 rounded-full border flex items-center justify-center text-white bg-primary hover:bg-primary/80 cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Embla */}
        <div className="embla overflow-x-clip" ref={emblaRef}>
          <div className="embla__container flex gap-4 ">
            {products.map((product, index) => (
              <div className="shrink-0
                  basis-full
                  md:basis-1/2
                  lg:basis-1/4 last-of-type:mr-4" key={index}>
                <div className="bg-white rounded-xl shadow overflow-hidden transition duration-300 relative group">
                  {/* Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`px-3 py-1 text-xs font-bold text-white rounded-full ${tagColors[product.tag]}`}
                    >
                      {product.tag}
                    </span>
                  </div>


                  <div className="relative">
                    {/* Actions */}
                    <div className="absolute top-2/3 left-1/2 transform -translate-1/2 bg-transparent p-4 flex items-center gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-100">
                      <span className="bg-primary text-white rounded-full p-2 cursor-pointer"> <Heart className="w-4.5 h-4.5" /> </span>
                      <span className="bg-white text-primary rounded-full p-2 cursor-pointer"> <ShoppingCart className="w-4.5 h-4.5" /> </span>
                      <span className="bg-white text-primary rounded-full p-2 cursor-pointer"> <Eye className="w-4.5 h-4.5" /> </span>
                    </div>

                    {/* Image */}
                    <div className="h-48 bg-linear-to-r from-blue-500 to-indigo-600" />
                  </div>

                  {/* Details */}
                  <div className="p-4 sm:p-4.5 space-y-2">
                    <h3 className="text-lg font-bold cursor-pointer">{product.title}</h3>

                    <p className="text-gray-600 text-sm">
                      {product.description}
                    </p>

                    <span className="text-xl font-bold">{product.price}</span>

                    <div className="w-full flex items-center justify-between text-xs text-gray-700 mt-4">
                      <span className="w-full flex items-center gap-1 cursor-pointer">
                        <img src={starImg} alt="" className="w-5" />
                        {product.seller}
                      </span>

                      <span className="w-full flex items-center gap-1 text-wrap">
                        <img src={securityImg} alt="" className="w-5" />
                        Escrow Protected
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

         {/* Dots */}
        <div className="embla__dots">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`embla__dot ${
                i === selectedIndex ? "is-active" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSales;