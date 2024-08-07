import React from 'react';
import { useCart } from '../../CartProvider';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-md" />
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-900 font-bold mt-2">${item.price}</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={() => removeFromCart(item)}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CartPage;