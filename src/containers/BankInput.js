import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBankAccount } from '../actions/bankActions';

export class BankInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      balance: '',
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
    this.props.addBankAccount(account);
    this.setState({
      name: '',
      balance: '',
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
                    <label htmlFor="name" className="col-md-4 control-label">Account Name</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        name="name"
                        value={this.state.name}
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
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Sign Up</button>
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

export default connect(null, { addBankAccount })(BankInput());
