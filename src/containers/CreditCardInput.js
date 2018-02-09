import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCreditCard } from '../actions/cardActions';

export class CreditCardInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      provider: '',
      balance: '',
      interest_rate:'',
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
    this.props.addCreditCard(account);
    this.setState({
      provider: '',
      balance: '',
      interest_rate: '',
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
                    <label htmlFor="provider" className="col-md-4 control-label">Card Provider</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        name="provider"
                        value={this.state.provider}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="balance" className="col-md-4 control-label">Balance</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="balance"
                        value={this.state.balance}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="interest_rate" className="col-md-4 control-label">Interest Rate</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="interest_rate"
                        value={this.state.interest_rate}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add Card</button>
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

export default connect(null, { addCreditCard })(CreditCardInput);
