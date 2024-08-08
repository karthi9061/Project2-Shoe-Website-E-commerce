import React, { useState, useEffect } from 'react';
import { KidsShoes } from '../../../Data/MenData.js';
import Filter from '../../../component/customer/Filter/Filter.jsx';
import KidsShoesPage from '../subPage/KidsShoesPage.jsx';

const ITEMS_PER_PAGE = 6;

const Kids = () => {
  const [filteredShoes, setFilteredShoes] = useState(KidsShoes.slice(0, ITEMS_PER_PAGE));
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleFilter = (filters) => {
    const { priceRange, color, size } = filters;

    const filtered = KidsShoes.filter((shoe) => {
      const matchesPrice =
        (!priceRange.min || shoe.price >= priceRange.min) &&
        (!priceRange.max || shoe.price <= priceRange.max);
      const matchesColor = !color || shoe.colors.some(c => c.toLowerCase() === color.toLowerCase());
      const matchesSize = !size || shoe.sizes.some(s => s.toLowerCase() === size.toLowerCase());

      return matchesPrice && matchesColor && matchesSize;
    });

    setFilteredShoes(filtered.slice(0, ITEMS_PER_PAGE));
    setCurrentPage(1);
    setHasMore(filtered.length > ITEMS_PER_PAGE);
  };

  const loadMoreShoes = () => {
    if (!hasMore) return;

    setCurrentPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const endIndex = currentPage * ITEMS_PER_PAGE;
    const newShoes = KidsShoes.slice(0, endIndex);
    setFilteredShoes(newShoes);
    setHasMore(newShoes.length < KidsShoes.length);
  }, [currentPage]);

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/6 h-auto lg:h-screen sticky top-0 bg-gray-100 p-4">
        <div className="text-2xl lg:text-4xl font-freckle text-indigo-600 mb-4 lg:mb-8 flex items-center justify-center">
          Kids' Collection
        </div>
        <Filter onFilter={handleFilter} />
      </div>
      <div className="flex-grow overflow-y-auto h-screen p-4 bg-white">
        <KidsShoesPage shoes={filteredShoes} loadMoreShoes={loadMoreShoes} />
      </div>
    </div>
  );
};

export default Kids;
