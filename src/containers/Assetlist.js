import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Asset from '../presentational/Asset';
import AssetInput from '../inputcontainers/AssetInput'
import Assets from './Assets'

class Assetlist extends Component {

  render() {

    const assets = this.props.assets.map((asset, index) => {
      return <Asset name={asset.name} value= {asset.value} key={index} />
    });

    return (
        <div className= "App"> 
        <Router> 
        <div>
        <ul>
          <li><Link to={`${this.props.match.url}/new`}>
              Add a New Asset
            </Link></li>
            <li><Link to={`${this.props.match.url}/getAssets`}>
             View Your Assets
            </Link></li>
          </ul>
          <div>
            <h3>Here are all of your Assets</h3>
          </div>
          <ul>
            {assets}
           </ul>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={AssetInput} />
            <Route path={`${this.props.match.url}/getAssets`} component={Assets}/>
          </Switch> 
          </div>
          </Router>
        </div>
    )
  }
};

function mapStateToProps(state){ 
  return {assets: state.assetsReducer.assets}
}

export default connect(mapStateToProps)(Assetlist);
