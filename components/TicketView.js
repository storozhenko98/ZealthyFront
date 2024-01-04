import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, { useState, useEffect } from 'react';



const TicketView = ({route, navigation}) => {
    const {ticketId} = route.params;
    const [ticket, setTicket] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasImage, setHasImage] = useState(false);
    useEffect(() => {
        console.log('Retrieving ticket with id: ' + ticketId + '...')
        fetch('https://personal-projects.a2hosted.com/api/getSpecificTicket',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: ticketId,
                })
            })
            .then(res => res.json())
            .then(
                (result) => {
                    if(result[0].image != null) {
                        setHasImage(true);
                    }
                       
                    setTicket(result[0]);
                    
                    setLoading(false);
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

    useEffect(() => {
        console.log(ticket);
        console.log('Has image: ' + hasImage)
        console.log(ticket.name)
    }
    , [ticket]);

    const handleBeginWork = () => {
        fetch('https://personal-projects.a2hosted.com/api/updateTicketStatus',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: ticketId,
                    status: 'In Progress',
                })
            })
            .then(res => res.json())
            .then(
                (result) => {
                    alert('Ticket status updated to "In Progress" ⚙️');
                    //set ticket status to in progress
                    setTicket({...ticket, status: 'In Progress'});
                },
                (error) => {
                    setError(error);
                    setLoading(false);
                    alert(error);
                    
                }
            )
    }
   
    return (
        <SafeAreaView style={styles.container}>
            {loading &&
            <>
            <Text style={styles.formLabelText}>Loading...</Text>
            <ActivityIndicator size="large" color="#00531a"/>
            </>
            }
            {!loading &&
            <View style={styles.contentContainer}>
                <Text style={styles.formLabelText}>Ticket #{ticket.id}</Text>
                <ScrollView style={styles.ScrollView}>
                    <Text style={styles.formLabelText}>Name:</Text>
                    <Text style={styles.dataPreviewText}>{ticket.name}</Text>
                    <Text style={styles.formLabelText}>Email:</Text>
                    <Text style={styles.dataPreviewText}>{ticket.email}</Text>
                    <Text style={styles.formLabelText}>Submitted On: </Text>
                    <Text style={styles.dataPreviewText}>{new Date(ticket.created_at).toLocaleString()}</Text>
                    <Text style={styles.formLabelText}>Status:</Text>
                    <Text style={styles.dataPreviewText}>{ticket.status}</Text>
                    <Text style={styles.formLabelText}>Description:</Text>
                    <ScrollView style={{height:200, borderRadius:15, backgroundColor:'white', padding:10}}>
                    <Text style={styles.descriptionPreviewText}>{ticket.description}</Text>
                    </ScrollView>
                    {hasImage &&
                    <TouchableOpacity style={styles.selectImageButton} onPress={() => navigation.navigate('Image View', {image: ticket.image, id: ticket.id})}>
                        <Text style={styles.buttonText}>View Image</Text>
                    </TouchableOpacity>
                    }
                    {ticket.status == 'Pending' &&
                    <TouchableOpacity style={styles.regularButtonColor} onPress={()=>{handleBeginWork()}}>
                        <Text style={styles.buttonText}>Begin Work on Ticket</Text>
                    </TouchableOpacity>
                    }
                    {ticket.status == 'In Progress' &&
                    <TouchableOpacity style={styles.regularButtonColor} onPress={()=>navigation.navigate('Resolve Ticket', {id: ticket.id})}>
                        <Text style={styles.buttonText}>Resolve Ticket</Text>
                    </TouchableOpacity>
                    }
                    {ticket.status == 'Resolved' &&
                    <>
                    <Text style={styles.formLabelText}>Resolution Message:</Text>
                    <ScrollView style={{height:200, borderRadius:15, backgroundColor:'white', padding:10}}>
                    <Text style={styles.descriptionPreviewText}>{ticket.resolution}</Text>
                    </ScrollView>
                    </>
                    }
                </ScrollView>
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


export default TicketView;