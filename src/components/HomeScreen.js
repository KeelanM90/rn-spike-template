import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

/**
 * Import custom styles for custom features
 */
import {loginStyle} from '../styles/BaseStyle';

/**
 * Import custom features defined as npm packages
 */
import {LoginForm} from 'km-login-module';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { screenProps } = this.props

    return (
      <>
        <Button
          title="Second Screen"
          onPress={() => this.props.navigation.navigate({
            routeName: 'Second',
            params: {
              testprop: 'this is a test'
            },
          })}
        />

        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <Text style={styles.sectionTitle}>{screenProps.user.name}</Text>
            </View>

            <LoginForm
              name="This string and style are passed as Props"
              style={loginStyle}
            />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionTitle: {
    padding: 12,
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});
