import React from 'react'
import SearchBar from '../components/market/SearchBar';
import CategoriesBar from '../components/market/CategoriesBar'; // Keep it separate
import FlashSale from "../components/market/FlashSale";
import Categories from '../components/market/Categories';
import TodayDeals from '../components/market/TodayDeals';
import TrendingSales from '../components/market/TrendingSales';
import HireTrusted from '../components/market/HireTrusted';

const MarketPlace = () => {
  return (
    <section className='bg-[#eaeaea]'>
      <div className='bg-[#eaeaea]'>
        <SearchBar />
      </div>
      <div className="sticky top-16 md:top-20 z-40">
        <CategoriesBar />
      </div>
      
      {/* Rest of the content */}
      <div className='space-y-8 pt-8'>
        <div className='bg-white'>
          <FlashSale />
        </div>
        <Categories />
        <TodayDeals />
        <TrendingSales />
        <HireTrusted />
      </div>
    </section>
  )
}

export default MarketPlace;