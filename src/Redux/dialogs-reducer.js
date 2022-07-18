const UPDNEWMESSAGEBODY = 'UPD-NEW-MESSAGE-BODY';
const SENDMESSAGE = 'SEND-MESSAGE';

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
    ],
    newMessageBody : 'Blab la123'
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDNEWMESSAGEBODY:
            return  {
                ...state,
                newMessageBody: action.body
            };

        case SENDMESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                messagesData : [...state.messagesData, {id: 6, message: body}],
                newMessageBody : ''
            };

        default:
            return state;
    }
}
export const sendMessage = () => ({ type: 'SEND-MESSAGE'})
export const updNewMessageBody = (body) => { return { type: 'UPD-NEW-MESSAGE-BODY', body : body } }

export default dialogsReducer;