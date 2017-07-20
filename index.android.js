/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class MyProject extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.bts}>
         <Text style={{}}>MyApp</Text>
        </View>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bts: {
    backgroundColor: 'white',
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

AppRegistry.registerComponent('MyProject', () => MyProject);
