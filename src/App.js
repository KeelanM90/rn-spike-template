import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import tabScreenConfig from './navigation/';

const TabNavigator = Platform.OS === "android" ?
  createMaterialBottomTabNavigator(tabScreenConfig)
  : createBottomTabNavigator(tabScreenConfig);

export default createAppContainer(TabNavigator);
