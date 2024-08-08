import React, { Suspense, lazy } from 'react';

const Hero = lazy(() => import('../../component/customer/Hero/Hero'));
const FeaturedProduct = lazy(() => import('../../component/customer/FeaturedProduct/FeaturedProduct'));
const ProductCategories = lazy(() => import('../../component/customer/ProductCategories/ProductCategories'));
const PromoSection = lazy(() => import('../../component/customer/Login-signup/PromoSection'));
const Carousel = lazy(() => import('../../component/customer/Ourproduct/Carousel'));

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
