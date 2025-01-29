import React from "react";

const CardJustForYou = ({ image,  name, dispercent,price }) => {
  return (
    <div className="bg-white mb-5 hover:shadow-xl h-full hover:translate-y-1 transition-transform duration-300 ease-in-out">
      <div className="flex flex-col items-start  text-sm  overflow-hidden">
        
        <img
          src={image}
          alt={name}
          className="w-full h-[165px] object-fill self-center"
        />

        
        <h1 className="mt-2 text-start self-center text-base from-neutral-900 px-1 overflow-hidden">
          {name}
        </h1>
       
        <div className="flex items-baseline px-2 gap-2 text-gray-500 text-xs mt-1">
        <span className="text-xl text-orange-600">{price}</span>
          <span className="text-xs font-semibold"> {dispercent}</span>
        </div>
      </div>
    </div>
  );
};

export default CardJustForYou
