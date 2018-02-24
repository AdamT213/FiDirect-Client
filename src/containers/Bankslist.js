import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom';
import Bank from '../presentational/Bank';
import BankInput from '../inputcontainers/BankInput'
import Banks from './Banks'

class Bankslist extends Component {

  render() {

    const banks = this.props.banks.map((account, index) => {
      return <Bank name={account.name} balance= {account.balance} payments= {account.Payments} key={index} />
    });

    return (
        <div>
        <ul>
          <li><Link to={`${this.props.match.url}/new`}>
              Add a New Bank Account
            </Link></li>
            <li><Link to={`${this.props.match.url}/getBanks`}>
             View Your Bank Account Info
            </Link></li>
          </ul>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={BankInput} />
            <Route path={`${this.props.match.url}/getBanks`} component={Banks}/>
            <Route exact path={this.props.match.url} render={() => (
              <div>
              <h3>Here are all of your Bank Accounts</h3>
              <ul>
                {banks}
              </ul>
              </div>
            )}/>
          </Switch>
        </div>
    )
  }
};

function mapStateToProps(state){
  return {banks: state.banksReducer.banks}
}

export default connect(mapStateToProps)(Bankslist);
