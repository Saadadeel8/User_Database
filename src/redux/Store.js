import { createStore } from 'redux';
import userReducer from './Users/UserReducer';

const store = createStore(userReducer)

export default store