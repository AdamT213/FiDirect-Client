export function assetsReducer(state = {asset: {}}, action) {
  switch (action.type) {

    case 'ADD_ASSET':
      return Object.assign({}, state, {asset: {name: action.name, value: action.value }})
    default:
      return state
  }
} 
