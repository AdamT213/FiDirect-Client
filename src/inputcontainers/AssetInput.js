import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAsset } from '../actions/assetActions';

export class AssetInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      value: '', 
      user_id: '',
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
      user_id: this.props.user_id
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const asset = Object.assign({}, this.state);
    this.props.addAsset(asset);
    this.setState({
      name: '',
      value: '', 
      user_id: '',
    });
  }

  render() {
    return ( 
      <div className= "App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="col-md-4 control-label">Asset Name</label>
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
                      <button type="submit" className="btn btn-default">Add Asset</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> 
      </div>
    );
  }
} 


function mapStateToProps(state){ 
  return {user_id: state.usersReducer.user_id}
}

export default connect(mapStateToProps, { addAsset })(AssetInput);
