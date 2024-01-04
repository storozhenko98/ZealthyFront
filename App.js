import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import SubmitTicket from './components/SubmitTicket';
import RespondToTicket from './components/RespondToTicket';

//const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

// Define your theme colors
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#f2f4e9',
        // Set the header background color
        primary: '#f2f4e9', // You can replace 'eggshell' with the actual color code
    },
};

const AppStack = () => {
    return (
        <NavigationContainer
            theme={MyTheme}
            initialRouteName="Home"
        >
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: MyTheme.colors.primary, // Use the primary color for the header background
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold', // Set the header text to bold
                    }
                }}
            >
                <Stack.Screen name="ZEALTHY | Help Desk" component={Home} /> 
                <Stack.Screen name="Resolve Tickets" component={RespondToTicket} />
                <Stack.Screen name="Submit a Ticket" component={SubmitTicket} />
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
  navigationTopBar: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
  },
});
