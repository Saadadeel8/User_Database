import {USER_DATA} from './UserType'

export const userData = (users) => {
    return{
        type: USER_DATA,
        payload: users
    }
}