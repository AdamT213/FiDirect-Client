export function cardsReducer(state = {loading: false, account: {}, accounts: []}, action) {
  switch (action.type) {

    case 'ADD_CREDIT_CARD':
      return Object.assign({}, state, {account: {provider: action.provider, balance: action.balance,
      interest_rate: action.interest_rate }})
    case 'LOADING_ CARDS':
      return Object.assign({}, state, {loading: true});
     case 'GET_CARDS':
      return {loading: false, accounts: action.payload.filter((account => account.id === state.user_id))};
    default:
      return state
  }
} 
