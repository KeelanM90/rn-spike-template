import React from 'react';
import {View, Text} from 'react-native';
import Colors from '../constants/Colors';

export default class SecondScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.bp.primaryColor}}>
      </View>
    );
  }
}
