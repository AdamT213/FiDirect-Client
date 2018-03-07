export function assetsReducer(state = {loading: false, asset: {}, assets: []}, action) {
  switch (action.type) {

    case 'ADD_ASSET':
      return Object.assign({}, state, {asset: {name: action.name, value: action.value }});
     case 'LOADING_ ASSETS':
      return Object.assign({}, state, {loading: true});
     case 'GET_ASSETS': 
      let userAssets = action.payload[0].filter((asset => asset.user_id === action.payload[1].usersReducer.user_id))
      return {loading: false, assets: userAssets}; 
    default:
      return state;
  }
} 
