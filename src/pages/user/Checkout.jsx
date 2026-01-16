// Checkout.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CheckoutDelivery from './CheckoutDelivery';
import CheckoutPayment from './CheckoutPayment';

const Checkout = () => {
  return (
    <Routes>
      <Route index element={<CheckoutDelivery />} />
      <Route path="payment" element={<CheckoutPayment />} />
    </Routes>
  );
};

export default Checkout;