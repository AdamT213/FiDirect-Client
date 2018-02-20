import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import CreditCard from '../presentational/CreditCard';
import CreditCardInput from '../inputcontainers/CreditCardInput'
import CreditCards from './CreditCards'


class CreditCardslist extends Component {


  render() {

    const cards = this.props.cards.map((card, index) => {
      return <CreditCard provider={card.provider} balance= {card.balance} interest= {card.interest_rate} payments= {card.Payments} key={index} />
    });

    return (
        <div>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={CreditCardInput} />
            <Route path={`${this.props.match.url}/getCards`} component={CreditCards}/>
            <Route exact path={this.props.match.url} render={() => (
              <div>
              <h3>Here are all of your Credit Cards</h3>
              <ul>
                {cards}
              </ul>
              </div>
            )}/>
          </Switch>
        </div>
    )
  }
};

function mapStateToProps(state){
  return {cards: state.cardsReducer.cards}
}

export default connect(mapStateToProps)(CreditCardslist);
