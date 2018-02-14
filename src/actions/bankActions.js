import fetch from 'isomorphic-fetch'

export function addBankAccount(account){
    var data = {name: account.name, balance: account.balance};
    return function(dispatch){
        dispatch({type: 'ADD_BANK_ACCOUNT'})
        return fetch('https://ee55715a523f4af8bae9f5467daf644d.vfs.cloud9.us-east-2.amazonaws.com:8081/api/bank_accounts', {
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
    return fetch('https://ee55715a523f4af8bae9f5467daf644d.vfs.cloud9.us-east-2.amazonaws.com:8081/api/banks')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'GET_BANKS', payload: responseJson})
    })
  }
}