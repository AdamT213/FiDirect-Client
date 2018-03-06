import fetch from 'isomorphic-fetch'

export function addCreditCard(account){
    var data = {provider: account.provider, balance: account.balance, interest_rate: account.interest_rate};
    return function(dispatch){
        dispatch({type: 'ADD_CREDIT_CARD'})
        return fetch('https://fidirect-api.herokuapp.com/api/credit_cards', {
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

export function getCards(){ 
   return function(dispatch){
    dispatch({type: 'LOADING_CARDS'})
    return fetch('https://fidirect-api.herokuapp.com/api/credit_cards')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'GET_CARDS', payload: responseJson})
    })
  }
}