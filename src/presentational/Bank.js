import React, { Component } from 'react'; 

class Bank extends Component {  
    

  render() {
  
        
    return( 
    <div className= "App">
      <li>Name: {this.props.name}</li> 
      <li>Balance: {this.props.balance}</li>  
     </div>
    );
  }
};

export default Bank;
