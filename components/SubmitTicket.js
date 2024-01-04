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
                        <Text>Name:</Text>
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
                        <Text>Email:</Text>
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
                        <Text>Description:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleDescriptionChange}
                            value={description}
                        />
                    </View>
                );
            case 3:
                return (
                    <View>
                        <Text>Image:</Text>
                        <Button title="Pick an image from camera roll" onPress={pickImage} />
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                    </View>
                );
            case 4:
                return (
                    <View>
                        <Text>Submit:</Text>
                        <Text>Name: {formData.name}</Text>
                        <Text>Email: {formData.email}</Text>
                        <Text>Description: {formData.description}</Text>
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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
                    <View style={styles.buttonContainer}>
                        {step !== 0 && <Button title="Previous" onPress={handlePrevStep} />}
                        {step !== 4 && <Button title="Next" onPress={handleProceed} />}
                        {step === 4 && <Button title="Submit" onPress={handleProceed} />}
                    </View>
                    {renderFormStep()}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    previewContainer: {
        marginTop: 20,
    },
});

export default SubmitTicket;
