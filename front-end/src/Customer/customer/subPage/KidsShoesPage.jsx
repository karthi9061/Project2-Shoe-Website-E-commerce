import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart, useFavorites } from '../../CartProvider';


const KidsShoesPage = ({ shoes, loadMoreShoes }) => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [clickedShoe, setClickedShoe] = useState(null);
  const { addToCart, removeFromCart, cartItems = [] } = useCart();
  const { addToFavorites, removeFromFavorites, favoriteItems = [] } = useFavorites(); 
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

  const handleAddToFavorites = (shoe) => {
    setClickedShoe(shoe.id);
    setTimeout(() => setClickedShoe(null), 300);

    if (favoriteItems.some((item) => item.id === shoe.id)) {
      removeFromFavorites(shoe);
      setFeedback({ type: 'favorites', message: `${shoe.name} removed from favorites!` });
    } else {
      addToFavorites(shoe);
      setFeedback({ type: 'favorites', message: `${shoe.name} added to favorites!` });
    }
    setTimeout(() => setFeedback(null), 3000);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shoes.map((shoe, index) => (
          <div
            key={shoe.id}
            ref={index === shoes.length - 1 ? lastElementRef : null}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl relative"
          >
            <img src={shoe.image} alt={shoe.name} className="w-full h-48 object-cover rounded-t-md" />
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-800">{shoe.name}</h3>
              <p className="text-gray-700 mt-2">{shoe.description}</p>
              <p className="text-gray-900 font-bold mt-2">${shoe.price}</p>
              <p className="font-medium text-gray-600 mt-2">Colors: {shoe.colors.join(', ')}</p>
              <p className="text-gray-600 mt-2">Sizes: {shoe.sizes.join(', ')}</p>
              <div className="mt-4 flex justify-between">
                <button
                  className={`px-4 py-2 rounded-md transition duration-300 flex items-center space-x-2 ${
                    cartItems.some((item) => item.id === shoe.id)
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                  onClick={() => handleAddToCart(shoe)}
                >
                  <i
                    className={`fas fa-${
                      cartItems.some((item) => item.id === shoe.id) ? 'minus' : 'shopping-cart'
                    }`}
                  ></i>
                  <span>
                    {cartItems.some((item) => item.id === shoe.id) ? 'Remove from Cart' : 'Add to Cart'}
                  </span>
                </button>
                <Link to={`/kshoe/${shoe.id}`} className="bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 flex items-center space-x-2">
                  <i className="fas fa-eye"></i>
                </Link>
                <button
                  className={`p-2 rounded-md transition duration-300 flex items-center space-x-2 ${
                    favoriteItems.some((item) => item.id === shoe.id)
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                  } ${clickedShoe === shoe.id ? 'pop-out' : ''}`}
                  onClick={() => handleAddToFavorites(shoe)}
                >
                  <i
                    className={`fas fa-heart ${
                      favoriteItems.some((item) => item.id === shoe.id) ? 'text-white' : 'text-red-500'
                    }`}
                  ></i>
                  <span>
                    {favoriteItems.some((item) => item.id === shoe.id)
                      ? ''
                      : ''}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
        {loading && <div className="w-full text-center mt-6 text-gray-600">Loading more items...</div>}
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

export default KidsShoesPage;
