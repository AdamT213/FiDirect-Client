import React, { Component } from 'react'; 
import Asset from '../presentational/Asset';

export class Assetlist extends Component {

  render() {

    const assets = this.props.store.getState().assets.map((asset, index) => {
      return <Asset name={asset.name} value= {asset.value} key={index} />
    });

    return (
        <ul> 
         {assets} 
        </ul>
    )
  }
};
