import fetch from 'isomorphic-fetch' 

export function signUpUser(){ 
    var data = {email: this.props.email, password: this.props.password};
    return function(dispatch){
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
        return fetch('http://localhost:3000/users/sign_in', {
        method: 'POST', 
        body: JSON.stringify(data), 
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    } 
} 