import React from "react";

const CardCategory = ({ image,name }) => {
  return (
    <div className="bg-white border border-r-0 mb-2 hover:shadow-2xl h-full hover:translate-x transition-transform duration-300 ease-in-out">
      <div className="flex flex-col items-start  text-sm  overflow-hidden">
        
        <img
          src={image}
          alt={name}
          className="h-24 w-24 object-center self-center py-2 rounded-md"
        />

        <h1 className="mt-2 text-start self-center text-[14px] px-1 overflow-hidden">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default CardCategory;
