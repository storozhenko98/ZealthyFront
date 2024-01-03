import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';


const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => {navigation.navigate('Admin')}}>
                <Text>Admin</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('User')}}>
                <Text>User</Text>
            </TouchableOpacity>
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