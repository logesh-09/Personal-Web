import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage';
import AboutPage from '../pages/aboutpage';
import PortfolioPage from '../pages/portfolio';
import EducationPage from '../pages/education';
import ContactPage from '../pages/contact';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default Routing;