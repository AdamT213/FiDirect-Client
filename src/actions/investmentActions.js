import fetch from 'isomorphic-fetch'

export function addInvestment(investment){
    var data = {name: investment.name, value: investment.value};
    return function(dispatch){
        dispatch({type: 'ADD_INVESTMENT'})
        return fetch('https://ee55715a523f4af8bae9f5467daf644d.vfs.cloud9.us-east-2.amazonaws.com:8081/api/investments', {
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