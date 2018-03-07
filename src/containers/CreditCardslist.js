import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreditCard from '../presentational/CreditCard';
import CreditCardInput from '../inputcontainers/CreditCardInput'
import CreditCards from './CreditCards'


class CreditCardslist extends Component {


  render() { 

    const cards = this.props.cards.map((card, index) => {
      return <CreditCard provider={card.provider} balance={card.balance} interest={card.interest_rate} payments={card.Payments} key={index} />
    });

    return (
        <div className= "App"> 
        <Router> 
        <div>
        <ul>
          <li><Link to={`${this.props.match.url}/new`}>
              Add a Credit Card
            </Link></li>
            <li><Link to={`${this.props.match.url}/getCards`}>
             View Your Credit Card Info
            </Link></li>
          </ul>
          <div>
            <h3>Here are all of your Credit Cards</h3>
          </div>
          <ul>
            {cards}
          </ul>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={CreditCardInput} />
            <Route path={`${this.props.match.url}/getCards`} component={CreditCards}/>
          </Switch> 
          </div> 
          </Router>
        </div>
    )
  }
};

function mapStateToProps(state){ 
  return {cards: state.cardsReducer.cards}
}

export default connect(mapStateToProps)(CreditCardslist);
