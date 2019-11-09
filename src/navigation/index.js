import React from 'react';
import {Platform} from 'react-native';
// import HomeScreen from '../components/HomeScreen';
import SecondScreen from '../components/SecondScreen';
// import NestedScreen from "../components/NestedScreen";
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-ionicons';
import Colors from '../constants/Colors';

/**
 * CUSTOM MODULES ADDED BELOW
 * ==========================
 * The Factura Module. This is pulled in from npm, as will all modules
 */
// const FacturaModule = {
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: ({navigation}) => ({
//       title: 'Factura',
//       headerStyle: {
//         backgroundColor: Colors.bp.darkColor
//       },
//       headerTitleStyle: {},
//       headerBackTitleStyle: {},
//       headerTintColor: Colors.bp.white,
//     }),
//   },
//   Nested: NestedScreen,
// };



import Factura from 'rn-feature-spike';

const FacturaModule = Factura;

console.log('***********************');
console.log(JSON.stringify(Factura));
console.log('***********************');

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
          <Ionicons name="navigate" color={Colors.bp.darkColor}/>
        );
      },
      tabBarColor: Colors.bp.white,
      tabBarLabel: 'Factura',
      activeColor: Colors.bp.darkColor,
    }
  },
  Second: {
    screen: SecondScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="person" color={Colors.bp.darkColor}/>;
      },
      tabBarColor: Colors.bp.white,
      tabBarLabel: 'Station Finder',
      activeColor: Colors.bp.darkColor,
    }
  }
};


/**
 * GLOBAL OPTIONS BELOW
 * ====================
 * Global Tab Options for Android Material
 */
const tabMaterialOptions = {
  activeColor: Colors.bp.white,
  shifting: true,
};
/**
 * Global Tab Options for iOS
 */
const tabIosOptions = {
  tabBarOptions: {
    style: {
      paddingTop: 4
    },
    activeTintColor: Colors.bp.darkColor
  },
  activeColor: Colors.bp.white,
};

const TabNavigator = Platform.OS === "android"
  ? createMaterialBottomTabNavigator(tabItemsConfig, tabMaterialOptions)
  : createBottomTabNavigator(tabItemsConfig, tabIosOptions);

export default createAppContainer(TabNavigator);
