import React from "react";
import Picture from "./picture";
import Story from "./story";
import Info from "./info";

function Aboutme() {
  return (
    <div className="relative">
      <span className="absolute h-20 w-20 -top-32" id="about"></span>
      <h1 className="m-10 text-4xl text-center">About me</h1>
      <div className="mb-10 md:flex">
        <Picture />
        <div>
          <Info />
          <Story />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
