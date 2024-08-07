import React, { createContext, useState, useContext } from 'react';

// Cart Context
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

// Favorites Context
const FavoritesContext = createContext();
export const useFavorites = () => useContext(FavoritesContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => setCartItems((prev) => [...prev, item]);
  const removeFromCart = (item) => setCartItems((prev) => prev.filter(i => i.id !== item.id));

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const FavoritesProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]); // Initialize as an empty array

  const addToFavorites = (item) => setFavoriteItems((prev) => [...prev, item]);
  const removeFromFavorites = (item) => setFavoriteItems((prev) => prev.filter((i) => i.id !== item.id));

  return (
    <FavoritesContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};