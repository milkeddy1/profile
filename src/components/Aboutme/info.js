import React from "react";
import { MdDriveFileRenameOutline, MdEmail } from "react-icons/md";
import { BsPeopleFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";

function Info() {
  return (
    <div className=" flex justify-center mt-10  md:justify-start">
      <div className="w-4/6 md:w-auto">
        <h1 className="mb-5">個人資訊</h1>
        <div className="flex">
          <MdDriveFileRenameOutline /> 姓名：廖嘉偉
        </div>
        <div className="flex">
          <BsPeopleFill /> 年齡：25歲
        </div>
        <div className="flex">
          <FaUserGraduate /> 學歷：國立虎尾科技大學飛機工程系(畢業)
        </div>
        <div className="flex">
          <MdEmail /> Eamil：milkeddy1@gmail.com
        </div>
        <div className="flex">
          <BsFillTelephoneFill /> 電話：09192609636
        </div>
      </div>
    </div>
  );
}

export default Info;
