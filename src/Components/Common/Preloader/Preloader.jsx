import React from 'react';
import s from './preloader.module.css';
import preloader from "../../../Assets/Images/3d6aa9082f3c9e285df9970dc7b762ac.gif";

const Preloader = () => {
    return (
        <div>
            <img className={s.preloader} src={preloader} alt=""/>
        </div>
    );
};

export default Preloader;