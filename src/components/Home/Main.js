import React from 'react';
import Icons from './Icons'
import Info from './Info'
import Picture from './Picture'

function Main() {
    return <div className="w-9/12 m-auto flex justify-around">
        <Icons />
        <Info />
        <Picture />
    </div>;
}

export default Main;
