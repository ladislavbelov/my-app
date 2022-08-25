import React, {useRef} from 'react';
import PostItem from './PostItem/PostItem';
import styles from './PostList.module.css';

const Postlist = (props) => {

    let state= props.state;

    let postlistshow = state.postList.map(item => <PostItem message={item.message} likes={item.likes} />);

    let myRef = useRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onPostChange = () => {
        let text= myRef.current.value;
        props.onPostChange(text);
    }

    return (
        <div className={styles.container}>
            <div className={styles.card_add}>New post<textarea
                onChange={ onPostChange }
                value={state.newPost}
                ref={myRef}
                name="" id="" cols="30" rows="10"></textarea>
            <button onClick={ addMessage } >Push me!</button>
            </div>
            <div className={styles.card_posts}>
                <h2>All posts</h2>
                {postlistshow}
            </div>
        </div>
    );
};

export default Postlist;