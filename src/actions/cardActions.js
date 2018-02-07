import fetch from 'isomorphic-fetch'

export function addCreditCard(account){
    var data = {provider: account.provider, balance: account.balance, interest_rate: account.interest_rate};
    return function(dispatch){
        dispatch({type: 'ADD_CREDIT_CARD'})
        return fetch('/api/credit_cards', {
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