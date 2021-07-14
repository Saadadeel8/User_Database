import { USER_DATA } from './UserType'


const initialState = {
    userdata: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_DATA:
            return{
                
                userdata: [...state.userdata, action.payload]
            }
            default: return state
    }
}

export default userReducer