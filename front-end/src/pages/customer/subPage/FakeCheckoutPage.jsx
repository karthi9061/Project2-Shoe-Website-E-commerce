import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../../CartProvider'; // Import the useCart hook
import gpayImg from '../../../assets/Logo/Google.svg'; // Google Pay icon
import ppayImg from '../../../assets/Logo/PhonePe.svg'; // PhonePe icon
import ptmImg from '../../../assets/Logo/Paytm.svg'; // Paytm icon
import cardImg from '../../../assets/Logo/Card.svg'; // Card Payment icon

const FakeCheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart(); // Use context to get cartItems

  const [address, setAddress] = useState('');
  const [itemsToPurchase, setItemsToPurchase] = useState(state?.allItems ? cartItems : [state?.item]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = useState('');

  const calculateTotalPrice = () => {
    return itemsToPurchase.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleRemoveItem = (id) => {
    setItemsToPurchase(itemsToPurchase.filter(item => item.id !== id));
  };

  const handlePaymentSuccess = () => {
    alert('Payment successful.');
    // Optionally navigate or update state
  };

  const handlePaymentError = (error) => {
    alert('Payment failed. Please try again.');
    console.error(error);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Checkout</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Review Your Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itemsToPurchase.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 relative">
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 text-xs"
              >
                Remove
              </button>
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-md mb-2" />
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-900 font-semibold">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Total Price</h2>
        <p className="text-2xl font-bold text-gray-800">${calculateTotalPrice()}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Shipping Address</h2>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your shipping address"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Select Payment Method</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={() => setSelectedPaymentMethod('card')}
            className={`bg-gray-200 p-3 rounded-full transition-transform transform hover:scale-105 ${selectedPaymentMethod === 'card' ? 'ring-2 ring-blue-500' : ''}`}
          >
            <img src={cardImg} alt="Card Payment" className="w-12 h-12" />
          </button>
          <button
            onClick={() => setSelectedPaymentMethod('gpay')}
            className={`bg-gray-200 p-3 rounded-full transition-transform transform hover:scale-105 ${selectedPaymentMethod === 'gpay' ? 'ring-2 ring-blue-500' : ''}`}
          >
            <img src={gpayImg} alt="Google Pay" className="w-12 h-12" />
          </button>
          <button
            onClick={() => setSelectedPaymentMethod('phonepe')}
            className={`bg-gray-200 p-3 rounded-full transition-transform transform hover:scale-105 ${selectedPaymentMethod === 'phonepe' ? 'ring-2 ring-blue-500' : ''}`}
          >
            <img src={ppayImg} alt="PhonePe" className="w-12 h-12" />
          </button>
          <button
            onClick={() => setSelectedPaymentMethod('paytm')}
            className={`bg-gray-200 p-3 rounded-full transition-transform transform hover:scale-105 ${selectedPaymentMethod === 'paytm' ? 'ring-2 ring-blue-500' : ''}`}
          >
            <img src={ptmImg} alt="Paytm" className="w-12 h-12" />
          </button>
        </div>
        {selectedPaymentMethod === 'card' && (
          <div className="my-4">
            <input
              type="text"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
              className="w-full p-3 mb-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={cardDetails.expiry}
              onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
              className="w-full p-3 mb-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
              className="w-full p-3 mb-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={() => handlePaymentSuccess()}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Pay with Card
            </button>
          </div>
        )}
        {(selectedPaymentMethod === 'gpay' || selectedPaymentMethod === 'phonepe' || selectedPaymentMethod === 'paytm') && (
          <div className="my-4">
            <input
              type="text"
              placeholder="Enter UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-md"
            />
            <button
              onClick={() => handlePaymentSuccess()}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={() => navigate('/profile')}
          className="text-blue-600 hover:underline"
        >
          Change Address and View Account
        </button>
      </div>
    </div>
  );
};

export default FakeCheckoutPage;
