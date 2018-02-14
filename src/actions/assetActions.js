import fetch from 'isomorphic-fetch'

export function addAsset(asset){
    var data = {name: asset.name, value: asset.value};
    return function(dispatch){
        dispatch({type: 'ADD_ASSET'})
        return fetch('https://ee55715a523f4af8bae9f5467daf644d.vfs.cloud9.us-east-2.amazonaws.com:8081/api/assets', {
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
   return function(dispatch){
    dispatch({type: 'LOADING_ASSETS'})
    return fetch('https://ee55715a523f4af8bae9f5467daf644d.vfs.cloud9.us-east-2.amazonaws.com:8081/api/assets')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'GET_ASSETS', payload: responseJson})
    })
  }
}