import React, { Component } from 'react'; 

class Loan extends Component {  
    

  render() {
        
    return( 
    <div className= "App">
      <li>Name: {this.props.name}</li> 
      <li>Remaining Balance: {this.props.remaining_balance}</li>  
      <li>Interest Rate: {this.props.interest_rate}</li>
     </div>
    );
  }
}; 

export default Loan;
