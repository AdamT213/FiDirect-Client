export function loansReducer(state = {loading: false, loan: {}, loans: []}, action) {
  switch (action.type) {

    case 'ADD_LOAN':
      return Object.assign({}, state, {loan: {name: action.name, remaining_balance: action.remaining_balance,
      interest_rate: action.interest_rate }}) 
    case 'LOADING_LOANS':
      return Object.assign({}, state, {loading: true});
    case 'GET_LOANS':
      return {loading: false, loans: action.payload.filter((loan => loan.id === state.user_id))};
    default:
      return state
  }
} 
