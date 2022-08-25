import React from 'react';
import styles from './PostItem.module.css';

const PostItem = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2020/07-23/How+Much+Does+It+Cost+to+Have+a+Cat+_+ASPCA+Pet+Insurance+_+black+cat+with+yellow+eyes+peeking+out-min.jpg" alt="" />
            </div>
            <div className={styles.header}><h3>Post header</h3></div>
            <div className={styles.message}><p>{props.message}</p></div>
            <div className={styles.likes}>{props.likes}</div>
        </div>
    );
};

export default PostItem;