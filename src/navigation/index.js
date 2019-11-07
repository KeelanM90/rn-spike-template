import HomeScreen from '../components/HomeScreen';
import SecondScreen from '../components/SecondScreen';
import ThirdScreen from '../components/ThirdScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';

const tabScreenConfig = {
  Home: {
    screen: HomeScreen,
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