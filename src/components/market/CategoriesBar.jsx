// import React, { useState, useRef, useEffect } from "react";
// import { ChevronDown, X } from "lucide-react";

// const categories = {
//   Cars: {
//     sub: [
//       "Toyota",
//       "Honda",
//       "Mercedes-Benz",
//       "BMW",
//       "Lexus",
//       "Nissan",
//       "Ford",
//       "Hyundai",
//       "Volkswagen",
//       "Audi",
//       "Peugeot",
//       "Other",
//     ],
//     featured: {
//       title: "Foreign Used 2015 Porsche Macan Turbo",
//       price: "₦22,000,000",
//       image: "https://via.placeholder.com/300x200",
//     },
//   },
//   Buses: { sub: ["Mini Bus", "Coaster"], featured: null },
//   Trucks: { sub: ["Pickup", "Tipper"], featured: null },
//   Motorcycles: { sub: ["Power Bike", "Scooter"], featured: null },
//   "Vehicle Parts & Accessories": { sub: ["Engines", "Tyres"], featured: null },
// };

// const CategoriesBar = () => {
//   const [open, setOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("Cars");

//   const menuRef = useRef(null);
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     const handler = (e) => {
//       if (
//         menuRef.current &&
//         !menuRef.current.contains(e.target) &&
//         !buttonRef.current.contains(e.target)
//       ) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <div className="bg-indigo-200 z-60">
//       <div className="container flex items-center gap-8 py-4 text-sm overflow-x-auto">
//         <button
//           ref={buttonRef}
//           onClick={() => setOpen(!open)}
//           className="flex items-center gap-1 font-medium whitespace-nowrap text-nowrap"
//         >
//           All Categories
//           <ChevronDown
//             size={16}
//             className={`transition-transform ${open ? "rotate-180" : ""}`}
//           />
//         </button>

//         <button className="whitespace-nowrap hover:text-gray-900 rounded transition-colors"> Featured selections </button> 
//         <button className="whitespace-nowrap hover:text-gray-900 rounded transition-colors"> Best Sellers </button> 
//         <button className="whitespace-nowrap hover:text-gray-900 rounded transition-colors"> Newest Arrivals </button>

//         {open && (
//           <div
//             className="fixed inset-0 bg-black/60 -z-1"
//             onClick={() => setOpen(false)}
//           />
//         )}



//         {/* MEGA MENU */}
//         {open && (
//           <div ref={menuRef} className="absolute left-1/2 top-full md:mt-2.5 -translate-x-1/2 container bg-white shadow-xl p-0 overflow-hidden md:rounded-sm z-50">
//             <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_300px] min-h-100">

//               {/* LEFT */}
//               <div className="border-b md:border-b-0 md:border-r border-gray-300">
//                 {Object.keys(categories).map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => setActiveCategory(cat)}
//                     className={`w-full text-left px-4 py-3 text-sm flex justify-between items-center
//                       ${activeCategory === cat
//                         ? "bg-gray-100 font-semibold text-blue-600"
//                         : "hover:bg-gray-50"
//                       }`}
//                   >
//                     {cat}
//                     <span className="md:hidden">›</span>
//                   </button>
//                 ))}
//               </div>



//               {/* MIDDLE */}
//               <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3 text-sm">
//                 {categories[activeCategory].sub.map((item) => (
//                   <button
//                     key={item}
//                     className="text-left hover:text-blue-600"
//                     onClick={() => {
//                       console.log("Subcategory:", item);
//                       setOpen(false);
//                     }}
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>


//               {/* RIGHT */}
//               {categories[activeCategory].featured && (
//                 <div className="hidden md:block bg-blue-50 p-4">
//                   <img
//                     src={categories[activeCategory].featured.image}
//                     alt=""
//                     className="rounded mb-3"
//                   />
//                   <p className="text-sm font-semibold">
//                     {categories[activeCategory].featured.title}
//                   </p>
//                   <p className="text-blue-600 font-bold mt-1">
//                     {categories[activeCategory].featured.price}
//                   </p>
//                   <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded">
//                     Shop Now →
//                   </button>
//                 </div>
//               )}

//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoriesBar;

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X, ChevronRight, ChevronLeft } from "lucide-react";

