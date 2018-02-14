import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom';
import Bank from '../presentational/Bank'; 
import BankInput from '../inputcontainers/BankInput' 
import Banks from './Banks'

export class Bankslist extends Component {

  render() {

    const banks = this.props.store.getState().banks.map((account, index) => {
      return <Bank name={account.name} balance= {account.balance} payments= {account.Payments} key={index} />
    });

    return (
        <div>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={BankInput} />
            <Route path={`${this.props.match.url}/getBanks`} component={Banks}/>
            <Route exact path={this.props.match.url} render={() => (
              <h3>Here are all of your Bank Accounts</h3>
            )}/> 
          </Switch>
          <ul> 
            {banks} 
          </ul> 
        </div>
    )
  }
};