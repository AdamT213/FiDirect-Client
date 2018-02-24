import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom';
import Loan from '../presentational/Loan';
import LoanInput from '../inputcontainers/LoanInput'
import Loans from './Loans'

class Loanslist extends Component {

  render() {

    const loans = this.props.loans.map((loan, index) => {
      return <Loan name={loan.name} balance= {loan.remaining_balance} interest= {loan.interest_rate} payments= {loan.Payments} key={index} />
    });

    return (
        <div>
        <ul>
          <li><Link to={`${this.props.match.url}/new`}>
              Add a Loan
            </Link></li>
            <li><Link to={`${this.props.match.url}/getInvestments`}>
             View Your Loan Info
            </Link></li>
          </ul>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={LoanInput} />
            <Route path={`${this.props.match.url}/getInvestments`} component={Loans}/>
            <Route exact path={this.props.match.url} render={() => (
            <div>
              <h3>Here are all of your Loans</h3>
              <ul>
                {loans}
              </ul>
              </div>
            )}/>
          </Switch>
        </div>
    )
  }
};

function mapStateToProps(state){
  return {loans: state.loansReducer.loans}
}

export default connect(mapStateToProps)(Loanslist);
