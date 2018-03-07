import React, { Component } from 'react'; 

class Investment extends Component {  
    

  render() {
  
  const Payments = this.props.recurring_payments.map((payment) => 
        (<div> <li>Source: {payment.source}</li><br /> <li>Status: {payment.status === false ? 'Outgoing' : 'Incoming'}</li><br /> 
        <li>Next Pay: {payment.pay_date}</li><br />
        <li>Amount: {payment.pay_amount}</li><br /> <li>Duration: {payment.duration}</li><br /></div>))
        
    return( 
    <div className= "App">
      <li>Name: {this.props.name}</li> 
      <li>Value: {this.props.value}</li>  
      <div>{Payments}</div>
     </div>
    );
  }
}; 

function mapStateToProps(state){ 
  return {recurring_payments: state.investmentsReducer.investments.recurring_payments}
}

export default connect(mapStateToProps)(Investment);
