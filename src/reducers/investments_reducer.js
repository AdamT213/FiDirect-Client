export function investmentsReducer(state = {loading: false, investment: {}, investments: []}, action) {
  switch (action.type) {

    case 'ADD_INVESTMENT':
      return Object.assign({}, state, {investment: {name: action.name, value: action.value }}) 
    case 'LOADING_INVESTMENTS':
      return Object.assign({}, state, {loading: true});
    case 'GET_INVESTMENTS': 
    let userInvestments = action.payload[0].filter((investment => investment.user_id === action.payload[1].usersReducer.user_id))
      return {loading: false, investments: userInvestments};
    default:
      return state
  }
} 