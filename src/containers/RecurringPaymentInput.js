import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecurringPayment } from '../actions/paymentActions';

export class RecurringPaymentInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      source: '',
      status: '',
      pay_date: '',
      payment_frequency: '',
      pay_amount: '',
      duration: '',
      parent_resource: '',
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const account = Object.assign({}, this.state);
    this.props.addRecurringPayment(payment);
    this.setState({
      source: '',
      status: '',
      pay_date: '',
      payment_frequency: '',
      pay_amount: '',
      duration: '',
      parent_resource: '',
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="source" className="col-md-4 control-label">Payment Source</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        name="source"
                        value={this.state.source}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="status" className="col-md-4 control-label">Status(Incoming(1)/Outgoing(0))</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="status"
                        value={this.state.status}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="payment_frequency" className="col-md-4 control-label">Payment Frequency(Days)</label>
                    <div className="col-md-5"
                      <input
                        className="form-control"
                        type="text"
                        name="payment_frequency"
                        value={this.state.payment_frequency}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="pay_date" className="col-md-4 control-label">Next Payment Expected</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="pay_date"
                        value={this.state.pay_date}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="pay_amount" className="col-md-4 control-label">Amount</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="pay_amount"
                        value={this.state.pay_amount}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="duration" className="col-md-4 control-label">Duration of Payments</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="duration"
                        value={this.state.duration}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add Recurring Payment</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addRecurringPayment })(RecurringPaymentInput());
