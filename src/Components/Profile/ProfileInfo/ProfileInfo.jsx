import React from 'react';
import s from "../Profile.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import defaultUserPhoto from "../../../Assets/Images/user.png";
import Profilestatus from "./ProfileStatus"


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/ >
            }
    return (

        <div>
            {/*<div className={s.card_cover}>*/}
            {/*    <img src="https://litetrax.com/wp-content/uploads/2016/09/Wellhouse-Cabin.jpg" alt="" />*/}
            {/*</div>*/}
            <div className={s.card_header}>
                <div className={s.card_avatar}>
                    <img className={s.avatar} src={props.profile.photos.large ? props.profile.photos.large : defaultUserPhoto} alt=""/>
                </div>
                <div className={s.card_info}>
                    <div className={s.aboutme}>
                        <b>Status:</b>{<Profilestatus status={props.status} updateUserStatus={props.updateUserStatus} />}
                        <p><b>My name: </b>{props.profile.fullName} </p>
                        <p><b>About me: </b>{props.profile.aboutMe} </p>
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
    )
}



export default ProfileInfo;