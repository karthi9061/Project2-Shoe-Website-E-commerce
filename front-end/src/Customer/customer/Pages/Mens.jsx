import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from '../../../component/CustomerComponents/customer/Filter/Filter.jsx';
import MenShoesPage from '../subPage/MenShoesPage.jsx';

const ITEMS_PER_PAGE = 6;

const Mens = () => {
  const [allShoes, setAllShoes] = useState([]); // State for all shoes
  const [filteredShoes, setFilteredShoes] = useState([]); // State for filtered shoes
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products/category/men');
      setAllShoes(response.data); // Store all shoes
      setFilteredShoes(response.data.slice(0, ITEMS_PER_PAGE)); // Set initial filtered shoes
      setHasMore(response.data.length > ITEMS_PER_PAGE);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleFilter = (filters) => {
    const { priceRange, color, size } = filters;

    const filtered = allShoes.filter((shoe) => {
      const matchesPrice =
        (!priceRange.min || shoe.price >= priceRange.min) &&
        (!priceRange.max || shoe.price <= priceRange.max);
      const matchesColor = !color || shoe.color.some(c => c.toLowerCase() === color.toLowerCase());
      const matchesSize = !size || shoe.size.some(s => s.toLowerCase() === size.toLowerCase());

      return matchesPrice && matchesColor && matchesSize;
    });

    setFilteredShoes(filtered.slice(0, ITEMS_PER_PAGE));
    setCurrentPage(1);
    setHasMore(filtered.length > ITEMS_PER_PAGE);
  };

  const loadMoreShoes = () => {
    if (!hasMore) return;

    const endIndex = (currentPage + 1) * ITEMS_PER_PAGE;
    setFilteredShoes((prevShoes) => [
      ...prevShoes,
      ...allShoes.filter((shoe) => {
        const { priceRange, color, size } = filters;
        const matchesPrice =
          (!priceRange.min || shoe.price >= priceRange.min) &&
          (!priceRange.max || shoe.price <= priceRange.max);
        const matchesColor = !color || shoe.color.some(c => c.toLowerCase() === color.toLowerCase());
        const matchesSize = !size || shoe.size.some(s => s.toLowerCase() === size.toLowerCase());

        return matchesPrice && matchesColor && matchesSize;
      }).slice(prevShoes.length, endIndex)
    ]);

    setCurrentPage(prevPage => prevPage + 1);
    setHasMore(filteredShoes.length < allShoes.length);
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="md:w-1/6 w-full md:h-screen h-auto sticky top-0 bg-gray-100 p-4">
        <div className="text-2xl md:text-4xl font-freckle text-indigo-600 mb-4 md:mb-8 flex items-center justify-center">
          Men's Collection
        </div>
        <Filter onFilter={handleFilter} />
      </div>
      <div className="flex-grow overflow-y-auto h-full md:h-screen p-4 bg-white">
        <MenShoesPage shoes={filteredShoes} loadMoreShoes={loadMoreShoes} />
      </div>
    </div>
  );
};

export default Mens;
