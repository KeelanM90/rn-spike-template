import React from 'react';
import {View, Text} from 'react-native';

export default class SecondScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFD54F'}}>
        <Text style={{color: '#fff', fontWeight: '800'}}>Second Screen</Text>
        {/*<Text>{this.props.navigation.getParam("testprop")}</Text>*/}
      </View>
    );
  }
}


