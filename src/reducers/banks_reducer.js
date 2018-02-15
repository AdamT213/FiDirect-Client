export function banksReducer(state = {loading: false, bank: {}, banks: []}, action) {
  switch (action.type) {

    case 'ADD_BANK_ACCOUNT':
      return Object.assign({}, state, {bank: {name: action.name, balance: action.balance }})
    case 'LOADING_ BANKS':
      return Object.assign({}, state, {loading: true});
     case 'GET_BANKS':
      return {loading: false, banks: action.payload.filter((bank => bank.id === state.user_id))};
    default:
      return state;
  }
} 
