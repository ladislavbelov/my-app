import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostlistContainer from "./PostList/PostlistContainer";


const Profile = (props) => {

    return (
        <div className={styles.container}>
            <ProfileInfo profile={props.profile}/>
            <PostlistContainer />
        </div>
    );
};

export default Profile;