import React, { useState } from 'react';

const Filter = ({ onFilter, onRemoveFilter, onShowAll }) => {
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleFilter = () => {
    onFilter({ priceRange, color, size });
  };

  const handleRemoveFilter = () => {
    setPriceRange({ min: '', max: '' });
    setColor('');
    setSize('');
    onRemoveFilter();
  };

  const handleShowAll = () => {
    setPriceRange({ min: '', max: '' });
    setColor('');
    setSize('');
    onShowAll();
  };

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const priceOptions = [
    { label: 'All', value: { min: '', max: '' } },
    { label: '$0 - $50', value: { min: 0, max: 50 } },
    { label: '$50 - $100', value: { min: 50, max: 100 } },
    { label: '$100 - $200', value: { min: 100, max: 200 } },
    { label: '$200+', value: { min: 200, max: '' } },
  ];

  const colorOptions = ['All', 'Red', 'Blue', 'Green', 'Black', 'White'];
  const sizeOptions = ['All', '7', '8', '9', '10', '11'];

  return (
    <div className="w-full">
      {/* Toggle Button for Small Screens */}
      <button
        className="md:hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 ease-in-out w-full mb-2"
        onClick={toggleFilter}
        aria-label={isOpen ? 'Close Filters' : 'Open Filters'}
      >
        {isOpen ? 'Close Filters' : 'Open Filters'}
      </button>

      {/* Filter Card */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } md:max-h-full md:opacity-100 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg mb-6 text-white w-full p-4 sm:p-6`}
        style={{
          transitionProperty: 'max-height, opacity',
        }}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Filter</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Price Range</label>
          <select
            value={JSON.stringify(priceRange)}
            onChange={(e) => setPriceRange(JSON.parse(e.target.value))}
            className="p-2 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 w-full bg-white text-black mt-2"
          >
            {priceOptions.map((option, index) => (
              <option key={index} value={JSON.stringify(option.value)}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Color</label>
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="p-2 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 w-full bg-white text-black mt-2"
          >
            {colorOptions.map((colorOption, index) => (
              <option key={index} value={colorOption}>
                {colorOption}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Size</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="p-2 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 w-full bg-white text-black mt-2"
          >
            {sizeOptions.map((sizeOption, index) => (
              <option key={index} value={sizeOption}>
                {sizeOption}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleFilter}
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 ease-in-out w-full shadow-lg mb-2"
        >
          Apply Filters
        </button>
        <button
          onClick={handleRemoveFilter}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-yellow-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 ease-in-out w-full mb-2"
        >
          Remove Filter
        </button>
        <button
          onClick={handleShowAll}
          className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-teal-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 ease-in-out w-full"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Filter;
