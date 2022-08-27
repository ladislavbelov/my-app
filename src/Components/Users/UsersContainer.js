import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    unfollow, toggleFollowingProgress, getUsers
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";




class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber); сейчас это делается в санке в юзер -редьюсере. Хз насколько это правильно.
    }

    render() {
        return  <>
            {this.props.isFetching ? <Preloader /> : false }
            <Users totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}
                          users={this.props.users}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
                   followingProgress={this.props.followingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}


export default connect(mapStateToProps,
    {follow, unfollow, toggleFollowingProgress, getUsers})(UsersContainer);