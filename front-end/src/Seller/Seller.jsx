import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import ProductManagement from './Pages/ProductManagement'
import ProductForm from '../component/SellerComponents/Seller/ProductForm/ProductForm'
import About from '../Customer/common/About'
import Navbar from '../component/SellerComponents/Navbar/Navbar'
import Footer from '../component/common/Footer/Footer'


const Seller = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='product' element={<ProductManagement/>}/>
      <Route path='productFrom' element={<ProductForm/> }/>
      <Route path='about' element={<About/> }/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
 
    
    </>
  )
}

export default Seller