import fetch from 'isomorphic-fetch'

export function addAsset(asset){
    var data = {name: asset.name, value: asset.value, user_id: asset.user_id};
    return function(dispatch){
        dispatch({type: 'ADD_ASSET'})
        return fetch('https://fidirect-api.herokuapp.com/api/assets', {
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




export function getAssets(){ 
   return function(dispatch, getState){
    dispatch({type: 'LOADING_ASSETS'})
    return fetch('https://fidirect-api.herokuapp.com/api/assets')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'GET_ASSETS', payload: [responseJson,  getState()]})
    })
  }
}