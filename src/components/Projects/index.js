import React from "react";
import Single from "./single";

function Projects() {
  const projects = [
    {
      title: "Twitch直播平台API串接 (2022/2)",
      description: "透過twitch的api文件，呈現各種直播主的網頁",
      link: "https://dreamy-leavitt-9706f4.netlify.app/",
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
      title: "登入留言系統 (2022/3 - 2022/4)",
      description: "使用Node, mongoDB串接後端資料庫的登入系統",
      link: "http://eddy-login-blog.herokuapp.com/",
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
