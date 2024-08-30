
import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
    </div>
  );
};

export default Loader;
