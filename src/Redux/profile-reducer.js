const  ADD_POST = 'ADD-POST';
const UPDNEWPOSTTEXT = 'UPD-NEW-POST-TEXT';
const SETUSERPROFILE = 'SET-USER-PROFILE';

let initialState = {
    postList: [
        {id: 1, message: 'Hello,world', likes: 5},
        {id: 2, message: 'That\'s my second post', likes: 1},
        {id: 3, message: 'London is the capital of Great Britain', likes: 7}
    ],
    newPost : 'Default!!!',
    profile: null
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

        case UPDNEWPOSTTEXT:
            return {
                ...state,
                newPost : action.newText
            }

        case SETUSERPROFILE:
            return {
                ...state, profile: action.profile
            }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST'} )
export const setUserProfile = (profile) => ({ type: 'SET-USER-PROFILE', profile} )
export const updNEwPostActionCreator = (text) => {
    return {
        type: 'UPD-NEW-POST-TEXT',
        newText : text
    }
}

export default profileReducer;