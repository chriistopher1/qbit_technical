import { useState, useEffect } from "react";

import { AiOutlineMenu } from "react-icons/ai";

import "./navigation.css";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="navbar flex w-full items-center justify-between bg-[#0F0F0F] pr-8 fixed z-20 opacity-90">
      <img src="/logo/logoReal.png" className="max-h-24"/>
      <AiOutlineMenu className="text-2xl md:hidden cursor-pointer text-gray-400 hover:text-white transition duration-300" onClick={() => {setIsOpen(!isOpen)}}/>
      <div className={`navigation-link-container relative md:flex gap-4 ${isOpen ? "left-0" : "left-full md:left-0"}`}>

        <a className="navigation-link p-1 pl-4 pr-4 max-md:p-4" href="#home">
          <span className="font-bold">HOME</span>
        </a>
        <a className="navigation-link p-1 pl-4 pr-4 max-md:p-4" href="#aboutus">
          <span className="font-bold">ABOUT US</span>
        </a>
        <a className="navigation-link p-1 pl-4 pr-4 max-md:p-4" href="#product">
          <span className="font-bold">OUR PRODUCT</span>
        </a>
        <a className="navigation-link p-1 pl-4 pr-4 max-md:p-4" href="#contact">
          <span className="font-bold">CONTACT</span>
        </a>
        

      </div>
    </div>

  );
}

export default NavigationBar;
