import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import AOS from "aos";
function Icons() {
  AOS.init();
  const [iconStatus, setIconStatus] = useState(false);
  const style = { color: "white" };
  return (
    <div
      data-aos="fade-up-right"
      className="flex justify-around md:mr-20 lg:block mr-0 mt-20"
    >
      <a
        href="https://www.facebook.com/profile.php?id=100001639983126"
        className="hovereffect flex"
      >
        <BsFacebook
          data-aos="fade-right"
          size={35}
          style={style}
          className="  hover:fill-gray-700  mb-10 hover:animate-spin"
        />
      </a>

      <a href="https://github.com/milkeddy1">
        <BsGithub
          data-aos="fade-right"
          data-aos-delay="300"
          size={35}
          style={style}
          className="hover:fill-gray-700 mb-10"
        />
      </a>
      <a href="https://codepen.io/azmfvbbz-the-sans">
        <AiFillCodeSandboxCircle
          data-aos="fade-right"
          data-aos-delay="600"
          size={35}
          style={style}
          className="hover:fill-gray-700"
        />
      </a>
    </div>
  );
}

export default Icons;
