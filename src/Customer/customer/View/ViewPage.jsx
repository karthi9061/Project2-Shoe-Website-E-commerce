import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../CartProvider';
import axios from 'axios';

const ViewPage = () => {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const { addToCart, removeFromCart, cartItems = [] } = useCart();

  useEffect(() => {
    const fetchShoe = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/${id}`);
        setShoe(response.data);
      } catch (error) {
        console.error('Error fetching shoe data:', error);
      }
    };

    fetchShoe();
  }, [id]);

  const handleAddToCart = (shoe) => {
    if (cartItems.some((item) => item.id === shoe.id)) {
      removeFromCart(shoe);
      setFeedback({ type: 'cart', message: `${shoe.name} removed from cart!` });
    } else {
      addToCart(shoe);
      setFeedback({ type: 'cart', message: `${shoe.name} added to cart!` });
    }
    setTimeout(() => setFeedback(null), 3000);
  };

  if (!shoe) {
    return <div className="p-6 text-center text-red-500">Shoe not found.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-md">
      <Link to="/mens" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Shoes
      </Link>
      <div className="bg-white p-8 rounded-lg shadow-lg mt-4 flex flex-col md:flex-row">
        <img
          src={`http://localhost:8080${shoe.imagePath}`} // Adjust the URL if needed
          alt={shoe.name}
          className="w-full md:w-1/2 h-64 object-cover rounded-t-md md:rounded-l-md md:rounded-r-none"
        />
        <div className="md:ml-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{shoe.name}</h1>
            <p className="text-gray-700 mb-4">{shoe.description}</p>
            <p className="text-gray-900 font-bold text-xl mb-2">${shoe.price}</p>
            <p className="font-medium text-gray-600 mb-2">Colors: {shoe.colors?.join(', ') || 'No colors available'}</p>
            <p className="text-gray-600">Sizes: {shoe.sizes?.join(', ') || 'No sizes available'}</p>
          </div>
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 mt-4 self-start transition duration-300"
            onClick={() => handleAddToCart(shoe)}
          >
            {cartItems.some((item) => item.id === shoe.id) ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
      {feedback && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded-md shadow-lg text-white ${
            feedback.type === 'cart' ? 'bg-blue-500' : 'bg-green-500'
          }`}
        >
          {feedback.message}
        </div>
      )}
    </div>
  );
};

export default ViewPage;
