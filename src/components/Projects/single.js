import React from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

function Single({ title, description, link }) {
  function open() {
    let card = document.querySelector(".card");
    card.style.marginTop = "0";
    console.log(card.style.marginTop);
  }

  return (
    <div className="m-5">
      <div>
        <div className="flex items-center text-center m-auto w-3/5 h-72 mb-5 rounded-xl border-solid border-2 border-orange-300 sm:w-60 ">
          <div className="h-2/3 overflow-hidden">
            <div className="h-full card mt-36 ease-out duration-300 hover:mt-0">
              <HiOutlineChevronDoubleDown className="m-auto animate-bounce" />
              <button className="mb-5 ">{title}</button>
              <div className="m-auto mb-5 w-3/4">{description}</div>
              <button className="px-4 py-1 border-solid border-2 border-gray-300 ease-out duration-150 hover:rounded-3xl">
                <a href={link} target="_blank">
                  LINK
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