const megaMenuData = {
  Automobiles: {
    subcategories: {
      Cars: {
        brands: [
          "All Cars",
          "Toyota",
          "Honda",
          "Mercedes-Benz",
          "BMW",
          "Lexus",
          "Nissan",
          "Ford",
          "Hyundai",
          "Kia",
          "Volkswagen",
          "Audi",
          "Peugeot",
          "Other",
        ],
        featured: [
          {
            title: "Foreign Used 2015 Porsche Macan Turbo - Fully Loaded",
            price: "₦22,000,000",
            image: "https://via.placeholder.com/300x200",
          },
          {
            title: "Foreign Used 2016 Mercedes-Benz GLE Coupe",
            price: "₦18,500,000",
            image: "https://via.placeholder.com/300x200",
          },
          {
            title: "Foreign Used 2017 BMW X5",
            price: "₦16,800,000",
            image: "https://via.placeholder.com/300x200",
          },
          {
            title: "Foreign Used 2018 Lexus RX 350",
            price: "₦19,200,000",
            image: "https://via.placeholder.com/300x200",
          },
        ],
      },
      Buses: {
        brands: ["All Buses", "Mini Bus", "Coaster", "Bus Parts"],
        featured: null,
      },
      Trucks: {
        brands: ["All Trucks", "Pickup", "Tipper", "Truck Parts"],
        featured: null,
      },
      Motorcycles: {
        brands: ["All Motorcycles", "Power Bike", "Scooter", "Motorcycle Parts"],
        featured: null,
      },
      "Vehicle Parts & Accessories": {
        brands: ["All Parts", "Engines", "Tyres", "Brakes", "Electronics"],
        featured: null,
      },
    },
    banner: {
      title: "UP to 25% OFF",
      subtitle: "IP none",
      cta: "View Product",
      image: "https://via.placeholder.com/300x100/3B82F6/ffffff",
    },
  },
  "Phones & Tablets": {
    subcategories: {
      Smartphones: { brands: ["iPhone", "Samsung", "Google", "OnePlus"], featured: null },
      Tablets: { brands: ["iPad", "Samsung Tab", "Amazon Fire"], featured: null },
    },
    banner: null,
  },
  Fashion: {
    subcategories: {
      Men: { brands: ["Clothing", "Shoes", "Accessories"], featured: null },
      Women: { brands: ["Clothing", "Shoes", "Bags"], featured: null },
    },
    banner: null,
  },
  "Homes & Living": {
    subcategories: {
      Furniture: { brands: ["Living Room", "Bedroom", "Office"], featured: null },
      Appliances: { brands: ["Kitchen", "Laundry", "Cooling"], featured: null },
    },
    banner: null,
  },
  Electronics: {
    subcategories: {
      "TV & Audio": { brands: ["Televisions", "Sound Systems", "Speakers"], featured: null },
      Computers: { brands: ["Laptops", "Desktops", "Accessories"], featured: null },
    },
    banner: null,
  },
  Services: {
    subcategories: {
      "Home Services": { brands: ["Cleaning", "Repair", "Installation"], featured: null },
      "Professional Services": { brands: ["Legal", "Accounting", "Consulting"], featured: null },
    },
    banner: null,
  },
  Agriculture: {
    subcategories: {
      Equipment: { brands: ["Tractors", "Harvesters", "Tools"], featured: null },
      Supplies: { brands: ["Seeds", "Fertilizers", "Pesticides"], featured: null },
    },
    banner: null,
  },
};

const mainCategories = Object.keys(megaMenuData);

const CategoriesBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedMain, setSelectedMain] = useState("Automobiles");
  const [selectedSub, setSelectedSub] = useState("Cars");
  const [mobileView, setMobileView] = useState("main"); // 'main', 'sub', 'brands', 'featured'

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const resetMobileView = () => {
    setMobileView("main");
  };
  

  const handleMainCategoryClick = (category) => {
    setSelectedMain(category);
    setMobileView("sub");
  };

  const handleSubcategoryClick = (sub) => {
    setSelectedSub(sub);
    setMobileView("brands");
  };

  const handleBrandClick = (brand) => {
    console.log(`Selected: ${selectedMain} > ${selectedSub} > ${brand}`);
    if (currentSubData?.featured) {
      setMobileView("featured");
    } else {
      setDropdownOpen(false);
      resetMobileView();
    }
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownOpen) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(e.target) &&
          buttonRef.current &&
          !buttonRef.current.contains(e.target)
        ) {
          setDropdownOpen(false);
          resetMobileView();
        }
      }
    };
    
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);

  // Initialize selected subcategory when main category changes
  useEffect(() => {
    if (dropdownOpen && megaMenuData[selectedMain]) {
      const subKeys = Object.keys(megaMenuData[selectedMain].subcategories);
      if (subKeys.length > 0) {
        setSelectedSub(subKeys[0]);
      }
    }
  }, [selectedMain, dropdownOpen]);

  const currentMainData = megaMenuData[selectedMain];
  const currentSubData = currentMainData?.subcategories?.[selectedSub];



  const MobileHeader = ({ title, onBack }) => (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-600 text-white z-10">
      <button
        onClick={onBack}
        className="flex items-center gap-2 p-1 hover:bg-blue-700 rounded"
      >
        <ChevronLeft size={20} />
        <span className="text-sm">Back</span>
      </button>
      <h3 className="font-semibold text-center flex-1">{title}</h3>
      <button
        onClick={() => {
          setDropdownOpen(false);
          resetMobileView();
        }}
        className="p-1 hover:bg-blue-700 rounded"
      >
        <X size={20} />
      </button>
    </div>
  );

  return (
    <div className="bg-indigo-200 z-40">
      <div className="container flex items-center gap-8 py-4 text-sm overflow-x-auto">
        <button
          ref={buttonRef}
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
            resetMobileView();
          }}
          className="flex items-center gap-1 font-medium whitespace-nowrap text-nowrap"
        >
          All Categories
          <ChevronDown
            size={16}
            className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        <button className="whitespace-nowrap hover:text-gray-900 rounded transition-colors">
          Featured selections
        </button>
        <button className="whitespace-nowrap hover:text-gray-900 rounded transition-colors">
          Best Sellers
        </button>
        <button className="whitespace-nowrap hover:text-gray-900 rounded transition-colors">
          Newest Arrivals
        </button>

        {dropdownOpen && (
          <div
            className="fixed top-0 inset-0 bg-black/60 -z-2"
            onClick={() => {
              setDropdownOpen(false);
              resetMobileView();
            }}
          />
        )}

        {/* Mega Menu Dropdown */}
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="fixed md:absolute left-1/2 top-16 md:top-full mt-0 md:mt-2 w-full md:w-[95vw] container -translate-x-1/2 bg-white shadow-2xl rounded-b-lg md:rounded-sm! border-t md:border border-gray-200 z-40 overflow-hidden p-0"
          >
            {/* DESKTOP VIEW */}
            <div className="hidden md:flex flex-col md:flex-row max-h-[80vh] md:max-h-[70vh] overflow-hidden">
              {/* COLUMN 1: Main Categories */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50 overflow-y-auto">
                <div className="p-2">
                  <h4 className="hidden md:block font-semibold text-gray-900 px-3 py-3">
                    All Categories
                  </h4>
                  <ul className="space-y-1">
                    {mainCategories.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => setSelectedMain(category)}
                          className={`w-full text-left px-3 py-3 rounded-lg flex items-center justify-between transition-all ${
                            selectedMain === category
                              ? "bg-white text-blue-600 font-medium shadow-sm border border-blue-100"
                              : "hover:bg-white hover:shadow-sm text-gray-700"
                          }`}
                        >
                          <span>{category}</span>
                          <ChevronRight size={16} className="text-gray-400" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* COLUMN 2: Subcategories */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 overflow-y-auto">
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {selectedMain}
                  </h4>
                  <ul className="space-y-1">
                    {currentMainData?.subcategories &&
                      Object.keys(currentMainData.subcategories).map((sub) => (
                        <li key={sub}>
                          <button
                            onClick={() => setSelectedSub(sub)}
                            className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between transition-all ${
                              selectedSub === sub
                                ? "bg-blue-50 text-blue-600 font-medium"
                                : "hover:bg-gray-50 text-gray-700"
                            }`}
                          >
                            <span>{sub}</span>
                            <ChevronRight size={16} className="text-gray-400" />
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              {/* COLUMN 3: Brands */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 overflow-y-auto">
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {selectedSub}
                  </h4>
                  <ul className="space-y-1">
                    {currentSubData?.brands?.map((brand) => (
                      <li key={brand}>
                        <button
                          onClick={() => handleBrandClick(brand)}
                          className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
                        >
                          {brand}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* COLUMN 4: Featured Products */}
              <div className="flex-1 min-w-0 overflow-y-auto">
                <div className="p-4 h-full">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    FEATURED {selectedSub.toUpperCase()}
                  </h4>
                  {currentSubData?.featured ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentSubData.featured.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="aspect-video bg-gray-100 rounded mb-3 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h5 className="text-sm font-medium text-gray-900 line-clamp-2">
                            {item.title}
                          </h5>
                          <p className="text-blue-600 font-bold mt-2">{item.price}</p>
                          <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm transition-colors">
                            SHOP NOW →
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-400 p-8">
                      <p className="text-center">No featured products available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* MOBILE VIEW */}
            <div className="md:hidden h-[70vh] overflow-hidden flex flex-col">
              {/* Main Categories View */}
              {mobileView === "main" && (
                <>
                  <MobileHeader
                    title="All Categories"
                    onBack={() => {
                      setDropdownOpen(false);
                      resetMobileView();
                    }}
                  />
                  <div className="flex-1 overflow-y-auto p-4">
                    <ul className="space-y-2">
                      {mainCategories.map((category) => (
                        <li key={category}>
                          <button
                            onClick={() => handleMainCategoryClick(category)}
                            className="w-full text-left px-4 py-4 rounded-lg flex items-center justify-between bg-gray-50 hover:bg-white hover:shadow-sm text-gray-700 border border-gray-200 transition-all"
                          >
                            <span className="font-medium">{category}</span>
                            <ChevronRight size={18} className="text-gray-400" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* Subcategories View */}
              {mobileView === "sub" && (
                <>
                  <MobileHeader
                    title={selectedMain}
                    onBack={() => setMobileView("main")}
                  />
                  <div className="flex-1 overflow-y-auto p-4">
                    <ul className="space-y-2">
                      {currentMainData?.subcategories &&
                        Object.keys(currentMainData.subcategories).map((sub) => (
                          <li key={sub}>
                            <button
                              onClick={() => handleSubcategoryClick(sub)}
                              className="w-full text-left px-4 py-4 rounded-lg flex items-center justify-between bg-gray-50 hover:bg-white hover:shadow-sm text-gray-700 border border-gray-200 transition-all"
                            >
                              <span className="font-medium">{sub}</span>
                              <ChevronRight size={18} className="text-gray-400" />
                            </button>
                          </li>
                        ))}
                    </ul>
                  </div>
                </>
              )}

              {/* Brands View */}
              {mobileView === "brands" && (
                <>
                  <MobileHeader
                    title={selectedSub}
                    onBack={() => setMobileView("sub")}
                  />
                  <div className="flex-1 overflow-y-auto p-4">
                    <ul className="space-y-2">
                      {currentSubData?.brands?.map((brand) => (
                        <li key={brand}>
                          <button
                            onClick={() => handleBrandClick(brand)}
                            className="w-full text-left px-4 py-4 rounded-lg flex items-center justify-between bg-gray-50 hover:bg-white hover:shadow-sm text-gray-700 border border-gray-200 transition-all"
                          >
                            <span className="font-medium">{brand}</span>
                            <ChevronRight size={18} className="text-gray-400" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* Featured Products View */}
              {mobileView === "featured" && (
                <>
                  <MobileHeader
                    title={`Featured ${selectedSub}`}
                    onBack={() => setMobileView("brands")}
                  />
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-4">
                      {currentSubData?.featured?.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="aspect-video bg-gray-100 rounded mb-3 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h5 className="text-sm font-medium text-gray-900 mb-2">
                            {item.title}
                          </h5>
                          <p className="text-blue-600 font-bold mb-3">{item.price}</p>
                          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded text-sm transition-colors">
                            SHOP NOW →
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesBar;