import React from 'react';
import s from './users.module.css';
import axios from "axios";
import defaultUserPhoto from '../../Assets/Images/user.png';

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users/?page=100").then(responce => {
                props.setUsers(responce.data.items);
            });
        }
    }

    return (

        <div>
            <button onClick={getUsers}>Get suers</button>
            {
                props.users.map(u => <div key={u.id}>
                        <div>
                            <img className={s.avatar} src={u.photos.small ? u.photos.small : defaultUserPhoto} alt=""/>
                        </div>
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
    );
};

export default Users;