import React from 'react';
import HomeScreen from '../components/HomeScreen';
import SecondScreen from '../components/SecondScreen';
import ThirdScreen from '../components/ThirdScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import NestedScreen from "../components/NestedScreen";

const TestStack = createStackNavigator({
  Home: HomeScreen,
  Nested: NestedScreen,
});

const tabScreenConfig = {
  Home: {
    screen: TestStack,        // this is an import from npm
  },
  Second: {
    screen: SecondScreen,     // this is an import from npm
  },
  Third: {
    screen: ThirdScreen,      // this is an import from npm
  },
};

const TabNavigator = Platform.OS === "android" ?
  createMaterialBottomTabNavigator(tabScreenConfig)
  : createBottomTabNavigator(tabScreenConfig);

export default createAppContainer(TabNavigator);
