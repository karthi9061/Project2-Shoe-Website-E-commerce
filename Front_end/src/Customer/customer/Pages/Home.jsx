import React, { Suspense, lazy } from 'react';

const Hero = lazy(() => import('../../../component/CustomerComponents/customer/Hero/Hero'));
const FeaturedProduct = lazy(() => import('../../../component/CustomerComponents/customer/FeaturedProduct/FeaturedProduct'));
const ProductCategories = lazy(() => import('../../../component/CustomerComponents/customer/ProductCategories/ProductCategories'));
const PromoSection = lazy(() => import('../../../component/CustomerComponents/customer/Login-signup/PromoSection'));
const Carousel = lazy(() => import('../../../component/CustomerComponents/customer/Ourproduct/Carousel'));

const Home = () => {
  return (
    <div className="bg-home-bg bg-cover bg-center bg-fixed min-h-screen">
      <Suspense fallback={"."}>
        <Hero />
      </Suspense>
      <div className="mt-4">
        <Suspense fallback={"."}>
          <PromoSection />
        </Suspense>
      </div>
      <Suspense fallback={"."}>
        <FeaturedProduct />
      </Suspense>
      <Suspense fallback={"."}>
        <ProductCategories />
      </Suspense>
      <Suspense fallback={"."}>
        <Carousel />
      </Suspense>
    </div>
  );
};

export default Home;
