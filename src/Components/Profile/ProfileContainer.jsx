import React from 'react';
import styles from './Profile.module.css';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {useLocation, useParams,} from "react-router-dom";




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId ;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
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

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));