export function cardsReducer(state = {loading: false, card: {}, cards: []}, action) {
  switch (action.type) {

    case 'ADD_CREDIT_CARD':
      return Object.assign({}, state, {card: {provider: action.provider, balance: action.balance,
      interest_rate: action.interest_rate }})
    case 'LOADING_ CARDS':
      return Object.assign({}, state, {loading: true});
     case 'GET_CARDS': 
     let userCards = action.payload[0].filter((card => card.user_id === action.payload[1].usersReducer.user_id))
      debugger;
      return {loading: false, cards: userCards.map((card => state.cards.push(card)))};
    default:
      return state
  }
} 
