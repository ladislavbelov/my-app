import React from 'react';
import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const User = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={styles.usercontainer}>
            <div className={styles.avatar}>Avatar</div>
            < div className={styles.name}>
                <NavLink to={path}> {props.name} </NavLink>
            </div>
            <div className={styles.id}>{props.id}</div>
        </div>
    );
};

export default User;