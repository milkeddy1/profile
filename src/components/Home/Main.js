import React from "react";
import Icons from "./Icons";
import Info from "./Info";
import Picture from "./Picture";

function Main() {
  return (
    <div className="">
      <div className=" w-9/12 m-auto  justify-around hidden lg:flex pb-10">
        <Icons />
        <Info />
        <Picture />
      </div>
      <div className=" lg:hidden">
        <div className="w-9/12 m-auto md:flex lg:pb-12 ">
          <Info />
          <Picture />
        </div>
        <Icons />
      </div>
    </div>
  );
}

export default Main;
