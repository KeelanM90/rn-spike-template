import React from 'react';
import {View} from 'react-native';
import Colors from "../constants/Colors";

export default class NestedScreen extends React.Component {

  static navigationOptions = () => ({
    headerBackTitle: "Back",
    headerBackTitleStyle: {
      color: Colors.bp.white,
    },
    headerStyle: {
      backgroundColor: Colors.bp.darkColor,
    }
  });

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.bp.tertiaryColor}}>
      </View>
    );
  }
}
