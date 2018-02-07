export function loansReducer(state = {loan: {}}, action) {
  switch (action.type) {

    case 'ADD_LOAN':
      return Object.assign({}, state, {loan: {name: action.name, remaining_balance: action.remaining_balance,
      interest_rate: action.interest_rate }})
    default:
      return state
  }
} 
