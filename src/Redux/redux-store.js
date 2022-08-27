import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import usersReducer from "./users-reducer";
import newsReducer from "./news-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
        profilePage : profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        newsPage: newsReducer,
        auth: authReducer
    });

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;