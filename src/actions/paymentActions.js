import fetch from 'isomorphic-fetch'

export function addRecurringPayment(payment){
    var data = {source: payment.source, status: payment.status, payment_frequency: payment.payment_frequency,
    pay_date: payment.pay_date, pay_amount: payment.pay_amount, duration: payment.duration};
    return function(dispatch){
        dispatch({type: 'ADD_RECURRING_PAYMENT'})
        return fetch('/api/recurring_payments', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data),
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }
}
 export function updatePayDate(payment){
   return function(dispatch){
       dispatch({type: 'UPDATE_PAY_DATE'})
   }
 }
