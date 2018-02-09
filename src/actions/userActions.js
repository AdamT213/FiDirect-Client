import fetch from 'isomorphic-fetch'

export function signUpUser(user){ 
    var data = {email: user.email, password: user.password};
    return function(dispatch){
        dispatch({type: 'SIGN_UP_USER'})
        return fetch('/api/users', {
        method: 'POST', 
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data),
        }).then(res => console.log(res))
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }
}

export function signInUser(user){
    var data = {email: user.email, password: user.password};
    return function(dispatch){
        dispatch({type: 'SIGN_IN_USER', payload: user})
        return fetch('/api/users/sign_in', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data),
        }).then(res => console.log(res))
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }
}
