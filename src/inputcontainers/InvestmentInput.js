import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'; 
import { addInvestment } from '../actions/investmentActions';
import RecurringPaymentInput from './RecurringPaymentInput'

export class InvestmentInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      value: '',
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
    const investment = Object.assign({}, this.state);
    this.props.addInvestment(investment);
    this.setState({
      name: '',
      value: '',
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
                    <label htmlFor="name" className="col-md-4 control-label">Investment Name</label>
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
                    <label htmlFor="value" className="col-md-4 control-label">Value</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="value"
                        value={this.state.value}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add Investment</button>
                    </div>
                  </div>
                </form>
                <Router> 
                  <Route exact path="/recurring_payments/new" component={RecurringPaymentInput} /> 
                </Router>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addInvestment })(InvestmentInput);
