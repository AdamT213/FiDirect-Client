import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom';
import CreditCard from '../presentational/CreditCard';
import CreditCardInput from '../inputcontainers/CreditCardInput' 
import CreditCards from './CreditCards'

export class CreditCardslist extends Component {

  render() {

    const cards = this.props.store.getState().cards.map((card, index) => {
      return <CreditCard provider={card.provider} balance= {card.balance} interest= {card.interest_rate} payments= {card.Payments} key={index} />
    });

    return (
        <div>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={CreditCardInput} />
            <Route path={`${this.props.match.url}/getBanks`} component={CreditCards}/>
            <Route exact path={this.props.match.url} render={() => (
              <h3>Here are all of your Credit Cards</h3>
            )}/> 
          </Switch>
          <ul> 
            {cards} 
          </ul> 
        </div>
    )
  }
};