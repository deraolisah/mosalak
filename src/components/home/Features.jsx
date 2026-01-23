import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import featuresBg from "../../assets/features-bg.png";
import img01 from "../../assets/01.svg";
import img02 from "../../assets/02.svg";
import img03 from "../../assets/03.svg";
import img04 from "../../assets/04.svg";
import img05 from "../../assets/05.svg";
import img06 from "../../assets/06.svg";

const Features = () => {

  const features = [
    {
      number: '01',
      icon: img01,
      title: 'Buy & sell securely',
      description: "Buy and sell products safely with escrow protection until delivery is confirmed.",
      color: 'blue'
    },
    {
      number: '02',
      icon: img02,
      title: 'Hire or offer skills',
      description: "Hire skilled professionals or offer your services and get paid securely.",
      color: 'green'
    },
    {
      number: '03',
      icon: img03,
      title: 'Connect and engage',
      description: 'Engage, connect, and stay active with other users on the platform.',
      color: 'purple'
    },
    {
      number: '04',
      icon: img04,
      title: 'Earn Points',
      description: 'Earn points from activity, referrals, and transactions. Redeem rewards.',
      color: 'purple'
    },
    {
      number : '05',
      icon: img05,
      title: 'Stay active and connected.',
      description: "List your services, set your price, and get booked directly.",
      color: 'blue'
    },
    {
      number: '06',
      icon: img06,
      title: 'Request the help you need.',
      description: "Post a task or job and receive offers from verified providers.",
      color: 'green'
    }
  ];

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
    <section className="py-12.5 bg-cover bg-bottom" style={{
      backgroundImage: `url(${featuresBg})`,
    }}>
      <div className="container relative">
        <h3 className="section-title text-center"> One Platform. Many Ways to <br/> Trade, Work, and Grow. </h3>



        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group relative border border-muted/20 rounded-2xl mt-4 bg-[#F9F9F9]">
            <div className="absolute z-2 -top-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-muted bg-white w-8.5 h-8.5 rounded-full border border-muted/20 group-hover:text-gray-800 transition flex items-center justify-center">
            {feature.number}
            </div>
            <div className="text-center py-8 p-4">
            <div className='inline-flex p-0 rounded-xl'>
            <img src={feature.icon} className={`w-20 h-20 text-${feature.color}-600`} />
            </div>
            <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
            <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
            </div>
            ))}
            </div> */}

          <div className="flex gap-2 justify-end bg-red-500">
            <button
              onClick={scrollPrev}
              className="absolute z-20 top-1/2 left-1 md:left-4 h-9 w-9 bg-white text-primary rounded-full shadow border border-primary/20 flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute z-20 top-1/2 right-1 md:right-4 h-9 w-9 bg-white text-primary rounded-full shadow border border-primary/20 flex items-center justify-center cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        <div className="embla overflow-x-clip mt-2" ref={emblaRef}>
          
          <div className="embla__container flex gap-4">
            {features.map((feature, index) => (
            <div key={index} className="group relative border border-muted/20 rounded-2xl mt-4 hover:bg-primary hover:text-white bg-[#F9F9F9] 
              embla__slide shrink-0 
              basis-full 
              sm:basis-1/2 
              md:basis-1/3 
              lg:basis-1/4
              last-of-type:mr-3"
            >
              <div className="absolute z-2 -top-4 left-1/2 -translate-x-1/2 text-sm font-semibold  bg-white w-8.5 h-8.5 rounded-full border border-muted/20 group-hover:text-gray-800 transition flex items-center justify-center">
                {feature.number}
              </div>
              <div className="text-center py-8 p-4">
                <div className='inline-flex p-0 rounded-xl'>
                  <img src={feature.icon} className={`w-20 h-20 text-${feature.color}-600`} />
                </div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className=" text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
            {/* {features.map((feature) => (
              <div 
                key={feature.id}
                onClick={() => handleCategoryClick(feature.id)}
                className="shrink-0 basis-1/2 md:basis-1/3 lg:basis-1/6 last-of-type:mr-3 md:last-of-type:mr-4" 
              >
                <div className="bg-white border border-muted/20 rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition-all duration-300 pt-3 transform hover:scale-105 shadow-sm">
                  <div className="w-full flex flex-col gap-3">
                    <span className="text-base font-semibold">
                      {feature.name}
                    </span>
                    <div className={`bg-linear-to-r ${feature.color} flex w-full h-36 rounded-md`}></div>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>

        {/* Dots */}
        <div className="embla__dots">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`embla__dot ${
                i === selectedIndex ? "is-active" : ""
              }`}
            />
          ))}
        </div>

        {/* <button className="btn flex mt-6 mx-auto"> Join now </button> */}
      </div>
    </section>
  )
}

export default Features;