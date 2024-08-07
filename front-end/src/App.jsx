import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/common/Navbar/Navbar';
import Footer from './component/common/Footer/Footer';
import Loader from './component/common/Loader/Loader';
import Mens from './pages/customer/Mens';
import Home from './pages/customer/Home';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (

        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="mens" element={<Mens />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
