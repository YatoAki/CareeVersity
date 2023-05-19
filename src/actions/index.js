
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