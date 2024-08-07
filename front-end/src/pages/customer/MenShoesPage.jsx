import React, { useState, useEffect, useRef } from 'react';

const MenShoesPage = ({ shoes, loadMoreShoes }) => {
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const lastElementRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoading(true);
        loadMoreShoes();
      }
    });

    if (node) observer.current.observe(node);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shoes.map((shoe, index) => (
        <div
          key={shoe.id}
          ref={index === shoes.length - 1 ? lastElementRef : null}
          className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl relative"
        >
          <img
            src={shoe.image}
            alt={shoe.name}
            className="w-full h-48 object-cover rounded-t-md"
          />
          <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg cursor-pointer">
            <i className="fas fa-heart text-red-500"></i>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-800">{shoe.name}</h3>
            <p className="text-gray-700 mt-2">{shoe.description}</p>
            <p className="text-gray-900 font-bold mt-2">${shoe.price}</p>
            <p className="font-medium text-gray-600 mt-2">Colors: {shoe.colors.join(', ')}</p>
            <p className="text-gray-600 mt-2">Sizes: {shoe.sizes.join(', ')}</p>
            <div className="mt-4 flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600 flex items-center space-x-2">
                <i className="fas fa-shopping-cart"></i>
                <span>Add to Cart</span>
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 flex items-center space-x-2">
                <i className="fas fa-eye"></i>
                <span>View</span>
              </button>
            </div>
          </div>
        </div>
      ))}
      {loading && (
        <div className="w-full text-center mt-6 text-gray-600">
          Loading more items...
        </div>
      )}
    </div>
  );
};

export default MenShoesPage;
