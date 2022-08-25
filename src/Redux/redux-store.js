import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {combineReducers, legacy_createStore as createStore} from 'redux';
import usersReducer from "./users-reducer";
import newsReducer from "./news-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
        profilePage : profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        newsPage: newsReducer,
        auth: authReducer
    });

let store = createStore(reducers);

window.store = store;

export default store;