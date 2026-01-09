import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useMarketplace } from '../../contexts/MarketplaceContext';

// const categories = [
//   { tag: "gadgets", name: "Phones & Tablets", color: "from-[#82F69B] to-[#396E45]" },
//   { tag: "fashion", name: "Fashion", color: "from-[#24589B] to-[#0C1E35]" },
//   { tag: "homes&living", name: "Homes & Living", color: "from-[#CC8CA6] to-[#6F4556]" },
//   { tag: "electronics", name: "Electronics", color: "from-[#004B14] to-[#00B12F]" },
//   { tag: "cars", name: "Services", color: "from-[#FE7309] to-[#C55500]" },
//   { tag: "agriculture", name: "Agriculture", color: "from-[#ADBF81] to-[#51593C]" },
// ];

const Categories = () => {
  const navigate = useNavigate();
  const { categories, updateFilters } = useMarketplace();

  const handleCategoryClick = (categoryId) => {
    // Navigate to marketplace with category
    navigate(`/marketplace/${categoryId}`);
    window.scrollTo(0,0);
    // Update filters to show only this category
    updateFilters({ 
      category: categoryId,
      subcategory: null,
      brand: [],
      condition: [],
      badges: [],
      priceRange: [0, 100000000],
      locations: [],
      years: []
    });
  };

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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="w-1 h-8 bg-primary rounded-full"></span>
            <h2 className="section-title mb-0">Shop by Category</h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="h-9 w-9 bg-primary text-white rounded-full border flex items-center justify-center hover:bg-primary/80 cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="h-9 w-9 bg-primary text-white rounded-full border flex items-center justify-center hover:bg-primary/80 cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Embla */}
        <div className="embla overflow-x-clip mt-8" ref={emblaRef}>
          <div className="embla__container flex gap-4">
            {categories.map((category) => (
              <div 
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="shrink-0 basis-1/2 md:basis-1/3 lg:basis-1/6 last-of-type:mr-3 md:last-of-type:mr-4" 
                >
                <div className=" bg-white border border-muted/20 rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition-all duration-300 pt-3 transform hover:scale-105 shadow-sm">
                  <div className="w-full flex flex-col gap-3">
                    <span className="text-base font-semibold">
                      {category.name}
                    </span>
                    <div className={`bg-linear-to-r ${category.color} flex w-full h-36 rounded-md`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

         {/* Dots */}
        <div className="embla__dots">
          {categories.map((_, i) => (
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

export default Categories;