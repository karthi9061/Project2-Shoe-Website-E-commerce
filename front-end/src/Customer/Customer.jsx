import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './customer/Pages/Home';
import Mens from './customer/Pages/Mens';
import Women from './customer/Pages/Women';
import Kids from './customer/Pages/Kids';
import FavoritesPage from './customer/Pages/FavoritesPage';
import { CartProvider, FavoritesProvider } from './CartProvider';
import Loader2 from '../component/common/Loader/Loader2';
import Navbar from '../component/CustomerComponents/Navbar/Navbar';
import About from './common/About';
import Contact from './common/Contact';
import CartPage from './customer/Pages/CartPage';
import ViewPage from './customer/View/ViewPage';
import KidviewPage from './customer/View/KidviewPage';
import WomenViewPage from './customer/View/WomenViewPage';
import Profile from '../component/common/UserProfile/UserProfile/Profile';
import LoginSIgn from '../component/common/LoginSignup/LoginSIgn';
import Footer from '../component/common/Footer/Footer';
import CheckoutPage from './customer/subPage/CheckoutPage';
import FakeCheckoutPage from './customer/subPage/FakeCheckoutPage';



const Customer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      <FavoritesProvider>
        {loading ? (
          <Loader2 />
        ) : (
          <Router>
            <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="mens" element={<Mens />} />
                <Route exact path="women" element={<Women />} />
                <Route exact path="kids" element={<Kids />} />
                <Route exact path="contact" element={<Contact />} />
                <Route exact path="about" element={<About />} />
                <Route exact path="cart" element={<CartPage />} />
                <Route exact path="favorites" element={<FavoritesPage />} />
                <Route exact path="/shoe/:id" element={<ViewPage />} />
                <Route exact path="/kshoe/:id" element={<KidviewPage />} />
                <Route exact path="/wshoe/:id" element={<WomenViewPage />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/login" element={<LoginSIgn />} />
                <Route exact path="/checkout" element={<CheckoutPage />} />
                <Route exact path="/fcheckout" element={<FakeCheckoutPage />} />
              </Routes>
            <Footer />
          </Router>
        )}
      </FavoritesProvider>
    </CartProvider>
  );
};

export default Customer;
