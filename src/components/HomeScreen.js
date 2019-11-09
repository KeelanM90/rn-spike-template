import React from 'react';
import Colors from '../constants/Colors';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableNativeFeedback,
  StatusBar,
  Button,
  Platform
} from 'react-native';

export default class HomeScreen extends React.Component {

  render() {

    // const {screenProps} = this.props;

    const nestedNavScreenOptions = {
      routeName: 'Nested',
      params: {
        testprop: 'this is a test'
      },
    };

    return (
      <>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView contentInsetAdjustmentBehavior="automatic"
                      contentContainerStyle={styles.scrollView}>

            {/*<View style={styles.body}>*/}
            {/*<Text style={styles.section}>{screenProps.test.data}</Text>*/}
            {/*</View>*/}

            <View style={{width: 200}}>
              {Platform.OS === 'android'

                ?
                // Android Button
                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate(nestedNavScreenOptions)}
                                         background={TouchableNativeFeedback.Ripple('green')}>
                  <View style={styles.button}>
                    <Text>Button</Text>
                  </View>
                </TouchableNativeFeedback>

                :
                // iOS Button
                <Button title="Nested Navigation Button"
                        color='white'
                        onPress={() => this.props.navigation.navigate(nestedNavScreenOptions)}
                />
              }
            </View>

          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex:1,
    backgroundColor: Colors.bp.accentColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  section: {
    paddingTop: 48,
    fontSize: 14,
    fontWeight: '800',
    color: Colors.bp.white,
  },
});
