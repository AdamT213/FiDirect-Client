import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import UserSignUpForm from './inputcontainers/UserSignUpForm' 
import UserSignInForm from './inputcontainers/UserSignInForm' 
import BankInput from './inputcontainers/BankInput' 
import AssetInput from './inputcontainers/AssetInput'
import CreditCardInput from './inputcontainers/CreditCardInput'
import InvestmentInput from './inputcontainers/InvestmentInput'
import LoanInput from './inputcontainers/LoanInput' 
import RecurringPaymentInput from './inputcontainers/RecurringPaymentInput' 


class App extends Component {
  render() { 
    if (this.state.user_id === null) { 
      return (
        <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FiDirect</h1> 
          <UserSignUpForm/>
          <UserSignInForm/> 
          </header>
        </div>
      );
    } 
    else { 
      return (
        <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FiDirect</h1> 
          </header>
        </div>
      );
   }
}

export default App;
