import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

function Info() {
  return (
    <div className=" w-full  md:w-3/5 lg:mt-16 ">
      <h1 className="text-3xl mt-20 text-gray-700 font-global-font mb-10 sm:mt-0 ">
        Hi, 我是廖嘉偉
      </h1>
      <h2 className="text-2xl text-gray-400 font-global-font">
        Frontend Developer
      </h2>
      <p className="text-xl text-gray-900 mt-10 font-global-font">
        我喜歡與時俱進的工作 <br />
        我喜歡有工作成果的即時反饋 <br />
        我喜歡能即時將所學發揮到工作上 <br />
      </p>
      <div className="w-32 flex mt-10 border-solid border-2 px-2 py-1 transition hover:bg-orange-300">
        <a className="flex" href="#about">
          About me <BsArrowReturnRight />
        </a>
      </div>
    </div>
  );
}

export default Info;
