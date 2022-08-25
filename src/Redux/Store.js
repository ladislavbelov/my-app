import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state : {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vasya'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Victorya'},
                {id: 4, name: 'Marussia'},
                {id: 5, name: 'Alex'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'To be or not to be'},
                {id: 4, message: 'Hello'},
                {id: 5, message: 'You are the one'},
                {id: 5, message: 'You are the one321321'},
                {id: 5, message: 'You are the one12312123123123'}
            ],
            newMessageBody : 'Blab la'
        },
        profilePage: {
            postList: [
                {id: 1, message: 'Hello,world', likes: 5},
                {id: 2, message: 'Thats my second post', likes: 1},
                {id: 3, message: 'London is the capital of Great Britain', likes: 7}
            ],
            newPost : 'Default!!!'
        }
    },
    _callSubscriber () {
    },

    getState() {
        return this._state;
    },

    subscribe (observer)  {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }

}

export const addPostActionCreator = () => ({ type: 'ADD-POST'} )
export const sendMessage = () => ({ type: 'SENDMESSAGE'})

export const updNEwPostActionCreator = (text) => {
    return {
        type: 'UPD-NEW-POST-TEXT',
        newText : text
    }
}
export const updNewMessageBody = (body) => {
    return {
        type: 'UPD-NEW-MESSAGE-BODY',
        body : body
    }
}

// window.store = store;

// export default store;