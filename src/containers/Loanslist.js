import React, { Component } from 'react'; 
import Loan from '../presentational/Loan';

export class Loanslist extends Component {

  render() {

    const loans = this.props.store.getState().loans.map((loan, index) => {
      return <Loan name={loan.name} balance= {loan.remaining_balance} interest= {loan.interest_rate} payments= {loan.Payments} key={index} />
    });

    return (
        <ul> 
         {loans} 
        </ul>
    )
  }
};