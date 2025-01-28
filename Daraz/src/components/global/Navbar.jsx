import React from "react";
import Logo from "../../Images/Logo.png";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="w-full">
      <header className="rounded-tl-md h-32 bg-orange-600">
        <div className="flex text-nowrap text-xs gap-7 justify-end text-white font-sans font-normal pr-6 md:pr-52 p-1">
          <h6>SAVE MORE ON APP</h6>
          <h6>BECOME A SELLER</h6>
          <h6>HELP & SUPPORT</h6>
          <h6>LOGIN</h6>
          <h6>SIGN UP</h6>
          <h6>भासा परिवर्तन</h6>
        </div>

       
        <div className="flex flex-wrap items-center justify-center w-full gap-7 mt-5 px-1">
          
          <img className="p-1 h-12 md:pe-10" src={Logo} alt="Logo" />

          
          <div className="flex flex-grow max-w-full md:max-w-[700px] items-center">
            <input
              type="text"
              placeholder="Search in Daraz"
              className="w-full h-[5vh] px-5 border rounded-tl-sm rounded-bl-sm"
            />
            <button className="border flex h-[5vh] justify-center items-center text-2xl p-1 text-orange-600 bg-red-100 rounded-tr-sm rounded-br-sm">
              <CiSearch />
            </button>
          </div>

          <button className="text-3xl text-white md:px-4">
            <PiShoppingCartSimpleLight />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
