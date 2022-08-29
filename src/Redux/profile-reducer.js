import {usersAPI} from "../api/api";

const  ADD_POST = 'ADD_POST';
const UPD_NEW_POST_TEXT = 'UPD_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    postList: [
        {id: 1, message: 'Hello,world', likes: 5},
        {id: 2, message: 'That\'s my second post', likes: 1},
        {id: 3, message: 'London is the capital of Great Britain', likes: 7}
    ],
    newPost : 'Default!!!',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let body = state.newPost;
            return {
                ...state,
                newPost : '',
                postList : [...state.postList, {id: 4, message: body, likes: 0}]
            }

        case UPD_NEW_POST_TEXT:
            return {
                ...state,
                newPost : action.newText
            }

        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_USER_STATUS:
            return  {...state, status: action.status}

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: 'ADD_POST'} )
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile} )
export const setUserStatus = (status) => ({ type: 'SET_USER_STATUS', status} )
export const updNEwPostActionCreator = (text) => {
    return {
        type: 'UPD_NEW_POST_TEXT',
        newText : text
    }
}

// export const getStatus = (userId) => (dispatch) => {
//         profileAPI.getStatus(userId)
//             .then(response => {
//                     dispatch(setStatus(response.data));
//                 });
//     }

export const getUserStatus = (userId) => {
    return (dispatch) => {
        usersAPI.getUSerStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            });
    }
}
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            });
    }
}
export default profileReducer;