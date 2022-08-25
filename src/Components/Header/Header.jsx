import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
    <header className={styles.header}>
        <img src="https://www.hicom.fr/wp-content/uploads/2017/09/Logo_TV_2015.png" alt="" />
        <div className={styles.loginBlock}>
            {props.isAuth  ? <h3>Hello, {props.login}</h3>  :
            <NavLink className = { navData => navData.isActive ? styles.active : styles.item } to={'/login'}>Login</NavLink>}
        </div>
    </header>
    );
};

export default Header;