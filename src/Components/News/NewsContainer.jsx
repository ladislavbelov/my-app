import {connect} from "react-redux";
import News from "./News";

let newsStateToProps = (state) => {
    return {
        news: state.newsPage
    }
}
export default connect(newsStateToProps)(News)