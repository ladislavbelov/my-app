import React from 'react';
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import Postlist from "./Postlist";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state : state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage : (post)  => {dispatch(addPostActionCreator(post))}
    }
}
const PostlistContainer = connect(mapStateToProps, mapDispatchToProps)(Postlist);



export default PostlistContainer;