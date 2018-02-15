export function networthReducer(state = {networth: 0}, action) {
  switch (action.type) {

    case 'CALCULATE_NET_WORTH': 
        let assetsvalue = 0; 
        debugger;
        state.assets.map((asset) => assetsvalue += asset.value)
        let banksbalance = 0; 
        state.banks.map((bank) => banksbalance += bank.balance)
        let cardsbalance = 0; 
        state.cards.map((card) => cardsbalance += card.balance) 
        let investmentsvalue = 0; 
        state.investments.map((investment) => investmentsvalue += investment.value) 
        let loansbalance = 0; 
        state.loans.map((loan) => loansbalance -= loan.remaining_balance) 
        let totalvalue = assetsvalue + banksbalance + cardsbalance + investmentsvalue + loansbalance
      return Object.assign({}, state, {networth: totalvalue})
    default:
      return state
  }
}