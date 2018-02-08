export function paymentsReducer(state = {payment: {}}, action) {
  switch (action.type) {

    case 'ADD_RECURRING_PAYMENT':
      return Object.assign({}, state, {payment: {source: action.source, status: action.status,
      pay_date: action.pay_date, payment_frequency: action.payment_frequency, pay_amount: action.pay_amount,
      duration: action.duration }})
    default:
      return state
  }
}
