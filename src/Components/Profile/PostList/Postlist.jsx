import React, {useRef} from 'react';
import PostItem from './PostItem/PostItem';
import styles from './PostList.module.css';
import MyFormikTextareaField from "../../MessageForm/MessageForm";

const Postlist = (props) => {

    let state= props.state;

    let postlistshow = state.postList.map(item => <PostItem message={item.message} likes={item.likes} />);

    let myRef = useRef();

    let addMessage = (text) => {
        props.addMessage(text);
    };

    return (
        <div className={styles.container}>
            <MyFormikTextareaField onMessageAdd={addMessage} />
            <div className={styles.card_posts}>
                <h2>All posts</h2>
                {postlistshow}
            </div>
        </div>
    );
};

export default Postlist;