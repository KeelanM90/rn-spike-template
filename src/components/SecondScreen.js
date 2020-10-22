import React from 'react';
import {View, Text} from 'react-native';
import Colors from '../assets/Colors';
import CONSTANTS from '../../config'

export default class SecondScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors[CONSTANTS.ENV].primaryColor}}>
      </View>
    );
  }
}
