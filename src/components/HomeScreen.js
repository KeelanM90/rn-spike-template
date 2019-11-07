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

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {

    const {screenProps} = this.props;
    const secondScreenOptions = {
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
                      style={styles.scrollView}>

            <View style={styles.body}>
              <Text style={styles.section}>{screenProps.test.data}</Text>
            </View>

            <View style={{marginTop: 160}}>
              <Button title="Nested Navigation Button"
                      color='white'
                      onPress={() => this.props.navigation.navigate(secondScreenOptions)}
              />
            </View>

          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#EA80FC',
  },
  safeArea: {
    flex: 1,
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    paddingTop: 48,
    fontSize: 14,
    fontWeight: '800',
    color: Colors.white,
  },
});
