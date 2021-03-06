import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Investment from '../presentational/Investment';
import InvestmentInput from '../inputcontainers/InvestmentInput'
import Investments from './Investments'

class Investmentslist extends Component {

  render() {
    const investments = this.props.investments.map((investment, index) => {
      return <Investment name={investment.name} value={investment.value} payments={investment.Payments} likes={investment.likes} id= {investment.id} key={index} />
    });

    return (
        <div className= "App"> 
        <Router> 
        <div>
        <ul>
          <li><Link to={`${this.props.match.url}/new`}>
              Add an Investment
            </Link></li>
            <li><Link to={`${this.props.match.url}/getInvestments`}>
             View Your Investment Info
            </Link></li>
          </ul>
          <div>
            <h3>Here are all of your Investments</h3>
          </div>
          <ul>
            {investments}
          </ul>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={InvestmentInput} />
            <Route path={`${this.props.match.url}/getInvestments`} component={Investments}/>
          </Switch> 
          </div> 
          </Router>
        </div>
    )
  }
};

function mapStateToProps(state){
  return {investments: state.investmentsReducer.investments}
}

export default connect(mapStateToProps)(Investmentslist);
