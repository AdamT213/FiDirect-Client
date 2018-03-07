import React, { Component } from 'react'; 

class CreditCard extends Component {  
    

  render() { 
    
      return( 
      <div className= "App">
        <li>Name: {this.props.provider}</li> 
        <li>Balance: ${this.props.balance}</li>  
        <li>Interest Rate: {this.props.interest}</li> 
      </div>
      ); 
    }
  }

export default CreditCard;