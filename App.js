/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen 1</Text>
      </View>
    );
  }
}

class HomeScreen2 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen 2</Text>
      </View>
    );
  }
}

class HomeScreen3 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen 3</Text>
      </View>
    );
  }
}

const tabScreenConfig = {
  Home: {
    screen: HomeScreen,
  },
  Home2: {
    screen: HomeScreen2,
  },
  Home3: {
    screen: HomeScreen3,
  }
};

const TabNavigator =
  Platform.OS === "android" ? createMaterialBottomTabNavigator(tabScreenConfig)
    : createBottomTabNavigator(tabScreenConfig);

export default createAppContainer(TabNavigator);
