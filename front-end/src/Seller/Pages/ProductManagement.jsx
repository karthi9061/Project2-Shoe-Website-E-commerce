import React from "react";
import "./ProductManagement.css";
import Navbar from "../../component/SellerComponents/Navbar/Navbar";
import ProductList from "../../component/SellerComponents/Seller/ProductList";

const ProductManagement = () => {
  return (
    <div className="product-main">
      <div className="Product-button">
      <button className="button-product">Add Product</button>
      </div>
      <div className="product-list">
        <ProductList/>
      </div>
    </div>
  );
};

export default ProductManagement;
