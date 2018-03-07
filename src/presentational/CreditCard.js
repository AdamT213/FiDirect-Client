import React, { Component } from 'react'; 
import { connect } from 'react-redux'

class CreditCard extends Component {  
    

  render() { 
    debugger; 
    if (this.props.recurring_payments != undefined) { 
      let Payments = this.props.recurring_payments.map((payment) => 
            (<div> <li>Source: {payment.source}</li><br /> <li>Status: {payment.status === false ? 'Outgoing' : 'Incoming'}</li><br /> 
            <li>Next Pay: {payment.pay_date}</li><br />
            <li>Amount: {payment.pay_amount}</li><br /> <li>Duration: {payment.duration}</li><br /></div>)) 
    } else { 
      let Payments = []
    }
  
        
    return( 
    <div className= "App">
      <li>Name: {this.props.provider}</li> 
      <li>Balance: {this.props.balance}</li>  
      <li>Interest Rate: {this.props.interest_rate}</li>
       {/* <div>{Payments}</div>  */}
     </div>
    );
  }
}; 

function mapStateToProps(state){ 
  return {recurring_payments: state.cardsReducer.cards.recurring_payments}
}

export default connect(mapStateToProps)(CreditCard);