import React, { Component } from 'react'; 
import Bank from '../presentational/Bank';

export class Bankslist extends Component {

  render() {

    const banks = this.props.store.getState().banks.map((account, index) => {
      return <Bank name={account.name} balance= {account.balance} payments= {account.Payments} key={index} />
    });

    return (
        <ul> 
         {banks} 
        </ul>
    )
  }
};