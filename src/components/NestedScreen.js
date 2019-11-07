import React from 'react';
import {View, Text} from 'react-native';

export default class NestedScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF7043'}}>
        <Text style={{color: '#fff', fontWeight: '800'}}>Nested Screen</Text>
      </View>
    );
  }
}
