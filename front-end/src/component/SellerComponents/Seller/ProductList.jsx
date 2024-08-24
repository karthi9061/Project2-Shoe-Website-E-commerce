import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate=useNavigate();

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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={`http://localhost:8080${product.imagePath}`}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <p className="text-gray-800 font-semibold mt-2">
                Price: ${product.price}
              </p>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-gray-600">Sizes: {product.size.join(", ")}</p>
              <p className="text-gray-600">
                Colors: {product.color.join(", ")}
              </p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/products/edit/${product.id}`)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
