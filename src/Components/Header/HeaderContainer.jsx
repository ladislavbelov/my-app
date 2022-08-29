import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authState} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authState()
    }

    render() {
        return <Header {...this.props} />
    }
}


const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    });

export default connect(mapStateToProps, { authState})(HeaderContainer);

