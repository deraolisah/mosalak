import React from 'react';
import Hero from '../../components/home/Hero';
import Categories from '../../components/marketplace/Categories';
import HowItWorks from '../../components/home/HowItWorks';
import Why from '../../components/home/Why';
import JoinCommunity from '../../components/home/JoinCommunity';
import FlashSale from '../../components/marketplace/FlashSale';
import TrendingSales from '../../components/marketplace/TrendingSales';
import Ready from '../../components/home/Ready';
import Features from '../../components/home/Features';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <Features />
      <Why />
      <JoinCommunity />
      {/* <FlashSale /> */}
      {/* <TrendingSales/> */}
      <Ready />
    </>
  )
}

export default Home;