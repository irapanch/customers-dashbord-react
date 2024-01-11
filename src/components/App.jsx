import CustomersPage from 'pages/CustomersPage/CustomersPage';
import DashbordHomePage from 'pages/DashbordHomePage';
import HelpPage from 'pages/HelpPage';
import IncomePage from 'pages/IncomePage';
import NotFoundPage from 'pages/NotFoundPage';
import ProductPage from 'pages/ProductPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import PromotePage from 'pages/PromotePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashbordHomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="income" element={<IncomePage />} />
          <Route path="promote" element={<PromotePage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
