import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';
import MyFormikTextareaField from "../MessageForm/MessageForm";





const Dialogs = (props) => {

    let state = props.state;

    let dialogsElements = state.dialogs.map(item => <User name={item.name} id={item.id}/>);
    let messageElements = state.messagesData.map(item => <Message message={item.message} id={item.id}/>);


    let onMessageAdd = (message) => {
        props.onMessageAdd(message);

    }


    return (
        <div className={styles.container}>
            <div className={styles.userlist}>
                {dialogsElements}
            </div>
            <div className={styles.dialoglist}>
                {messageElements}
            </div>
            <MyFormikTextareaField onMessageAdd={onMessageAdd} />
        </div>
    )
}

export default Dialogs;