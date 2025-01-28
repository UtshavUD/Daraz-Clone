import React from "react";

const Card = ({ image, prevprice, name, dispercent, priceafterdis }) => {
  return (
    <div className="bg-white shadow-md mb-2 hover:shadow-2xl h-full hover:translate-x transition-transform duration-300 ease-in-out">
      <div className="flex flex-col items-start  text-sm  overflow-hidden">
        
        <img
          src={image}
          alt={name}
          className="h-40 w-40 object-cover self-center py-2 rounded-md"
        />

        
        <h1 className="mt-2 text-start self-center font-semibold text-md px-1 overflow-hidden max-w-full">
          {name}
        </h1>

       
        <h1 className="text-orange-600 font-bold px-2 mt-2">
          {priceafterdis}
        </h1>

       
        <div className="flex items-center px-2 gap-2 text-gray-500 text-xs mt-1">
          <span className="line-through"> {prevprice}</span>
          <span className="text-red-600">{dispercent}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
