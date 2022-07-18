import {addPostActionCreator, updNEwPostActionCreator} from "../../../Redux/profile-reducer";
import Postlist from "./Postlist";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        state : state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage : ()  => {dispatch(addPostActionCreator())},
        onPostChange : (text) =>  {dispatch(updNEwPostActionCreator(text))}
    }
}
const PostlistContainer = connect(mapStateToProps, mapDispatchToProps)(Postlist);



export default PostlistContainer;