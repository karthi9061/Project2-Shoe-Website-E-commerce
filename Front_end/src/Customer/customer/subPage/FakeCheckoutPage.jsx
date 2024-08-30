import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../CartProvider"; // Import the useCart hook
import gpayImg from "../../../assets/Logo/Google.svg"; // Google Pay icon
import ppayImg from "../../../assets/Logo/PhonePe.svg"; // PhonePe icon
import ptmImg from "../../../assets/Logo/Paytm.svg"; // Paytm icon
import cardImg from "../../../assets/Logo/Card.svg"; // Card Payment icon

const FakeCheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart(); // Use context to get cartItems

  const [address, setAddress] = useState("");
  const [itemsToPurchase, setItemsToPurchase] = useState(
    state?.allItems ? cartItems : [state?.item]
  );
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [upiId, setUpiId] = useState("");

  const calculateTotalPrice = () => {
    return itemsToPurchase
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  };

  const handleRemoveItem = (id) => {
    setItemsToPurchase(itemsToPurchase.filter((item) => item.id !== id));
  };

  const handlePaymentSuccess = () => {
    alert("Payment successful.");
    // Optionally navigate or update state
  };

  const handlePaymentError = (error) => {
    alert("Payment failed. Please try again.");
    console.error(error);
  };

  return (
    <div className="p-6 max-w-full mx-auto font-sans bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 min-h-screen">
      <div className="p-8 max-w-5xl mx-auto bg-white bg-opacity-80 rounded-xl shadow-2xl">
        <h1 className="text-6xl font-extrabold font-Caveat mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
          Checkout
        </h1>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold font-Zilla text-indigo-800 mb-6">
            Review Your Items
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itemsToPurchase.map((item) => (
              <div
                key={item.id}
                className="bg-indigo-50 p-6 rounded-xl shadow-lg border border-gray-200 relative hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
              >
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 text-xs shadow-md hover:bg-red-600"
                >
                  Remove
                </button>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold text-indigo-800">{item.name}</h3>
                <p className="text-xl text-indigo-900 font-semibold">
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-lg shadow-lg border border-gray-200 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Total Price
          </h2>
          <p className="text-4xl font-extrabold text-white">
            ${calculateTotalPrice()}
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-300 to-blue-500 p-6 rounded-lg shadow-lg border border-gray-200 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Shipping Address
          </h2>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your shipping address"
            className="w-full p-4 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-indigo-800"
          />
        </div>
        <div className="bg-gradient-to-r from-purple-300 to-indigo-500 p-6 rounded-lg shadow-lg border border-gray-200 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Select Payment Method
          </h2>
          <div className="flex justify-center space-x-6 mb-6">
            <button
              onClick={() => setSelectedPaymentMethod("card")}
              className={`bg-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 ${
                selectedPaymentMethod === "card" ? "ring-4 ring-purple-500" : ""
              }`}
            >
              <img src={cardImg} alt="Card Payment" className="w-14 h-14" />
            </button>
            <button
              onClick={() => setSelectedPaymentMethod("gpay")}
              className={`bg-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 ${
                selectedPaymentMethod === "gpay" ? "ring-4 ring-purple-500" : ""
              }`}
            >
              <img src={gpayImg} alt="Google Pay" className="w-14 h-14" />
            </button>
            <button
              onClick={() => setSelectedPaymentMethod("phonepe")}
              className={`bg-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 ${
                selectedPaymentMethod === "phonepe"
                  ? "ring-4 ring-purple-500"
                  : ""
              }`}
            >
              <img src={ppayImg} alt="PhonePe" className="w-14 h-14" />
            </button>
            <button
              onClick={() => setSelectedPaymentMethod("paytm")}
              className={`bg-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 ${
                selectedPaymentMethod === "paytm" ? "ring-4 ring-purple-500" : ""
              }`}
            >
              <img src={ptmImg} alt="Paytm" className="w-14 h-14" />
            </button>
          </div>
          {selectedPaymentMethod === "card" && (
            <div className="my-4">
              <input
                type="text"
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cardNumber: e.target.value })
                }
                className="w-full p-4 mb-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-indigo-800"
              />
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                value={cardDetails.expiry}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, expiry: e.target.value })
                }
                className="w-full p-4 mb-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-indigo-800"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvv: e.target.value })
                }
                className="w-full p-4 mb-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-indigo-800"
              />
              <button
                onClick={() => handlePaymentSuccess()}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-6 rounded-md hover:shadow-xl transition-shadow duration-300"
              >
                Pay with Card
              </button>
            </div>
          )}
          {(selectedPaymentMethod === "gpay" ||
            selectedPaymentMethod === "phonepe" ||
            selectedPaymentMethod === "paytm") && (
            <div className="my-4">
              <input
                type="text"
                placeholder="Enter UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="w-full p-4 mb-4 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-indigo-800"
              />
              <button
                onClick={() => handlePaymentSuccess()}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-6 rounded-md hover:shadow-xl transition-shadow duration-300"
              >
                Pay Now
              </button>
            </div>
          )}
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/profile")}
            className="text-lg text-indigo-800 hover:underline"
          >
            Change Address and View Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default FakeCheckoutPage;
