export function assetsReducer(state = {investment: {}}, action) {
  switch (action.type) {

    case 'ADD_INVESTMENT':
      return Object.assign({}, state, {investment: {name: action.name, value: action.value }})
    default:
      return state
  }
} 