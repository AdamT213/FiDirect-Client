import React, { Component } from 'react'; 
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import Asset from '../presentational/Asset';
import AssetInput from '../inputcontainers/AssetInput'
import Assets from './Assets'

class Assetlist extends Component {

  render() {

    const assets = this.props.assets.map((asset, index) => {
      return <Asset name={asset.name} value= {asset.value} key={index} />
    });

    return (
        <div>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={AssetInput} />
            <Route path={`${this.props.match.url}/getAssets`} component={Assets}/>
            <Route exact path={this.props.match.url} render={() => (
              <div>
              <h3>Here are all of your Assets</h3>
              <ul>
                {assets}
              </ul>
              </div>
            )}/>
          </Switch>
        </div>
    )
  }
};

function mapStateToProps(state){
  return {assets: state.assetsReducer.assets}
}

export default connect(mapStateToProps)(Assetlist);
