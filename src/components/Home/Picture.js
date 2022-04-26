import React from "react";
import picture from "./img/profile_pic.jpg";

function Picture() {
  return (
    <div className="mt-10  ">
      <img className=" w-96 rounded-2xl" src={picture}></img>
    </div>
  );
}

export default Picture;
