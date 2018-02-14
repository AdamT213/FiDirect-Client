import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCards } from '../actions/cardActions';


export class Cards extends Component { 
    constructor(props) {
    super(props) 
    }
    
    handleOnClick = event => {
        event.preventDefault();
        this.props.getCards();
    }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Credit Cards</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4"> 
            <button
            className="get"
            name="cards"
            onClick={this.handleOnClick}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getCards })(Cards);