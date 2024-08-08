import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/common/Navbar/Navbar';
import Footer from './component/common/Footer/Footer';
import Loader from './component/common/Loader/Loader';
import Home from './pages/customer/Home';
import Mens from './pages/customer/Mens';
import CartPage from './pages/customer/CartPage';
import FavoritesPage from './pages/customer/FavoritesPage';
import { CartProvider, FavoritesProvider } from './CartProvider'; // Import both providers
import ViewPage from './pages/customer/ViewPage';
import Women from './pages/customer/Women';
import Kids from './pages/customer/Kids';
import Contact from './pages/common/Contact';
import About from './pages/common/About';
import Loader2 from './component/common/Loader/Loader2';


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
            </Routes>
            <Footer />
          </Router>
        )}
      </FavoritesProvider>
    </CartProvider>
  );
};

export default App;
