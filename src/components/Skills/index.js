import React, { useState } from "react";

function Skills() {
  const [scrollPosition, setScrollPosition] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 900 && window.scrollY < 2000) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false);
    }
    console.log(window.scrollY);
  });
  return (
    <div className="bg-slate-300 pb-10 relative">
      <span className="absolute h-20 w-20 -top-28 sm:h-28" id="skills"></span>
      <h1 className="p-10 text-4xl text-center">Skills</h1>
      <div>
        <div className="text-center">HTML</div>
        <div className="my-3 relative bg-gray-500 w-2/4 h-4 m-auto rounded-lg">
          <div
            className={`absolute h-full bg-orange-300 rounded-lg ${
              scrollPosition ? "animate-[progress80_3s_forwards]" : ""
            }`}
          ></div>
        </div>
      </div>
      <div>
        <div className="text-center">CSS</div>
        <div className="my-3 relative bg-gray-500 w-2/4 h-4 m-auto rounded-lg">
          <div
            className={`absolute h-full bg-orange-300 rounded-lg ${
              scrollPosition ? "animate-[progress70_3s_forwards]" : ""
            }`}
          ></div>
        </div>
      </div>
      <div>
        <div className="text-center">jQuery</div>
        <div className="my-3 relative bg-gray-500 w-2/4 h-4 m-auto rounded-lg">
          <div
            className={`absolute h-full bg-orange-300 rounded-lg ${
              scrollPosition ? "animate-[progress60_3s_forwards]" : ""
            }`}
          ></div>
        </div>
      </div>
      <div>
        <div className="text-center">JavaScript</div>
        <div className="my-3 relative bg-gray-500 w-2/4 h-4 m-auto rounded-lg">
          <div
            className={`absolute h-full bg-orange-300 rounded-lg ${
              scrollPosition ? "animate-[progress60_3s_forwards]" : ""
            }`}
          ></div>
        </div>
      </div>
      <div>
        <div className="text-center">React</div>
        <div className="my-3 relative bg-gray-500 w-2/4 h-4 m-auto rounded-lg">
          <div
            className={`absolute h-full bg-orange-300 rounded-lg ${
              scrollPosition ? "animate-[progress50_3s_forwards]" : ""
            }`}
          ></div>
        </div>
      </div>
      <div>
        <div className="text-center">Git/GitHub</div>
        <div className="my-3 relative bg-gray-500 w-2/4 h-4 m-auto rounded-lg">
          <div
            className={`absolute h-full bg-orange-300 rounded-lg ${
              scrollPosition ? "animate-[progress30_3s_forwards]" : ""
            }`}
          ></div>
        </div>
      </div>
      <div>
        <div className="text-center">Tailwind</div>
        <div className="my-3 relative bg-gray-500 w-2/4 h-4 m-auto rounded-lg">
          <div
            className={`absolute h-full bg-orange-300 rounded-lg ${
              scrollPosition ? "animate-[progress30_3s_forwards]" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
