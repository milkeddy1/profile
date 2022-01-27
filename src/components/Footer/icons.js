import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillCodeSandboxCircle } from "react-icons/ai";

function Icons() {
  const style = { color: "white" };

  return (
    <div className="flex justify-center m-10 items-center ">
      <a
        href="https://www.facebook.com/profile.php?id=100001639983126"
        className="hovereffect flex "
      >
        <BsFacebook
          size={35}
          style={style}
          className=" m-5 hover:fill-gray-700   hover:animate-spin"
        />
      </a>
      <a href="https://github.com/milkeddy1">
        <BsGithub
          size={35}
          style={style}
          className="hover:fill-gray-700  m-5"
        />
      </a>
      <a href="https://codepen.io/azmfvbbz-the-sans">
        <AiFillCodeSandboxCircle
          size={35}
          style={style}
          className="hover:fill-gray-700 m-5"
        />
      </a>
    </div>
  );
}

export default Icons;
