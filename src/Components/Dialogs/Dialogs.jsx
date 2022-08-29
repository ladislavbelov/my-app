import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';
import { Navigate } from "react-router-dom";


const Dialogs = (props) => {

    let state = props.state;

    let dialogsElements = state.dialogs.map(item => <User name={item.name} id={item.id}/>);
    let messageElements = state.messagesData.map(item => <Message message={item.message} id={item.id}/>);


    let addMessage = () => {
        props.addMessage();
    };

    let onDialogsChange = (e) => {
        let body = e.target.value;
        props.onDialogsChange(body);
    }


    return (
        <div className={styles.container}>
            <div className={styles.userlist}>
                {dialogsElements}
            </div>
            <div className={styles.dialoglist}>
                {messageElements}
            </div>
            <div className={styles.card_add}>New message<textarea
                onChange={onDialogsChange}
                value={state.newMessageBody}
                name="" id="" cols="30" rows="10"></textarea>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;