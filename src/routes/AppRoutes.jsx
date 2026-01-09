import React from 'react'
import { Route, Routes } from 'react-router-dom';

// Public Routes
import PublicLayout from '../layouts/PublicLayout';
import Home from "../pages/public/Home";
import MarketPlace from '../pages/public/MarketPlace';
import MarketplacePage from '../pages/public/MarketplacePage';
import ProductDetailPage from '../pages/public/ProductDetailPage';
import Freelancers from '../pages/public/Freelancers';
import Community from '../pages/public/Community';
import Postings from '../pages/public/Postings';
import Services from '../pages/public/Services';
import HelpCenter from '../pages/public/HelpCenter';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="marketplace" element={<MarketplacePage />}>
          <Route path=":category" element={<MarketplacePage />} />
          <Route path=":category/:subCategory" element={<MarketplacePage />} />
        </Route>
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="/freelancers" element={<Freelancers />} />
        <Route path="/community" element={<Community />} />
        <Route path="/postings" element={<Postings />} />
        <Route path="/services" element={<Services />} />
        <Route path="/help-center" element={<HelpCenter />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;