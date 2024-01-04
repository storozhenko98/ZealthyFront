import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-web';


const RespondToTicket = ({navigation}) => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEmpty, setIsEmpty] = useState(null);
    useEffect(() => {
        fetch('https://personal-projects.a2hosted.com/api/getAllTickets',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.length == 0) {
                        setIsEmpty(true);
                    }
                    else {
                        setIsEmpty(false);
                        setTickets(result);
                    //reverse sort tickets by id
                        setTickets(result.sort((a, b) => b.id - a.id));
                        setLoading(false);
                    }
                    
                },
                (error) => {
                    setError(error);
                    setLoading(false);
                    alert(error);
                    navigation.navigate('Home');
                }
            )
    }
    , []);
    return (
        <SafeAreaView style={styles.container}>
            {loading && 
            <>
            <Text style={styles.formLabelText}>Loading...</Text>
            <ActivityIndicator size="large" color="#00531a"/>
            </>
            }
            
            {!loading && !isEmpty &&
            <View style={styles.contentContainer}>
                <Text style={styles.formLabelText}>Select a Ticket</Text>
                <ScrollView style={styles.ScrollView}>
                    {tickets.map((ticket) => (
                        <TouchableOpacity
                            key={ticket.id}
                            style={styles.regularButtonColor}
                            onPress={() => navigation.navigate('Ticket View', {ticketId: ticket.id})}
                        >
                            <Text style={styles.buttonText}>Ticket ID: {ticket.id}</Text>
                            <Text style={styles.dataPreviewText}>From: {ticket.email}</Text>
                            <Text style={styles.dataPreviewText}>Status: {ticket.status}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            }
            {!loading && isEmpty &&
            <View style={styles.contentContainer}>
                <Text style={styles.formLabelText}>No Tickets to Respond to</Text>
            </View>
            }
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
        justifyContent: 'center',
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
        height: 100,
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
        color: 'white',
        fontSize: 16,
        
    },
    ScrollView: {
        padding: 20,
    }
    
});

export default RespondToTicket;