import React from 'react';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import HowItWorks from '../components/home/HowItWorks';
import Why from '../components/home/Why';
import JoinCommunity from '../components/home/JoinCommunity';
import Features from '../components/home/Features';
import FlashSale from '../components/home/FlashSale';
import TrendingSales from '../components/home/TrendingSales';
import Ready from '../components/home/Ready';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <Why />
      <JoinCommunity />
      {/* <Features /> */}
      <FlashSale />
      <TrendingSales/>
      <Ready />
    </>
  )
}

export default Home;