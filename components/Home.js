import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';


const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
            style={styles.regularButtonColor}
            onPress={() => {navigation.navigate('Resolve Tickets')}}
            >
                <Text
                style={styles.buttonText}
                >Respond to a Ticket</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.regularButtonColor}
            onPress={() => {navigation.navigate('Submit a Ticket')}}
            >
                <Text
                style={styles.buttonText}
                >Submit a Ticker</Text>
            </TouchableOpacity>
            <StatusBar style="auto" /> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffcf8',
        alignItems: 'center',
        justifyContent:'center',
    },
    regularButtonColor: {
        backgroundColor: '#00531a',
        width: 80+'%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Home;