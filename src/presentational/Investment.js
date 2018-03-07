import React, { Component } from 'react'; 

class Investment extends Component {  
    

  render() {
        
    return( 
    <div className= "App">
      <li>Name: {this.props.name}</li> 
      <li>Value: {this.props.value}</li>  
     </div>
    );
  }
}; 

export default Investment;
