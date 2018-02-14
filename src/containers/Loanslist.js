import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom';
import Loan from '../presentational/Loan';
import LoanInput from '../inputcontainers/LoanInput' 
import Loans from './Loans'

export class Loanslist extends Component {

  render() {

    const loans = this.props.store.getState().loans.map((loan, index) => {
      return <Loan name={loan.name} balance= {loan.remaining_balance} interest= {loan.interest_rate} payments= {loan.Payments} key={index} />
    });

    return (
        <div>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={LoanInput} />
            <Route path={`${this.props.match.url}/getInvestments`} component={Loans}/>
            <Route exact path={this.props.match.url} render={() => (
              <h3>Here are all of your Loans</h3>
            )}/> 
          </Switch>
          <ul> 
            {loans} 
          </ul> 
        </div>
    )
  }
};