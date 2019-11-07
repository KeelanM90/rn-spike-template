import React from 'react';
import TabNavigator from './navigation';

export default App = () => {

  // Add custom config for features here????
  const screenProps = {
    test: {
      data: 'This string is passed from app.js config!',
    },
    map: {},
    payback: {},
    factura: {},
  };

  return (
    <TabNavigator screenProps={ screenProps } />
  )
}
