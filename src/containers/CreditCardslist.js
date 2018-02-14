import React, { Component } from 'react'; 
import CreditCard from '../presentational/CreditCard';

export class CreditCardslist extends Component {

  render() {

    const cards = this.props.store.getState().cards.map((card, index) => {
      return <CreditCard provider={card.provider} balance= {card.balance} interest= {card.interest_rate} payments= {card.Payments} key={index} />
    });

    return (
        <ul> 
         {cards} 
        </ul>
    )
  }
};