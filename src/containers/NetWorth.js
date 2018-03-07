import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculateNetWorth } from '../actions/networthActions';

class NetWorth extends Component {

  componentDidMount() {
    this.props.calculateNetWorth();
  }

  render() {
    return ( 
      <div className= "App">
      <h2>Your current net worth is ${this.props.networth}</h2><br />
      <h2> To see an updated net worth, find your financial info, or add some!</h2> 
      </div>
    )
  }
};


const mapStateToProps = state => { 
  return {
    networth: state.networthReducer.networth
  };
}

export default connect(mapStateToProps, { calculateNetWorth })(NetWorth);
