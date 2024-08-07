import React from 'react';
import Hero from '../../component/customer/Hero/Hero';
import FeaturedProduct from '../../component/customer/FeaturedProduct/FeaturedProduct';
import ProductCategories from '../../component/customer/ProductCategories/ProductCategories';
import PromoSection from '../../component/customer/Login-signup/PromoSection';
import Carousel from '../../component/customer/Ourproduct/Carousel';

const Home = () => {
  return (
    <div className="bg-home-bg bg-cover bg-center bg-fixed min-h-screen">
      <Hero />
      <div className="mt-4">
        <PromoSection />
      </div>
      <FeaturedProduct />
      <ProductCategories />
      <Carousel />
    </div>
  );
};

export default Home;
