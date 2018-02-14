import fetch from 'isomorphic-fetch'

export function addLoan(loan){
    var data = {name: loan.name, remaining_balance: loan.remaining_balance};
    return function(dispatch){
        dispatch({type: 'ADD_LOAN'})
        return fetch('https://ee55715a523f4af8bae9f5467daf644d.vfs.cloud9.us-east-2.amazonaws.com:8081/api/loans', {
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
   return function(dispatch){
    dispatch({type: 'LOADING_LOANS'})
    return fetch('https://ee55715a523f4af8bae9f5467daf644d.vfs.cloud9.us-east-2.amazonaws.com:8081/api/loans')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'GET_LOANS', payload: responseJson})
    })
  }
}
