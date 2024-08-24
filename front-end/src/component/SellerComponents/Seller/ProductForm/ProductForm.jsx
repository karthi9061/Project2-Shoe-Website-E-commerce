import React, { useState } from "react";
import "./ProductForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductForm = () => {
  const goto = useNavigate();

  const initialForm = {
    name: "",
    price: "",
    category: "",
    size: [],
    color: [],
    description: "",
    image: "",
  };
  const [Formdata, setFromData] = useState(initialForm);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handlePressBack = () => {
    goto("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "color" || name === "size") {
      setFromData({ ...Formdata, [name]: value.split(",") });
    } else if (name === "image") {
      setSelectedImage(event.target.files[0]);
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    } else {
      setFromData({ ...Formdata, [name]: value });
    }
  };

  const handleSumbit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", Formdata.name);
    formData.append("description", Formdata.description);
    formData.append("price", Formdata.price);
    formData.append("category", Formdata.category);
    formData.append("size", Formdata.size);
    formData.append("color", Formdata.color);
    formData.append("image", selectedImage);

    try {
      const response = await axios.post("http://localhost:8080/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Product saved successfully:", response.data);
      setFromData(initialForm);
      setImageUrl(null);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <div className="addproductcontainer">
      <div className="card">
        <button className="button" onClick={handlePressBack}>
          <div className="button-box">
            <span className="button-elem">
              <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </span>
            <span className="button-elem">
              <svg viewBox="0 0 46 40">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </span>
          </div>
        </button>

        <div className="product-form">
          <h2>Add Product</h2>
          <form id="productForm" onSubmit={handleSumbit}>
            <input
              type="text"
              id="productName"
              name="name"
              value={Formdata.name}
              onChange={handleChange}
              placeholder="Product Name"
              required
            />
            <textarea
              id="productDescription"
              name="description"
              value={Formdata.description}
              onChange={handleChange}
              placeholder="Product Description"
              required
            ></textarea>
            <input
              type="number"
              id="productPrice"
              name="price"
              value={Formdata.price}
              onChange={handleChange}
              placeholder="Price"
              required
            />
            <select
              id="productCategory"
              name="category"
              value={Formdata.category}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
            <input
              type="text"
              id="productSizes"
              name="size"
              value={Formdata.size}
              onChange={handleChange}
              placeholder="Available Sizes (comma-separated)"
              required
            />
            <input
              type="text"
              id="productColors"
              name="color"
              value={Formdata.color}
              onChange={handleChange}
              placeholder="Available Colors (comma-separated)"
              required
            />
            <input
              type="file"
              id="productImages"
              name="image"
              onChange={handleChange}
              required
            />
            {imageUrl && (
              <img src={imageUrl} alt="Product Preview" style={{ maxHeight: 300, maxWidth: 500 }} />
            )}
            <br />
            <button type="submit">Save Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
