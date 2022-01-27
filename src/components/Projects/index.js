import React from "react";
import Single from "./single";

function Projects() {
  const projects = [
    {
      title: "Snake game (2021/12)",
      description: "利用原生Javascript製作的貪吃蛇遊戲，並提供難度的選擇",
      link: "https://clever-meninsky-48dbc0.netlify.app/",
    },
    {
      title: "Todolist (2022/1)",
      description:
        "利用React做出簡易的todolist功能，能進行完成、編輯、刪除功能",
      link: "https://practical-gates-e301bc.netlify.app/",
    },
    {
      title: "英雄聯盟簡易網站 (2021/8)",
      description: "利用一些CSS特效做出一個自己最喜歡的遊戲",
      link: "https://infallible-mestorf-c97f69.netlify.app",
    },
    {
      title: "飯店重置網站 (2021/6 - 2021/7)",
      description:
        "這是結訓前做的飯店網站重置的作品是用HTML, CSS, jQuery完成的",
      link: "https://adoring-newton-776ac0.netlify.app",
    },
  ];

  return (
    <div className="relative">
      <span className="absolute h-20 w-20 -top-28 sm:h-28" id="projects"></span>
      <h1 className="m-10 text-center text-3xl">Projects</h1>
      <div className="block sm:flex flex-wrap justify-center">
        {projects.map((item, index) => {
          return <Single key={index} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
