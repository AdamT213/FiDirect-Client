import React, { Component } from 'react';

class Asset extends Component {

  render() {
    return( 
    <div>
      <li>Name: {this.props.name}</li> 
      <li>Value: {this.props.value}</li>  
     </div>
    );
  }
};

export default Asset;