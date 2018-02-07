import { combineReducers } from 'redux';
import { usersReducer } from "./users_reducer"
import { banksReducer } from "./banks_reducer"

const rootReducer = combineReducers({
 usersReducer, banksReducer, paymentsReducer, cardsReducer,
});

export default rootReducer;
