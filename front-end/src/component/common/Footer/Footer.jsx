import React from 'react';
import logo from '../../../assets/Logo/logo.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 sm:py-8 md:py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
        <div>
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-6 sm:h-8 md:h-10" />
            <span className="text-xl sm:text-2xl md:text-3xl font-freckle">WolfWalk</span>
          </div>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base">
            1245, Church Street<br />
            Bangalore, India
          </p>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base">
            Monday to Friday from 09:00 to 17:00.<br />
            +91 906196971
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg sm:text-xl">Shop</h3>
          <ul className="mt-2 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li><a href="#" className="hover:underline">Mens</a></li>
            <li><a href="#" className="hover:underline">Kids</a></li>
            <li><a href="#" className="hover:underline">Women</a></li>
            <li><a href="#" className="hover:underline">Boots</a></li>
            <li><a href="#" className="hover:underline">Wellington boot</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg sm:text-xl">Customer</h3>
          <ul className="mt-2 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Sign In</a></li>
            <li><a href="#" className="hover:underline">Create Account</a></li>
            <li><a href="#" className="hover:underline">Shopping</a></li>
            <li><a href="#" className="hover:underline">Checkout</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg sm:text-xl text-orange-500">Sign up to be the first to know about new collections.</h3>
          <div className="mt-4">
            <form className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="email" 
                className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-lg focus:outline-none mb-2 sm:mb-0 sm:mr-2" 
              />
              <button className="bg-orange-500 px-4 py-2 rounded-r-lg hover:bg-orange-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 6l-4 4 4 4m0 0l-4-4-4 4m4-4h11" />
                </svg>
              </button>
            </form>
          </div>
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="#" className="text-white hover:text-orange-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row justify-center items-center border-t border-gray-700 pt-4 text-sm sm:text-base">
        <p>All Rights Reserved © 2024 WolfWalk</p>
      </div>
    </footer>
  );
};

export default Footer;
