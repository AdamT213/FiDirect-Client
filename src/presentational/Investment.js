import React, { Component } from 'react'; 

class Investment extends Component {  
  constructor(props) {
    super(props)
    this.state = { 
      counter: 0, 
    } 
  
  }


  handleClick = () =>  { 
   
    this.setState({ 
      counter: this.state.counter + 1
    })
}


  render() {
        
    return( 
    <div className= "App">
      <li>Name: {this.props.name}</li>  
      <button className= "counter" onClick= {this.handleClick}>
      Like!</button> 
      <div>{this.state.counter}</div>
      <li>Value: ${this.props.value}</li>  
     </div>
    );
  }
}; 

export default Investment;
