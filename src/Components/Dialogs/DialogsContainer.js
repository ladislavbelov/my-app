import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessage, updNewMessageBody} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return {
        state: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(sendMessage())
        },
        onDialogsChange: (body) => {
            dispatch(updNewMessageBody(body))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;