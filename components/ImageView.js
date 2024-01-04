import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, { useState, useEffect } from 'react';



const ImageView = ({route, navigation}) => {
    const {image, id } = route.params;
   
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
            <Text style={styles.formLabelText}>Image Preview</Text>
            <Text style={styles.formLabelText}>Ticket ID: {id}</Text>
                <Image
                    source={{uri: image}}
                    style={{width: 90+"vw", height: 50+"vh"}}
                />
            </View>
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


export default ImageView;