import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white text-black p-6 rounded-lg flex flex-col items-center justify-between h-full font-poppins">
      <div className="w-full flex-1 flex flex-col items-start overflow-hidden">
        <div className="w-full h-40 overflow-hidden mb-4 border rounded-2xl">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transform transition-transform duration-300  hover:scale-110"
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <div className="flex items-start mb-2">
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
        </div>
        <p className="text-gray-500 mb-2">Shoes</p>
        <p className="text-lg font-mono mb-2">$ {product.price}</p>
        <div className="flex items-center mb-4">
          <label className="text-gray-500 mr-2">Color:</label>
          <p className="border border-gray-300 rounded px-2 py-1">{product.color}</p>
        </div>
      </div>

      <button className="bg-yellow-500 text-black rounded-lg px-4 py-2 w-full transform transition-transform duration-300 hover:scale-105 mb-4">
        Add to Cart <i className="fas fa-shopping-bag"></i>
      </button>

      <div className="flex items-end justify-end gap-4 w-full">
        <i
          className={`text-lg fas fa-heart ${
            isFavorite ? " text-red-500" : "text-gray-500"
          } hover:text-red-500 cursor-pointer active:text-red-500 transition-colors duration-300`}
          onClick={toggleFavorite}
        ></i>
        <i className="text-lg fas fa-eye text-gray-500 hover:text-green-500 cursor-pointer"></i>
      </div>
    </div>
  );
};

export default ProductCard;
