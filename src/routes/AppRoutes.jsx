import React from 'react'
import { Route, Routes } from 'react-router-dom';

// Public Routes
import PublicLayout from '../layouts/PublicLayout';
import Home from "../pages/Home";
import MarketPlace from '../pages/MarketPlace';
import Freelancers from '../pages/Freelancers';
import Community from '../pages/Community';
import Postings from '../pages/Postings';
import Services from '../pages/Services';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/freelancers" element={<Freelancers />} />
        <Route path="/community" element={<Community />} />
        <Route path="/postings" element={<Postings />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;