import React from "react";
import StyledButton from "../../../common/Button/StyledButton";

const PromoSection = () => {
  return (
    <div className="bg-gray-800 text-white py-16 flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-lg">
            ALL PRODUCTS{" "}
            <span className="text-3xl font-bold block md:inline">
              {" "}
              Get 20% off
            </span>
          </p>
          <h2 className="text-3xl mt-2">for first order</h2>
          <div className="ml-20 -mt-10  flex items-center justify-center">
            <StyledButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
