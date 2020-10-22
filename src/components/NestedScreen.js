import React from 'react';
import {View} from 'react-native';
import Colors from "../assets/Colors";
import CONSTANTS from "../../config";

export default class NestedScreen extends React.Component {

  static navigationOptions = () => ({
    headerBackTitle: "Back",
    headerBackTitleStyle: {
      color: Colors[CONSTANTS.ENV].white,
    },
    headerStyle: {
      backgroundColor: Colors[CONSTANTS.ENV].darkColor,
    }
  });

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors[CONSTANTS.ENV].tertiaryColor}}>
      </View>
    );
  }
}
