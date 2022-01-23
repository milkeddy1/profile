import React from 'react';

function Header() {
    return <div className="h-40 flex justify-end items-center">
        <div className=" w-9/12 flex justify-end m-auto">
            <a className="text-gray-500 text-2xl mr-10 cursor-pointer hover:text-gray-700 font-global-font">Home</a>
            <a className="text-gray-500 text-2xl mr-10 cursor-pointer hover:text-gray-700 font-global-font">About me</a>
            <a className="text-gray-500 text-2xl mr-10 cursor-pointer hover:text-gray-700 font-global-font">Skills</a>
            <a className="text-gray-500 text-2xl mr-10 cursor-pointer hover:text-gray-700 font-global-font">Projects</a>
            <a className="text-gray-500 text-2xl mr-10 cursor-pointer hover:text-gray-700 font-global-font">Experiences</a>
        </div>
    </div>;
}

export default Header;
