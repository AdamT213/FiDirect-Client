import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom';
import Asset from '../presentational/Asset'; 
import AssetInput from '../inputcontainers/AssetInput' 
import Assets from './Assets'

export class Assetlist extends Component {

  render() {

    const assets = this.props.store.getState().assets.map((asset, index) => {
      return <Asset name={asset.name} value= {asset.value} key={index} />
    });

    return ( 
        <div>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={AssetInput} />
            <Route path={`${this.props.match.url}/getAssets`} component={Assets}/>
            <Route exact path={this.props.match.url} render={() => (
              <h3>Here are all of your Assets</h3>
            )}/> 
          </Switch>
          <ul> 
            {assets} 
          </ul> 
        </div>
    )
  }
};
