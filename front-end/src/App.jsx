import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider, FavoritesProvider } from './CartProvider'; // Import both providers

import Loader2 from './component/common/Loader/Loader2';
import Home from './pages/customer/Pages/Home';
import Mens from './pages/customer/Pages/Mens';
import Women from './pages/customer/Pages/Women';
import Kids from './pages/customer/Pages/Kids';
import FavoritesPage from './pages/customer/Pages/FavoritesPage';
import ViewPage from './pages/customer/View/ViewPage';
import CartPage from './pages/customer/Pages/CartPage';
import KidviewPage from './pages/customer/View/KidviewPage';
import Navbar from './component/common/Navbar/Navbar';
import Contact from './pages/common/Contact';
import About from './pages/common/About';
import WomenViewPage from './pages/customer/View/WomenViewPage';
import Footer from './component/common/Footer/Footer';
import Profile from './component/common/UserProfile/UserProfile/Profile';
import LoginSIgn from './component/common/LoginSignup/LoginSIgn';



const App = () => {
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
          <Loader2/>
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
              <Route exact path="/kshoe/:id" element={<KidviewPage/>} />
              <Route exact path="/wshoe/:id" element={<WomenViewPage />} />
              <Route exact path="/wshoe/:id" element={<WomenViewPage />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/login" element={<LoginSIgn />} />
            </Routes>
            <Footer />
          </Router>
        )}
      </FavoritesProvider>
    </CartProvider>
  );
};

export default App;
