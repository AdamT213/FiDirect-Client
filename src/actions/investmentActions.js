import fetch from 'isomorphic-fetch'

export function addInvestment(investment){
    var data = {name: investment.name, value: investment.value};
    return function(dispatch, getState){
        dispatch({type: 'ADD_INVESTMENT'})
        return fetch('https://fidirect-api.herokuapp.com/api/investments', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        }).then(res => {
          return res.json()
        }).then(responseJson => {
          dispatch({type: 'CREATE_INVESTMENT', payload: [responseJson, getState()]})
        }) 
      }
} 

export function getInvestments(){ 
   return function(dispatch, getState){
    dispatch({type: 'LOADING_INVESTMENTS'})
    return fetch('https://fidirect-api.herokuapp.com/api/investments')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'GET_INVESTMENTS', payload: [responseJson, getState()]})
    })
  }
}