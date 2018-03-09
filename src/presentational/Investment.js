import React, { Component } from 'react';  
import { connect } from 'react-redux'
import { updateCounter } from '../actions/investmentActions';

class Investment extends Component {  
  debugger;
  
  handleClick = () =>  { 
    let investment = this.props.investments.filter((investment => 
    investment.id === this.props.id));
    this.props.updateCounter(investment);
  }


  render() {    
    return( 
    <div className= "App">
      <li>Name: {this.props.name}</li>  
      <button className= "counter" onClick= {this.handleClick}>
      Like!</button> 
      <div>{this.props.likes}</div>
      <li>Value: ${this.props.value}</li>  
     </div>
    );
  }
};  

function mapStateToProps(state){ 
  return {investments: state.investmentsReducer.investments}
}

export default connect(mapStateToProps, { updateCounter })(Investment);
