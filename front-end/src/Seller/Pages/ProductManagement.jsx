import React from "react";
import "./ProductManagement.css";
import ProductList from "../../component/SellerComponents/Seller/ProductList";
import { Link } from 'react-router-dom';

const ProductManagement = () => {
  return (
    <div className="product-main">
      <div className="Product-button">
      <Link to='/productFrom'  className="button-product">Add Product</Link>
      </div>
      <div className="product-list">
        <ProductList/>
      </div>
    </div>
  );
};

export default ProductManagement;
