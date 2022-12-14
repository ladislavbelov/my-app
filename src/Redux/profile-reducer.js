import {profileAPI, usersAPI} from "../api/api";

const  ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    postList: [
        {id: 1, message: 'Hello,world', likes: 5},
        {id: 2, message: 'That\'s my second post', likes: 1},
        {id: 3, message: 'London is the capital of Great Britain', likes: 7}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let post = action.post;
            return {
                ...state,
                postList : [...state.postList, {id: 4, message: post, likes: 0}]
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

export const addPostActionCreator = (post) => ({ type: 'ADD_POST', post} )
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile} )
export const setUserStatus = (status) => ({ type: 'SET_USER_STATUS', status} )


// export const getStatus = (userId) => (dispatch) => {
//         profileAPI.getStatus(userId)
//             .then(response => {
//                     dispatch(setStatus(response.data));
//                 });
//     }

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUSerStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            });
    }
}
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(response => {
                if (response.data.resultCode === 0 ) {
                    dispatch(setUserStatus(status))
                }});
    }
}
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            });
    }
}
export default profileReducer;