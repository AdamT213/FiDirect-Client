import { combineReducers } from 'redux';
import { usersReducer } from "./users_reducer"

const rootReducer = combineReducers({
 usersReducer, banksReducer,
});

export default rootReducer;
