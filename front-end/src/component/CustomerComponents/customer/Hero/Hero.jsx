import React from "react";
import hero2 from "../../../../assets/Images/hero3.jpg";

const Hero = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <div className="text-center text-white px-4 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-2 font-ceviche">
            NEW SHOES COLLECTION
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 md:mb-8">
            Style in handcrafts, made by professionals for you
          </p>
          <a
            href="#"
            className="bg-white text-black py-2 px-6 sm:py-3 sm:px-8 text-sm sm:text-lg font-semibold transition border hover:border-black ring-slate-300"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
