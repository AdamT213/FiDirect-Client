export function cardsReducer(state = {account: {}}, action) {
  switch (action.type) {

    case 'ADD_CREDIT_CARD':
      return Object.assign({}, state, {account: {provider: action.provider, balance: action.balance,
      interest_rate: action.interest_rate }})
    default:
      return state
  }
} 
