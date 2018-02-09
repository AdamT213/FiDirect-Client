import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import UserSignUpForm from './containers/UserSignUpForm' 
import UserSignInForm from './containers/UserSignInForm' 
import BankInput from './containers/BankInput' 


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> 
          <UserSignUpForm/>
          <UserSignInForm/> 
          <BankInput />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
