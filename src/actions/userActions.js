import fetch from 'isomorphic-fetch'

export function signUpUser(user){
    var data = {email: user.email, password: user.password, password_confirmation: user.password};
    return function(dispatch){
        dispatch({type: 'SIGN_UP_USER'})
        return fetch('https://ee55715a523f4af8bae9f5467daf644d.vfs.cloud9.us-east-2.amazonaws.com:8081/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: data}),
        }).then(res => console.log(res))
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }
}

export function signInUser(user){
    var data = {email: user.email, password: user.password, remember_me: user.id};
    return function(dispatch){
        dispatch({type: 'SIGN_IN_USER', payload: user})
        return fetch('/api/users/sign_in', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: data}),
        }).then(res => console.log(res))
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }
}
