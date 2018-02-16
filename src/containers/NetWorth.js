import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { calculateNetWorth } from '../actions/networthActions'; 

class NetWorth extends Component {

  componentDidMount() {
    this.props.calculateNetWorth();
  } 
  
  render() {
    return (
      <div>
        <h2>Your current net worth is ${this.props.calculateNetWorth()}</h2>
      </div>
    )
  }
}; 

const mapStateToProps = state => {
  return {
    networth: state.networth
  };
} 

export default connect(mapStateToProps, { calculateNetWorth })(NetWorth);