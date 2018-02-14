import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBanks } from '../actions/bankActions';


export class Banks extends Component { 
    constructor(props) {
    super(props) 
    }
    
    handleOnClick = event => {
        event.preventDefault();
        this.props.getBanks();
    }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Bank Accounts</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4"> 
            <button
            className="get"
            name="banks"
            onClick={this.handleOnClick}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getBanks })(Banks);