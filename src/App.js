import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';  
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';  
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/userActions.js'
import NavBar from './containers/NavBar'; 
import NetWorth from './containers/NetWorth'
import UserSignUpForm from './inputcontainers/UserSignUpForm' 
import UserSignInForm from './inputcontainers/UserSignInForm' 
import {Assetlist} from './containers/Assetlist'
import {Bankslist} from './containers/Bankslist'
import {CreditCardslist} from './containers/CreditCardslist'
import {Investmentslist} from './containers/Investmentslist'
import {Loanslist} from './containers/Loanslist'

class App extends Component {
  render() { 
    if (this.props.user_id === null) { 
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
            <div>
              <NavBar /> 
                <Route exact path="/" component={NetWorth} />
                <Route exact path="/assets" component={Assetlist} />
                <Route exact path="/bank_accounts" component={Bankslist} />
                <Route exact path="/credit_cards" component={CreditCardslist} /> 
                <Route exact path="/investments" component={Investmentslist} /> 
                <Route exact path="/loans" component={Loanslist} /> 
              </div>
          </Router>
          </header>
        </div>
      );
   }
 } 
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}
 
function mapStateToProps(state){
  return {user_id: state.user_id}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
