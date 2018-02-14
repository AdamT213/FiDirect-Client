import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';  
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'; 
import NavBar from './containers/NavBar'; 
import NetWorth from './containers/NetWorth'
import UserSignUpForm from './inputcontainers/UserSignUpForm' 
import UserSignInForm from './inputcontainers/UserSignInForm' 
import BankInput from './inputcontainers/BankInput' 
import CreditCardInput from './inputcontainers/CreditCardInput'
import InvestmentInput from './inputcontainers/InvestmentInput'
import LoanInput from './inputcontainers/LoanInput' 
import RecurringPaymentInput from './inputcontainers/RecurringPaymentInput' 
import Assets from './containers/Assets'
import Assetlist from './containers/Assetlist'
import Banks from './containers/Banks'
import Bankslist from './containers/Bankslist'
import CreditCards from './containers/CreditCards'
import CreditCardslist from './containers/CreditCardslist'
import Investments from './containers/Investments'
import Investmentslist from './containers/Investmentslist'
import Loans from './containers/Loans'
import Loanslist from './containers/Loanslist'

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
          <Router>
            <NavBar />
              <Route exact path="/" component={NetWorth} />
              <Route exact path="/assets" component={Assetlist} />
              <Route exact path="/bank_accounts" component={Bankslist} />
              <Route exact path="/credit_cards" component={CreditCardslist} /> 
              <Route exact path="/investments" component={Investmentslist} /> 
              <Route exact path="/loans" component={Loanslist} />
          </Router>
          </header>
        </div>
      );
   }
 } 
}

export default App;
