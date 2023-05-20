
export const login = (uid) => {

    return{
        type: "login",
        payload: uid
    }
}

export const logout = () => {

    return{
        type: "logout"
    }
}

export const setUserData = (data) => {
    return{
        type: "set",
        payload: data
    }
}