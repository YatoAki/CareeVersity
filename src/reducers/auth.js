
const authReducer = (state= {user: null}, action) => {

    switch(action.type){
        case "login":
            return {user: action.payload}
        case "logout":
            return {user: null}
        default:
            return state
    }
}

export default authReducer