import React from 'react';
import {Platform} from 'react-native';

// import HomeScreen from '../components/HomeScreen';
// import NestedScreen from "../components/NestedScreen";
import SecondScreen from '../components/SecondScreen';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';

import Ionicons from 'react-native-ionicons';
import Colors from '../assets/Colors';
import CONSTANTS from '../../config';
import FEATURE_CONFIG from '../featureConfig';

// const FacturaModule = {
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: ({navigation}) => ({
//       title: FEATURE_CONFIG.factura.name,
//       headerStyle: {
//         backgroundColor: Colors[CONSTANTS.ENV].darkColor
//       },
//       headerTitleStyle: {},
//       headerBackTitleStyle: {},
//       headerTintColor: Colors[CONSTANTS.ENV].white,
//     }),
//   },
//   Nested: NestedScreen,
// };

/**
 * CUSTOM MODULES ADDED BELOW
 * ==========================
 * The Factura Module. This is pulled in from npm, as will all modules
 */
import Factura from 'rn-feature-spike';
const FacturaModule = Factura;

/**
 * This is a stack navigator for Facturas
 * All features that need their own navigation manager must be added this way
 */
const facturaStackNavigator = createStackNavigator(FacturaModule);

/**
 * This is the Tab Navigator for the global bottom navigation
 * It defines the tab items that will be added as features
 * Add all custom modules here
 */
const tabItemsConfig = {
  Home: {
    screen: facturaStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name={FEATURE_CONFIG.factura.tabBarIcon}
                    color={Colors[CONSTANTS.ENV].darkColor}/>
        );
      },
      tabBarColor: Colors[CONSTANTS.ENV].white,
      tabBarLabel: FEATURE_CONFIG.factura.name,
      activeColor: Colors[CONSTANTS.ENV].darkColor,
    }
  },
  Second: {
    screen: SecondScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name={FEATURE_CONFIG.staionFinder.tabBarIcon}
                         color={Colors[CONSTANTS.ENV].darkColor}/>;
      },
      tabBarColor: Colors[CONSTANTS.ENV].white,
      tabBarLabel: FEATURE_CONFIG.staionFinder.name,
      activeColor: Colors[CONSTANTS.ENV].darkColor,
    }
  }
};

const tabMaterialOptions = {
  activeColor: Colors[CONSTANTS.ENV].white,
  shifting: true,
};
const tabIosOptions = {
  tabBarOptions: {
    style: {
      paddingTop: 4
    },
    activeTintColor: Colors[CONSTANTS.ENV].darkColor
  },
  activeColor: Colors[CONSTANTS.ENV].white,
};

const TabNavigator = Platform.OS === "android"
  ? createMaterialBottomTabNavigator(tabItemsConfig, tabMaterialOptions)
  : createBottomTabNavigator(tabItemsConfig, tabIosOptions);

export default createAppContainer(TabNavigator);
