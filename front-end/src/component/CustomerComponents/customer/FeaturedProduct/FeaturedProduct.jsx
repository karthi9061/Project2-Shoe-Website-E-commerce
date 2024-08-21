import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../Card/ProductCard';
import p1 from "../../../../assets/Images/p1.jpg";
import p2 from "../../../../assets/Images/p2.jpg";
import p3 from "../../../../assets/Images/p3.jpg";
import p4 from "../../../../assets/Images/p5.jpg";

const products = [
  {
    name: "Roshe G Next Nature",
    imageUrl: p1,
    price: "50.00",
    color: "Gold"
  },
  {
    name: "Renew Elevate 3",
    imageUrl: p2,
    price: "85.00",
    color: "Red"
  },
  {
    name: "New Air Max Flyknit Racer",
    imageUrl: p3,
    price: "52.00",
    color:"Blue"
  },
  {
    name: "Air Max 90",
    imageUrl: p4,
    price: "45.00",
    color: "Pink"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: 'ease-in-out',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FeaturedProduct = () => {
  return (
    <div className=" text-white font-sans py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Featured Product</h1>
        <div className="flex justify-between mb-4">
          <h2 className="bg-yellow-500 text-black rounded-full px-4 py-2 text-lg">Bestseller</h2>
        </div>
        <div className="relative">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="px-4">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
