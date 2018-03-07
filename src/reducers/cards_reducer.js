export function cardsReducer(state = {loading: false, card: {}, cards: []}, action) {
  switch (action.type) {

    case 'ADD_CREDIT_CARD':
      return Object.assign({}, state, {card: {provider: action.provider, balance: action.balance,
      interest_rate: action.interest_rate }})
    case 'LOADING_ CARDS':
      return Object.assign({}, state, {loading: true});
     case 'GET_CARDS': 
      debugger;
      return {loading: false, cards: action.payload.filter((card => card.user_id === action.payload[1].usersReducer.user_id))};
    default:
      return state
  }
} 
