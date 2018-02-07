import fetch from 'isomorphic-fetch'

export function addLoan(loan){
    var data = {name: loan.name, remaining_balance: loan.remaining_balance};
    return function(dispatch){
        dispatch({type: 'ADD_LOAN'})
        return fetch('/api/loans', {
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
