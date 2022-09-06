const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
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
        {id: 6, message: 'You are the one2'}
    ]
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newmessage = action.newmessage;
            return  {
                ...state,
                messagesData : [...state.messagesData, {id: 6, message: newmessage}],
            };
        default:
            return state;
    }
}

export const onMessageAdd = (newmessage) => { return { type: 'ADD_MESSAGE', newmessage : newmessage } }



export default dialogsReducer;