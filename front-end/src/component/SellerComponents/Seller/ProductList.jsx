import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
      setError("Failed to delete product.");
    }
  };

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Product List</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-full h-48 overflow-hidden rounded-md mb-4">
              <img
                src={`http://localhost:8080${product.imagePath}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold font-sans text-gray-900 mb-2">{product.name}</h3>
            <p className="text-sm font-light font-sans text-gray-600 mb-2">{product.category || "Category"}</p>
            <p className="text-base font-medium font-sans text-gray-800 mb-2">$ {product.price}</p>
            <p className="text-sm font-light font-sans text-gray-600 mb-2">Sizes: {product.size.join(", ")}</p>
            <p className="text-sm font-light font-sans text-gray-600 mb-4">Colors: {product.color.join(", ")}</p>

            <div className="flex gap-3">
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
              >
                Delete
              </button>
              <button
                onClick={() => navigate(`/products/edit/${product.id}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
