import fetch from 'isomorphic-fetch'

export function addAsset(asset){
    var data = {name: asset.name, value: asset.value};
    return function(dispatch){
        dispatch({type: 'ADD_ASSET'})
        return fetch('/api/assets', {
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
