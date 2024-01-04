import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, TouchableOpacity, ScrollView, Image, TextInput} from 'react-native';
import React, { useState, useEffect } from 'react';




const ResolveTicket = ({route, navigation}) => {
    const {id } = route.params;
    const [resolution, setResolution] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const handleResolutionChange = (text) => {
        setResolution(text);
    }
    const handleResolveTicket = () => {
        fetch('http://localhost:3000/api/resolveTicket',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    resolution: resolution,
                })
            })
            .then(res => res.json())
            .then(
                (result) => {
                    alert("Ticket resolved successfully! No Email since this is a demo, but you can see the resolved ticket + resolution message in tickets view.");
                    navigation.navigate('ZEALTHY | Help Desk');
                },
                (error) => {
                    setError(error);
                    setLoading(false);
                    alert(error);
                    navigation.navigate('ZEALTHY | Help Desk');
                }
            )
    }
    return (
        <SafeAreaView style={styles.container}>{loading &&
            <View style={styles.contentContainer}>
            <Text style={styles.formLabelText}>Ticket ID: {id}</Text>
            <Text style={styles.formLabelText}>Resolution Message: </Text>
            <TextInput
                style={styles.multilineInput}
                onChangeText={handleResolutionChange}
                value={resolution}
                multiline={true} />
            <TouchableOpacity
                style={styles.regularButtonColor}
                onPress={handleResolveTicket}
            >
                <Text
                style={styles.buttonText}   
                >Resolve Ticket</Text>
            </TouchableOpacity>


                
        </View>}
        {loading && <ActivityIndicator size="large" color="#00531a"/>}           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffcf8',
    },
    contentContainer: {
        padding: 20,
        //justifyContent: 'center',
        height: 100+'%',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        backgroundColor: 'white',
    },
    multilineInput: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        backgroundColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    previewContainer: {
        marginTop: 20,
    },
    regularButtonColor: {
        backgroundColor: '#00531a',
        width: 100+'%',
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginBottom: 10,
        
    },
    selectImageButton: {
        backgroundColor: '#057c2a',
        width: 100+'%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginBottom: 10,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    formLabelText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    },
    dataPreviewButton: {
        backgroundColor: '#f2f4e9',
        width: 100+'%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginBottom: 10,
        padding: 10,
    },
    descriptionPreview: {
        backgroundColor: '#f2f4e9',
        width: 100+'%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginBottom: 10,
        padding: 10,
    },
    dataPreviewText: {
        color: 'black',
        fontSize: 18,
        
    },
    descriptionPreviewText: {
        color: 'black',
        fontSize: 16,
        
    },
    ScrollView: {
        padding: 20,
    }
    
});


export default ResolveTicket;