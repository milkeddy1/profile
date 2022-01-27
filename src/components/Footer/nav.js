import React from "react";

function Nav() {
  return (
    <div className="flex justify-center m-10">
      <a href="#about" className="mx-5 text-lg hover:text-gray-400">
        About me
      </a>
      <a href="#skills" className="mx-5 text-lg hover:text-gray-400">
        Skills
      </a>
      <a href="#projects" className="mx-5 text-lg hover:text-gray-400">
        Projects
      </a>
    </div>
  );
}

export default Nav;
