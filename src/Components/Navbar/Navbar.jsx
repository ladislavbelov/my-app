import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.nav_list}>
                <li className={styles.nav_item}><NavLink className = { navData => navData.isActive ? styles.active : styles.item } to='/'>Main</NavLink></li>
                <li className={`${styles.nav_item} ${styles.someclass}`}><NavLink className = { navData => navData.isActive ? styles.active : styles.item } to='/profile'>Profile</NavLink></li>
                <li className={styles.nav_item}><NavLink className = { navData => navData.isActive ? styles.active : styles.item } to='/dialogs'>Dialogs</NavLink></li>
                <li className={styles.nav_item}><NavLink className = { navData => navData.isActive ? styles.active : styles.item } to='/users'>Users</NavLink></li>
                <li className={styles.nav_item}><NavLink className = { navData => navData.isActive ? styles.active : styles.item } to='/news'>News</NavLink></li>
                <li className={styles.nav_item}><NavLink className = { navData => navData.isActive ? styles.active : styles.item } to='/music'>Music</NavLink></li>
                <li className={styles.nav_item}><NavLink className = { navData => navData.isActive ? styles.active : styles.item } to='/settings'>Settings</NavLink></li>
                <li className={styles.nav_item}><NavLink className = { navData => navData.isActive ? styles.active : styles.item } to='/formik'>Formik</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;