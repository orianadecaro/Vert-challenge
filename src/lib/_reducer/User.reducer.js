import { USER_INFO, GET_USER, initData } from "../_servicio/User.actions";

const UserReducer=(state = initData, action)=>{
    switch(action.type){
        case GET_USER:
            return {...state, ...action.payload}
        case USER_INFO:
            return {...state, athlete: action.payload.array}
        default:
            return state;
    }
}

export default UserReducer;