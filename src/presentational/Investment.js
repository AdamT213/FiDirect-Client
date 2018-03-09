import React, { Component } from 'react';  
import { connect } from 'react-redux'

class Investment extends Component {  
  // constructor(props) {
  //   super(props)
  //   this.state = { 
  //     counter: 0, 
  //   } 
  
  // }


  handleClick = () =>  { 
    this.props.updateCounter();
  }


  render() {
        
    return( 
    <div className= "App">
      <li>Name: {this.props.name}</li>  
      <button className= "counter" onClick= {this.handleClick}>
      Like!</button> 
      <div>{this.props.likes}</div>
      <li>Value: ${this.props.value}</li>  
     </div>
    );
  }
}; 

export default connect(null, { updateCounter })(Investment);
