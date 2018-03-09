export function investmentsReducer(state = {loading: false, investment: {}, investments: []}, action) {
  switch (action.type) {

    case 'CREATE_INVESTMENT': 
      return Object.assign({}, state, {investment: {name: action.payload[0].name, value: action.payload[0].value, user_id: action.payload[1].usersReducer.user_id }}) 
    case 'LOADING_INVESTMENTS':
      return Object.assign({}, state, {loading: true});
    case 'GET_INVESTMENTS': 
    let userInvestments = action.payload[0].filter((investment => investment.user_id === action.payload[1].usersReducer.user_id))
      return {loading: false, investments: userInvestments};  
    default:
      return state
  }
} 