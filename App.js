import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

const AppStackNavigator = new StackNavigator({
	WelcomeScreen: {
		screen: WelcomeScreen
	},
	LoginScreen: {
		screen: LoginScreen
	},
	SignpScreen: {
		screen: SignUpScreen
	}
});

export default class App extends React.Component {
	render() {
		return (
			<AppStackNavigator />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
