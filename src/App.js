import React from 'react';
import TabNavigator from './navigation';
import feature from './featureConfig';

export default App = () => {

  /**
   * Add feature specific configs here from 'featureConfig' section
   * Pass as props to children
   */
  const screenProps = {
    map: feature.staionFinder,
    factura: feature.factura,
  };

  return (
    <TabNavigator screenProps={screenProps}/>
  )
}
