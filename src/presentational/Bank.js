import React, { Component } from 'react'; 

class Bank extends Component {  
    

  render() {
  
  const Payments = this.props.recurring_payments.map((payment) => 
        (<div> <li>Source: {payment.source}</li> <li>Status: {payment.status === false ? 'Outgoing' : 'Incoming'}</li> <li>Next Pay: {payment.pay_date}</li> 
        <li>Amount: {payment.pay_amount}</li> <li>Duration: {payment.duration}</li></div>))
        
    return( 
    <div>
      <li>Name: {this.props.name}</li> 
      <li>Balance: {this.props.value}</li>  
      <div>{Payments}</div>
     </div>
    );
  }
};

export default Bank;