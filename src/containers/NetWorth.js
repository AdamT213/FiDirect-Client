import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { calculateNetWorth } from '../actions/networthActions'; 
import { getAssets } from '../actions/assetActions'
import { getBanks } from '../actions/bankActions'
import { getCards } from '../actions/cardActions' 
import { getInvestments } from '../actions/investmentActions'
import { getLoans } from '../actions/loanActions'

class NetWorth extends Component {

  componentDidMount() {
    this.props.getAssets();
    this.props.getBanks(); 
    this.props.getCards(); 
    this.props.getInvestments(); 
    this.props.getLoans();
    this.props.calculateNetWorth();
  } 
  
  render() {
    return (
      <div>
        <h2>Your current net worth is: {this.props.calculateNetWorth()}</h2>
      </div>
    )
  }
}; 

const mapStateToProps = state => {
  return {
    networth: state.networth,
    assets: state.assets,
    banks: state.banks,
    cards: state.cards, 
    investments: state.investments, 
    loans: state.loans,
  };
} 

export default connect(mapStateToProps, { calculateNetWorth }, { getAssets }, { getBanks }, { getCards }, { getInvestments }, { getLoans })(NetWorth);