import React from 'react';
import styles from './Profile.module.css';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";




class ProfileContainer extends React.Component {

    componentDidMount() {
        // this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // this.props.toggleFetching(false);
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div className={styles.container}>
                <Profile {...this.props}  profile={this.props.profile} />
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);