import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Admin from './components/Admin';
import User from './components/User';

//const Stack = createNativeStackNaviagtor();
const Stack = createNativeStackNavigator();
const AppStack = () => {
    return (
        <NavigationContainer
        initialRouteName="Home"
        >
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} /> 
                <Stack.Screen name="Admin" component={Admin} />
                <Stack.Screen name="User" component={User} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default function App() {
  return (
    <AppStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
