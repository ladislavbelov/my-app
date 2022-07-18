import React from 'react';
import s from './users.module.css';
import defaultUserPhoto from '../../Assets/Images/user.png';
import {NavLink} from "react-router-dom";
import Profile from "../Profile/Profile";


let Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
    //
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

let curP = props.currentPage;
let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
let curPL = curP + 5;
let slicedPages = pages.slice( curPF, curPL);

    return  <div>
        <div className={s.pagintaionContainer}>
            {slicedPages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : false}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p + ' '}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <NavLink to={'/Profile/' + u.id}>
                        <img className={s.avatar} src={u.photos.small ? u.photos.small : defaultUserPhoto} alt=""/>
                    </NavLink>

                    <p>{u.name}</p>
                    <p>{u.status}</p>
                    <p>userID: {u.id}</p>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Follow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Unfollow</button>}
                </div>
        )}
                </div>

        }



export default Users;


