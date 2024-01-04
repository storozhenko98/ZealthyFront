import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import SubmitTicket from './components/SubmitTicket';
import RespondToTicket from './components/RespondToTicket';
import TicketView from './components/TicketView';
import ImageView from './components/ImageView';
import ResolveTicket from './components/ResolveTicket';


const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#f2f4e9',
        
        primary: '#f2f4e9', 
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
                        backgroundColor: MyTheme.colors.primary, 
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold', 
                    }
                }}
            >
                <Stack.Screen name="ZEALTHY | Help Desk" component={Home} /> 
                <Stack.Screen name="Resolve Tickets" component={RespondToTicket} />
                <Stack.Screen name="Submit a Ticket" component={SubmitTicket} />
                <Stack.Screen name="Ticket View" component={TicketView} />
                <Stack.Screen name="Image View" component={ImageView} />
                <Stack.Screen name="Resolve Ticket" component={ResolveTicket} />
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
