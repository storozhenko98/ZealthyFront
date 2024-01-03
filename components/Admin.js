import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Admin</Text>
            <StatusBar style="auto" /> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
    },
});

export default Home;