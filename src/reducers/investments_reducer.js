export function investmentsReducer(state = {loading: false, investment: {}, investments: []}, action) {
  switch (action.type) {

    case 'ADD_INVESTMENT':
      return Object.assign({}, state, {investment: {name: action.name, value: action.value }}) 
    case 'LOADING_INVESTMENTS':
      return Object.assign({}, state, {loading: true});
    case 'GET_INVESTMENTS':
      return {loading: false, investments: action.payload.filter((investment => investment.id === state.user_id))};
    default:
      return state
  }
} 