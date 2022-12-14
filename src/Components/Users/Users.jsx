import React from 'react';
import s from './users.module.css';
import defaultUserPhoto from '../../Assets/Images/user.png';
import {NavLink} from "react-router-dom";



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return <div>
        <div className={s.pagintaionContainer}>
            {slicedPages.map(p => {
                return <span  className={props.currentPage === p ? s.selectedPage : s.nonSelected}
                             onClick={() => {
                                 props.onPageChanged(p);
                             }}>{p + ' '}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.avatar} src={u.photos.small ? u.photos.small : defaultUserPhoto} alt=""/>
                    </NavLink>

                    <p>{u.name}</p>
                    <p>{u.status}</p>
                    <p>userID: {u.id}</p>
                    {u.followed
                        ? <button disabled={props.followingProgress
                            .some(id => id === u.id)}
                                  onClick={() => { props.unfollow(u.id) }}>
                            Unfollow</button>
                        : <button disabled={props.followingProgress.some(id => id === u.id)}
                                  onClick={() => { props.follow(u.id) }}>
                            Follow</button>}
                </div>
            )}
    </div>

}


export default Users;


