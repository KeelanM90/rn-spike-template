import React from 'react';
import TabNavigator from './navigation';


export default App = () => {
  const screenProps = {
    user: {
      name: 'John Doe',
      username: 'johndoe123',
      email: 'john@doe.com',
    },
  }
  return (
    <TabNavigator screenProps={screenProps}/>
  )
}
