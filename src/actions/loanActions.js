import fetch from 'isomorphic-fetch'

export function addLoan(loan){
    var data = {name: loan.name, remaining_balance: loan.remaining_balance, user_id: loan.user_id};
    return function(dispatch){
        dispatch({type: 'ADD_LOAN'})
        return fetch('https://fidirect-api.herokuapp.com/api/loans', {
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

export function getLoans(){ 
   return function(dispatch, getState){
    dispatch({type: 'LOADING_LOANS'})
    return fetch('https://fidirect-api.herokuapp.com/api/loans')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'GET_LOANS', payload: [responseJson, getState()]})
    })
  }
}
