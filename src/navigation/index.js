import React from 'react';
import HomeScreen from '../components/HomeScreen';
import SecondScreen from '../components/SecondScreen';
import ThirdScreen from '../components/ThirdScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';


const TestStack = createStackNavigator({
  Home: HomeScreen,
  Second: SecondScreen,
});

const tabScreenConfig = {
  Home: {
    screen: TestStack,
  },
  Second: {
    screen: SecondScreen,
  },
  Third: {
    screen: ThirdScreen,
  },

};

const TabNavigator = Platform.OS === "android" ?
  createMaterialBottomTabNavigator(tabScreenConfig)
  : createBottomTabNavigator(tabScreenConfig);

export default createAppContainer(TabNavigator);