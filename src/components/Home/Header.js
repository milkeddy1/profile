import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [nav, setNav] = useState(false);

  let hamburger = document.querySelector(".hamburgerMenu");
  let open = false;
  function openList() {
    let openMenu = document.querySelector(".menuList");

    open = !open;
    if (open === false) {
      //   openMenu.style.transform = "translateY(-500px)";
      openMenu.style.opacity = "0";
      openMenu.style.marginLeft = "100%";
    } else if (open) {
      //   openMenu.style.transform = "translateY(1px)";
      openMenu.style.opacity = "1";
      openMenu.style.marginLeft = "0";
    }
    console.log(open);
    // console.log(openMenu.style.display);
    // console.log(openMenu.style.transfor);
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY != 0) {
      setNav(true);
    } else if (window.scrollY === 0) {
      setNav(false);
    }
  });

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 right-0 z-10 w-full ease-out duration-500 ${
          nav ? "bg-orange-300 shadow-xl" : ""
        }`}
      >
        <div className="relative  h-20 md:h-28 flex justify-end items-center ">
          <GiHamburgerMenu
            onClick={openList}
            size={30}
            className="hamburgerMenu cursor-pointer md:hidden m-4 sm:m-28"
          />
          <div className=" w-9/12  justify-end m-auto hidden md:flex">
            <a
              href="#home"
              className="text-gray-500 text-2xl mr-10 cursor-pointer hover:text-gray-700 font-global-font"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-500 text-2xl mr-10 cursor-pointer hover:text-gray-700 font-global-font"
            >
              About me
            </a>
            <a
              href="#skills"
              className="text-gray-500 text-2xl mr-10 cursor-pointer hover:text-gray-700 font-global-font"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-500 text-2xl mr-10 cursor-pointer hover:text-gray-700 font-global-font"
            >
              Projects
            </a>
            <a
              href="#experiences"
              className="text-gray-500 text-2xl mr-10 cursor-pointer hover:text-gray-700 font-global-font"
            >
              Experiences
            </a>
          </div>
        </div>
        <div className="absolute menuList  ml-[100%] ease-out duration-1000  w-full">
          <ul className="text-center bg-white ">
            <li className="p-2 cursor-pointer hover:bg-orange-400">
              <a href="#home">Home</a>
            </li>
            <li className="p-2 cursor-pointer hover:bg-orange-400">
              <a href="#about">Aboutme</a>
            </li>
            <li className="p-2 cursor-pointer hover:bg-orange-400">
              <a href="#skills">Skills</a>
            </li>
            <li className="p-2 cursor-pointer hover:bg-orange-400">
              <a href="#projects">porjects</a>
            </li>
            <li className="p-2 cursor-pointer hover:bg-orange-400">
              <a href="#experiences">Experiences</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
