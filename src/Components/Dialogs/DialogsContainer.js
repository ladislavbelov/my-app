import React from 'react';
import Dialogs from "./Dialogs";
import {onMessageAdd} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {compose} from "redux";



let mapStateToProps = (state) =>{
    return {
        state: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageAdd: (newmessage) => {
            dispatch(onMessageAdd(newmessage))
            // console.log(newmessage)
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Dialogs);
