import React, { Component } from 'react'; 
import Investment from '../presentational/Investment';

export class Investmentslist extends Component {

  render() {

    const investments = this.props.store.getState().investments.map((investment, index) => {
      return <Investment name={investment.name} value= {investment.value} payments= {investment.Payments} key={index} />
    });

    return (
        <ul> 
         {investments} 
        </ul>
    )
  }
};