import React from 'react';
import TopBanner from '../components/header/TopBanner';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div>
      <TopBanner />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PublicLayout;