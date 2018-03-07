import fetch from 'isomorphic-fetch'

export function addBankAccount(account){
    var data = {name: account.name, balance: account.balance};
    return function(dispatch, getState){
        dispatch({type: 'ADD_BANK_ACCOUNT'})
        return fetch('https://fidirect-api.herokuapp.com/api/bank_accounts', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        }).then(res =>{
          return res.json()
        }).then(responseJson => {
          dispatch({type: 'CREATE_ACCOUNT', payload: [responseJson,getState()]}) 
      }) 
    }
}

export function getBanks(){ 
   return function(dispatch, getState){
    dispatch({type: 'LOADING_BANKS'})
    return fetch('https://fidirect-api.herokuapp.com/api/bank_accounts')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'GET_BANKS', payload: [responseJson,getState()]})
    })
  }
}