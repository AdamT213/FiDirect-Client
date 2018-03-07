export function banksReducer(state = {loading: false, bank: {}, banks: []}, action) {
  switch (action.type) {

    case 'ADD_BANK_ACCOUNT':
      return Object.assign({}, state, {bank: {name: action.name, balance: action.balance }})
    case 'LOADING_ BANKS':
      return Object.assign({}, state, {loading: true});
     case 'GET_BANKS': 
     let userBanks = action.payload[0].filter((bank => bank.user_id === action.payload[1].usersReducer.user_id))
      return {loading: false, banks: userBanks};
    default:
      return state;
  }
} 
