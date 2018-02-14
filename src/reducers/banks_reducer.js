export function banksReducer(state = {loading: false, account: {}, accounts: []}, action) {
  switch (action.type) {

    case 'ADD_BANK_ACCOUNT':
      return Object.assign({}, state, {account: {name: action.name, balance: action.balance }})
    case 'LOADING_ BANKS':
      return Object.assign({}, state, {loading: true});
     case 'GET_BANKS':
      return {loading: false, accounts: action.payload.filter((account => account.id === user_id))};
    default:
      return state;
  }
} 
