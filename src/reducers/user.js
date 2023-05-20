
const userReducer = (state = {data: null}, action) => {
    switch(action.type){
        case "set":
            return {data: action.payload}
        default:
            return state
    }
}

export default userReducer