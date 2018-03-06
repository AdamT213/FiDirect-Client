import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInvestments } from '../actions/investmentActions';


export class Investments extends Component { 
    constructor(props) {
    super(props) 
    }
    
    handleOnClick = event => {
        event.preventDefault();
        this.props.getInvestments();
    }

  render() {
    return (
      <div className= "App">
        <hr />
        <div className="row justify-content-center">
          <h2>Investments</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4"> 
            <button
            className="get"
            name="cards"
            onClick={this.handleOnClick}
            >See Your Investments</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getInvestments })(Investments);