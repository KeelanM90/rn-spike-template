import React from 'react';
import {View, Text} from 'react-native';

export default class ThirdScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1DE9B6'}}>
        <Text style={{color: '#fff', fontWeight: '800'}}>Third Screen</Text>
      </View>
    );
  }
}
