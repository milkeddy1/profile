import React from "react";

function Experiences() {
  return (
    <div className="relative bg-amber-50 mb-10 sm:w-3/4 md:w-1/2 m-auto rounded-3xl">
      <span
        className="absolute h-20 w-20 -top-32 md:h-28"
        id="experiences"
      ></span>
      <h1 className="m-5 pt-5 text-center text-3xl">Experiences</h1>
      <div className="grid grid-cols-3 ">
        <div className="col-start-1 row-start-1 sm:h-16">
          <h3 className="text-center text-gray-400 sm:text-sm">2013-2014</h3>
          <h1 className="text-center text-xl sm:text-base">美國交換學生</h1>
        </div>
        <div className=" col-start-1  row-start-3 sm:h-16">
          <h3 className="text-center text-gray-400 sm:text-sm">2016-2020</h3>
          <h1 className="text-center text-xl sm:text-base">
            虎尾科技大學飛機工程系(畢業)
          </h1>
        </div>
        <div className=" col-start-1  row-start-5 sm:h-16">
          <h3 className="text-center text-gray-400 sm:text-sm">
            2021/4-2021/7
          </h3>
          <h1 className="text-center text-xl sm:text-base">
            台灣就業通-前端工程師養成班
          </h1>
        </div>
        {/* =============================== */}

        <div className="col-start-2 row-start-1 ">
          <div className="w-3 h-3 bg-black m-auto rounded-full  "></div>
          <div className="m-auto w-0.5 h-full bg-black "></div>
        </div>
        <div className="col-start-2 row-start-2">
          <div className="w-3 h-3 bg-black m-auto rounded-full  "></div>
          <div className="m-auto w-0.5 h-full bg-black "></div>
        </div>
        <div className="col-start-2 row-start-3">
          <div className="w-3 h-3 bg-black m-auto rounded-full "></div>
          <div className="m-auto w-0.5 h-full bg-black "></div>
        </div>
        <div className="col-start-2 row-start-4">
          <div className="w-3 h-3 bg-black m-auto rounded-full "></div>
          <div className="m-auto w-0.5 h-full bg-black "></div>
        </div>
        <div className="col-start-2 row-start-5">
          <div className="w-3 h-3 bg-black m-auto rounded-full "></div>
          <div className="m-auto w-0.5 h-full bg-black "></div>
          <div className="w-3 h-3 bg-black m-auto rounded-full "></div>
        </div>
        {/* ============================== */}
        <div className="col-start-3 row-start-2 sm:h-16">
          <h3 className="text-center text-gray-400 sm:text-sm">2012-2016</h3>
          <h1 className="text-center text-xl sm:text-base">
            大安高工機械科(畢業)
          </h1>
        </div>
        <div className="col-start-3 row-start-4 sm:h-16">
          <h3 className="text-center text-gray-400 sm:text-sm">
            2020/12-2021/2
          </h3>
          <h1 className="text-center text-xl sm:text-base">
            日月光設備助理工程師
          </h1>
        </div>
        <div className="col-start-3 row-start-6 sm:h-16">
          <h3 className="text-center text-gray-400 sm:text-sm">
            2021/8-2021/12
          </h3>
          <h1 className="pb-10 text-center text-xl  sm:text-base">
            百典創意行銷前端工程師
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
