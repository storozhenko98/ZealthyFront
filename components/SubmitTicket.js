import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const SubmitTicket = () => {
    const [formStep, setFormStep] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState(null);
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
        image: null,
    });

    const handleNameChange = (text) => {
        setName(text);
    }
    const handleEmailChange = (text) => {
        setEmail(text);
    }
    const handleDescriptionChange = (text) => {
        setDescription(text);
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

    const handleSubmit = () => {
        console.log('Form Data:', formData);
        // Here you would typically send the formData to your server
    };

    const handleProceed = () => {
        switch (step) {
            case 0:
                if (name === '') {
                    alert('A name is required 🪪');
                    return;
                }
                setFormData({ ...formData, name });
                break;
            case 1:
                if (email === '') {
                    alert('An email is required 📧');
                    return;
                }
                setFormData({ ...formData, email });
                break;
            case 2:
                if (description === '') {
                    alert('A description is required 📝');
                    return;
                }
                setFormData({ ...formData, description });
                break;
            case 3:
                if (image === null) {
                    setFormData({ ...formData, image: null });
                }
                setFormData({ ...formData, image });
                break;
            case 4:
                handleSubmit();
                return;
            default:
                break;
        }
        setStep(step + 1);
    }
    const handlePrevStep = () => {
        setStep(step - 1);
    }
    const goToStep = (step) => {
        setStep(step);
    }

    const renderFormStep = () => {
        switch (step) {
            case 0:
                return (
                    <View>
                        <Text style={styles.formLabelText}>Name:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleNameChange}
                            value={name}
                        />
                    </View>
                );
            case 1:
                return (
                    <View>
                        <Text style={styles.formLabelText}>Email:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleEmailChange}
                            value={email}
                        />
                    </View>
                );
            case 2:
                return (
                    <View>
                        <Text style={styles.formLabelText}>Description:</Text>
                        <TextInput
                            style={styles.multilineInput}
                            onChangeText={handleDescriptionChange}
                            value={description}
                            multiline={true}
                        />
                    </View>
                );
            case 3:
                return (
                    <View>
                        <Text style={styles.formLabelText}>Image Attachment:</Text>
                        <TouchableOpacity
                            style={styles.selectImageButton}
                            onPress={pickImage}
                        >
                            <Text
                                style={styles.buttonText}
                            >Pick an image</Text>
                        </TouchableOpacity>
                        {image && <>
                            <Text style={styles.formLabelText}>Image Preview:</Text>
                            <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                        </>}
                    </View>
                );
            case 4:
                return (
                    <View>
                        <Text style={styles.formLabelText}>See if this is right:</Text>
                        <TouchableOpacity
                        style={styles.dataPreviewButton}
                        onPress={() => goToStep(0)}>
                            <Text
                                style={styles.dataPreviewText}
                                
                            >Name: {formData.name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.dataPreviewButton}
                        onPress={() => goToStep(2)}>
                            <Text
                                style={styles.dataPreviewText}
                               
                            >Email: {formData.email}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.descriptionPreview}
                        onPress={() => goToStep(2)}>
                            <ScrollView>
                                <Text
                                    style={styles.dataPreviewText}
                                   
                                >Description: {formData.description}</Text>
                            </ScrollView>
                        </TouchableOpacity>
                        {image && 
                            <TouchableOpacity
                            style={styles.imagePreview}
                            onPress={() => goToStep(3)}>
                                <Text
                                    style={styles.dataPreviewText}
                                    >Image: </Text>
                                <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                            </TouchableOpacity>
                        }
                        {!image && <Text>No image uploaded</Text>}
                        
                    </View>
                );
            default:
                break;
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.contentContainer}>
                    {renderFormStep()}
                    <View style={styles.contentContainer}>
                        {step !== 4 && <TouchableOpacity
                            style={styles.regularButtonColor}
                            onPress={handleProceed}
                        >
                            <Text
                                style={styles.buttonText}
                            >Next</Text>
                        </TouchableOpacity>}

                        {step !== 0 && <TouchableOpacity
                            style={styles.regularButtonColor}
                            onPress={handlePrevStep}
                            >
                            <Text
                                style={styles.buttonText}
                            >Previous</Text>
                            </TouchableOpacity>
                        }
                        {step === 4 && <TouchableOpacity
                            style={styles.regularButtonColor}
                            onPress={handleSubmit}
                            >
                            <Text
                                style={styles.buttonText}
                            >Submit</Text>
                            </TouchableOpacity>
                        }
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffcf8',
    },
    contentContainer: {
        padding: 20,
        justifyContent: 'center',
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
        height: 50,
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
        color: 'black',
        fontSize: 16,
        
    },
    imagePreview: {
        backgroundColor: '#f2f4e9',
        width: 100+'%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginBottom: 10,
        padding: 10,
    },
    
});

export default SubmitTicket;
