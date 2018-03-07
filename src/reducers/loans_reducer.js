export function loansReducer(state = {loading: false, loan: {}, loans: []}, action) {
  switch (action.type) {

    case 'ADD_LOAN':
      return Object.assign({}, state, {loan: {name: action.name, remaining_balance: action.remaining_balance,
      interest_rate: action.interest_rate }}) 
    case 'LOADING_LOANS':
      return Object.assign({}, state, {loading: true});
    case 'GET_LOANS': 
    let userLoans =  action.payload[0].filter((loan => loan.id === action.payload[1].usersReducer.user_id))
      return {loading: false, loans: userLoans};
    default:
      return state
  }
} 
