import fetch from 'isomorphic-fetch'

export function addBankAccount(account){
    var data = {name: account.name, balance: account.balance};
    return function(dispatch){
        dispatch({type: 'ADD_BANK_ACCOUNT'})
        return fetch('https://fidirect-api.herokuapp.com/api/bank_accounts', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        }).then(res => console.log(res))
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }
}

export function getBanks(){ 
   return function(dispatch){
    dispatch({type: 'LOADING_BANKS'})
    return fetch('https://fidirect-api.herokuapp.com/api/bank_accounts')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'GET_BANKS', payload: responseJson})
    })
  }
}