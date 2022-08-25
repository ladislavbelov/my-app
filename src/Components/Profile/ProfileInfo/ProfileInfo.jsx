import React from 'react';
import s from "../Profile.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/ >
            }

    return (
        <div>
            <div className={s.card_cover}>
                <img src="https://litetrax.com/wp-content/uploads/2016/09/Wellhouse-Cabin.jpg" alt="" />
            </div>
            <div className={s.card_header}>
                <div className={s.card_avatar}><img src={props.profile.photos.large} alt="" /></div>
                <div className={s.card_info}>
                    <div className={s.aboutme}>
                        <p><b>My name: </b>{props.profile.fullName} </p>
                        <p> <b>About me: </b>{props.profile.aboutMe} </p>
                        <div className={s.contacts}>
                            <a href={props.profile.contacts.vk}>Vkontakte</a>
                            <a href={props.profile.contacts.twitter}>Twitter</a>
                            <a href={props.profile.contacts.github}>Github</a>
                        </div>
                        <div className="jobsearch">
                            {props.profile.lookingForAJob ? <span>Ищу работу</span> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProfileInfo;