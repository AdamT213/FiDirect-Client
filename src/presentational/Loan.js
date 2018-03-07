import React, { Component } from 'react'; 
import { connect } from 'react-redux'

class Loan extends Component {  
    

  render() {
  
  const Payments = this.props.recurring_payments.map((payment) => 
        (<div> <li>Source: {payment.source}</li><br /> <li>Status: {payment.status === false ? 'Outgoing' : 'Incoming'}</li><br /> 
        <li>Next Pay: {payment.pay_date}</li><br />
        <li>Amount: {payment.pay_amount}</li><br /> <li>Duration: {payment.duration}</li><br /></div>))
        
    return( 
    <div className= "App">
      <li>Name: {this.props.name}</li> 
      <li>Remaining Balance: {this.props.remaining_balance}</li>  
      <li>Interest Rate: {this.props.interest_rate}</li>
      <div>{Payments}</div>
     </div>
    );
  }
}; 

function mapStateToProps(state){ 
  return {recurring_payments: state.loansReducer.loans.recurring_payments}
}

export default connect(mapStateToProps)(Loan);
