import fetch from 'isomorphic-fetch'

export function addBankAccount(account){
    var data = {name: account.name, balance: account.balance, recurring_payments:
       {account.recurring_payments.map((payment) => source: payment.source, status: payment.status,
       pay_date: payment.pay_date, pay_amount: payment.pay_amount, duration: payment.duration,
     payment_frequency: payment.payment_frequency)}};
    return function(dispatch){
        dispatch({type: 'ADD_BANK_ACCOUNT'})
        return fetch('/api/bank_accounts', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
        body: JSON.stringify(data),
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }
}
