import fetch from 'isomorphic-fetch'

export function addRecurringPayment(payment){
    var data = {source: payment.source, status: payment.status, payment_frequency: payment.payment_frequency,
    pay_date: payment.pay_date, pay_amount: payment.pay_amount, duration: payment.duration};
    return function(dispatch){
        dispatch({type: 'ADD_RECURRING_PAYMENT'})
        return fetch('https://ee55715a523f4af8bae9f5467daf644d.vfs.cloud9.us-east-2.amazonaws.com:8081/api/recurring_payments', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
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
