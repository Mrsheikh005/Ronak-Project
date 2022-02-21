import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/auth_screens/Login';
import SignUp from './src/auth_screens/SignUp';
const Stack = createNativeStackNavigator();
export default class App extends Component {
  render() {
	return (
		<NavigationContainer>
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="SignUp" component={SignUp} />           
		</Stack.Navigator>
	</NavigationContainer>
	)
  }
}
