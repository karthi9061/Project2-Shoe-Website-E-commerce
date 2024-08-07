import React from "react";
import{Link} from 'react-router-dom'
const ProductCategories = () => {
  return (
    <div className="p-8 bg-purple-300">
      <h1 className="text-4xl font-bold mt-2 mb-8">
        Meet<span className="text-4xl font-light"> Categories</span>
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {/* mens */}
        <div className="bg-mens-category bg-cover bg-bottom bg-yellow-200 p-6 rounded-lg shadow-lg relative">
          <span className="bg-transparent text-black px-3 py-1 border border-black rounded-full absolute top-4 left-4">
            CHECK OUT
          </span>
          <h3 className="text-3xl text-black font-bold mt-10">MEN'S</h3>
          <p className="text-lg text-black mt-2">TRENDINGS</p>
          <p className="text-black mt-4">
            Discover the latest trends in men's footwear, crafted with premium
            materials and designed for unparalleled comfort and style.
          </p>
          <Link to='mens'>
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full">
            FIND PRODUCTS →
          </button>
        </Link>
        </div>

        {/* women */}
        <div className="bg-womens-category bg-cover bg-bottom bg-yellow-200 p-6 rounded-lg shadow-lg relative">
          <span className="bg-transparent text-white px-3 py-1 border border-white rounded-full absolute top-4 right-4">
            CHECK OUT
          </span>
          <div className="flex flex-col items-end mt-10">
            <h3 className="text-3xl font-bold">WOMEN'S</h3>
            <p className="text-lg text-gray-600 mt-2">2024 BEST SALES</p>
            <p className="text-gray-600 mt-4">
              Step into elegance with our top-selling women's shoes of 2024.
              Each pair is meticulously crafted to provide both style and
              comfort.
            </p>
            <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full">
              FIND PRODUCTS →
            </button>
          </div>
        </div>

        {/* kids */}
        <div className="bg-kids-category bg-cover bg-bottom bg-yellow-200 p-6 rounded-lg shadow-lg relative col-span-2">
          <span className="bg-transparent text-white px-3 py-1 border border-white rounded-full absolute top-4 left-4">
            CHECK OUT
          </span>
          <h3 className="text-3xl font-bold mt-10">KIDS</h3>
          <p className="text-lg text-white mt-2">2024 BEST SALES</p>
          <p className="text-white mt-4">
            Keep your kids stylish and comfortable with our best-selling
            children's shoes of 2024. Designed to withstand all-day play and
            adventure.
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full">
            FIND PRODUCTS →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
