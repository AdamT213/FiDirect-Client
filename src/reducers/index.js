import { combineReducers } from 'redux';
import { usersReducer } from "./users_reducer"
import { banksReducer } from "./banks_reducer"
import { paymentsReducer} from "./payments_reducer"
import { cardsReducer} from "./cards_reducer"
import { loansReducer} from "./loans_reducer"
import { assetsReducer } from "./assets_reducer"

const rootReducer = combineReducers({
 usersReducer, banksReducer, paymentsReducer, cardsReducer, loansReducer, assetsReducer,
});

export default rootReducer;
