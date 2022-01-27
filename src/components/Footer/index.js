import React from "react";
import Icons from "./icons";
import Nav from "./nav";
import Home from "./Home";
import Copyright from "./Copyright";
function Footer() {
  return (
    <div className="bg-slate-300 ">
      <div className="block justify-center items-center h-48 mb-10 sm:flex">
        <Home />
        <Nav />
        <Icons />
      </div>
      <Copyright />
    </div>
  );
}

export default Footer;
