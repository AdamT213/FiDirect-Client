import fetch from 'isomorphic-fetch' 

export function signUpUser(user){ 
    var data = {email: user.email, password: user.password};
    return function(dispatch){
        dispatch({type: 'SIGN_UP_USER'})
        return fetch('http://localhost:3000/users/sign_up', {
        method: 'POST', 
        body: JSON.stringify(data), 
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    } 
} 

export function signInUser(){ 
    var data = {email: this.props.email, password: this.props.password};
    return function(dispatch){ 
        dispatch({type: 'SIGN_IN_USER'})
        return fetch('http://localhost:3000/users/sign_in', {
        method: 'POST', 
        body: JSON.stringify(data), 
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    } 
} 