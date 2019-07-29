/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.welcome}>Hello!</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    padding: 70,
  }
});
