import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {StyleSheet, Button, Text, View} from 'react-native';

export default class App extends Component {
	componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
	}
	
	render() {
	  return (
		<View style={styles.container}>
		  <Text style={styles.welcome}>Hello!</Text>
		  <Text style={styles.instructions}>To get started, edit App.js</Text>
		  <Button onPress={() => console.warn('Button pressed')} title="Button" />
		</View>
	  );
	}
  }
  
  const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#F5FCFF',
	},
	welcome: {
	  fontSize: 20,
	  textAlign: 'center',
	  margin: 10,
	},
	instructions: {
	  textAlign: 'center',
	  color: '#333333',
	  marginBottom: 5,
	},
  });