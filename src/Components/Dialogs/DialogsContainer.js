import React from 'react';
import Dialogs from "./Dialogs";
import {addMessage, onDialogsChange} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) =>{
    return {
        state: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessage())
        },
        onDialogsChange: (body) => {
            dispatch(onDialogsChange(body))
        }
    }
}

// export default compose(
//     connect(mapStateToProps, {addMessage, onDialogsChange}),
//     withAuthRedirect,
//     (Dialogs)
// )

export default compose(
        connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect
    )(Dialogs);
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;