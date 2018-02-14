import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom';
import Investment from '../presentational/Investment';
import InvestmentInput from '../inputcontainers/InvestmentInput' 
import Investments from './Investments'

export class Investmentslist extends Component {

  render() {

    const investments = this.props.store.getState().investments.map((investment, index) => {
      return <Investment name={investment.name} value= {investment.value} payments= {investment.Payments} key={index} />
    });

    return (
        <div>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={InvestmentInput} />
            <Route path={`${this.props.match.url}/getInvestments`} component={Investments}/>
            <Route exact path={this.props.match.url} render={() => (
              <h3>Here are all of your Investments</h3>
            )}/> 
          </Switch>
          <ul> 
            {investments} 
          </ul> 
        </div>
    )
  }
};