import React from 'react';
import styles from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus} from "../../Redux/profile-reducer";
import {useLocation, useParams,} from "react-router-dom";
import {compose} from "redux";







class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId ;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {

        // if (!this.props.isAuth) return <Navigate to={"/login"} />

        return (
            <div className={styles.container}>
                <Profile {...this.props}  profile={this.props.profile} status={this.props.status} />
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
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


export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus}),
    withRouter,
)(ProfileContainer);

// export default connect(mapStateToProps, { getUserProfile})(withRouter(ProfileContainer));