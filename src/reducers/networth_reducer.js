
export function networthReducer(state = {networth: 0}, action) {
  switch (action.type) {

    case 'CALCULATE_NET_WORTH':  
        let assetsvalue = 0; 
        action.payload.assetsReducer.assets.map((asset) => assetsvalue += asset.value)
        let banksbalance = 0; 
        action.payload.banksReducer.banks.map((bank) => banksbalance += bank.balance)
        let cardsbalance = 0; 
        action.payload.cardsReducer.cards.map((card) => cardsbalance += card.balance) 
        let investmentsvalue = 0; 
        action.payload.investmentsReducer.investments.map((investment) => investmentsvalue += investment.value) 
        let loansbalance = 0; 
        action.payload.loansReducer.loans.map((loan) => loansbalance -= loan.remaining_balance) 
        let totalvalue = assetsvalue + banksbalance + cardsbalance + investmentsvalue + loansbalance
      return Object.assign({}, state, {networth: totalvalue})
    default:
      return state
  }
}