


export function loginSucceeded(user) {
    return {
        type: 'LOGIN_SUCCEEDED',
        user
    }
}

export function requestLogin(user) {
    return {
        type: 'LOGIN_REQUESTED',
        user
    }
}

export function loginFailed(user) {
    return {
        type: 'LOGIN_FAILED',
        user
    }
}


export const logInUser = (user) => {
    return (dispatch) => {
        dispatch(requestLogin(user))
        return signIn(user)
            .then((res) => {
                dispatch(loginSucceeded(res))
                return res
            })
            .catch((err) =>{
                dispatch(loginFailed(user))
            })
    }
}