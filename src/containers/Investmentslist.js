import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import Investment from '../presentational/Investment';
import InvestmentInput from '../inputcontainers/InvestmentInput'
import Investments from './Investments'

class Investmentslist extends Component {

  render() {

    const investments = this.props.investments.map((investment, index) => {
      return <Investment name={investment.name} value= {investment.value} payments= {investment.Payments} key={index} />
    });

    return (
        <div>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={InvestmentInput} />
            <Route path={`${this.props.match.url}/getInvestments`} component={Investments}/>
            <Route exact path={this.props.match.url} render={() => (
            <div>
              <h3>Here are all of your Investments</h3>
              <ul>
                {investments}
              </ul>
              </div>
            )}/>
          </Switch>
        </div>
    )
  }
};

function mapStateToProps(state){
  return {investments: state.investmentsReducer.investments}
}

export default connect(mapStateToProps)(Investmentslist);
