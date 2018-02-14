import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAssets } from '../actions/assetActions';


export class Quotes extends Component { 
    constructor(props) {
    super(props) 
    }
    
    handleOnClick = event => {
        event.preventDefault();
        this.props.getAssets();
    }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Assets</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4"> 
            <button
            className="get"
            name="assets"
            onClick={this.handleOnClick}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getAssets })(Assets);