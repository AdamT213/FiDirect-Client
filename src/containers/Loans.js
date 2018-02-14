import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLoans } from '../actions/loanActions';


export class Loans extends Component { 
    constructor(props) {
    super(props) 
    }
    
    handleOnClick = event => {
        event.preventDefault();
        this.props.getLoans();
    }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Loans</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4"> 
            <button
            className="get"
            name="loans"
            onClick={this.handleOnClick}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getLoans })(Loans);