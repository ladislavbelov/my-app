import React from 'react';
import styles from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {Navigate, useLocation, useParams,} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";






class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId ;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {

        // if (!this.props.isAuth) return <Navigate to={"/login"} />

        return (
            <div className={styles.container}>
                <Profile {...this.props}  profile={this.props.profile} />
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    // isAuth: state.auth.isAuth

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
    connect(mapStateToProps, { getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

// export default connect(mapStateToProps, { getUserProfile})(withRouter(ProfileContainer));