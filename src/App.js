import React from 'react';
import TabNavigator from './navigation';
import feature from './featureConfig';

export default App = () => {

  /**
   * Add feature specific configs here from 'featureConfig' section
   * Pass as props to children
   * TODO Do we need this if we have the module configs?
   */
  const screenProps = {
    map: {
      style: feature.staionFinder.style,
      data: feature.staionFinder.data,
    },
    factura: {
      style: feature.factura.style,
      data: feature.factura.data,
    }
  };

  return (
    <TabNavigator screenProps={screenProps}/>
  )
}
