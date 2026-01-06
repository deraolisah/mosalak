import React from 'react';
import Hero from '../components/home/Hero';
import Categories from '../components/market/Categories';
import HowItWorks from '../components/home/HowItWorks';
import Why from '../components/home/Why';
import JoinCommunity from '../components/home/JoinCommunity';
import FlashSale from '../components/market/FlashSale';
import TrendingSales from '../components/market/TrendingSales';
import Ready from '../components/home/Ready';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <Why />
      <JoinCommunity />
      {/* <FlashSale /> */}
      {/* <TrendingSales/> */}
      {/* <Ready /> */}
    </>
  )
}

export default Home;