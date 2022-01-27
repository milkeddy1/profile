import React from "react";
import pic from "./img/about.jpg";

function Picture() {
  return (
    <div className="flex justify-center items-center">
      <img src={pic} className="w-4/6 rounded-3xl md:w-4/5 lg:w-2/3" />
    </div>
  );
}

export default Picture;
