export function banksReducer(state = {account: {}}, action) {
  switch (action.type) {

    case 'ADD_BANK_ACCOUNT':
      return Object.assign({}, state, {account: {name: action.name, balance: action.balance }})
    default:
      return state
  }
} 
