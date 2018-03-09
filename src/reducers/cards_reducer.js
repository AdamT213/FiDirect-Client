export function cardsReducer(state = {loading: false, card: {}, cards: []}, action) {
  switch (action.type) {

    case 'ADD_CREDIT_CARD': 
      debugger;
      return Object.assign({}, state, {cards: state.cards.concat(action.payload) })
    case 'LOADING_ CARDS':
      return Object.assign({}, state, {loading: true});
     case 'GET_CARDS': 
     let userCards = action.payload[0].filter((card => card.user_id === action.payload[1].usersReducer.user_id))
      return {loading: false, cards: userCards};
    default:
      return state
  }
} 
