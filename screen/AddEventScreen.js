import React, {useEffect, useState} from 'react';
import {
    Dimensions,
    Image,
    KeyboardAvoidingView, Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {TextInput} from "react-native-paper";
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import MyButton from "../components/MyButton";
import colors from "../constants/colors";
import * as ImagePicker from 'expo-image-picker';

//variable dimensions to use for style
const deviceWidth = Dimensions.get('window').width

const AddEventScreen = props => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    //Navigations
    const goBack = () =>{
        props.navigation.goBack();
    }
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={"height"} keyboardVerticalOffset={10}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity style={styles.backButton} onPress={() => goBack()}>
                            <Ionicons name="arrow-back" size={35} color="black" />
                        </TouchableOpacity>
                        <Image source={require('../assets/logo/Maevent_T.png')} />
                    </View>
                    <View>
                        <View style={styles.inputContainer}>
                            <Text> Title : *</Text>
                            <TextInput
                                style={{width: "90%"}}
                                mode={"outlined"}
                                placeholder={"ZeEvent"}
                                theme={{colors: {background: "transparent"}}}
                                required
                            />
                        </View>
                        {/*TODO: ajouter image picker*/}
                        <View style={styles.inputContainer}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text> Poster *</Text>
                                <TouchableOpacity onPress={pickImage}>
                                    <MaterialIcons
                                        name="add-a-photo" size={22}
                                        color="black"
                                        style={{marginRight: 35}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.poster}>
                                {image && <Image source={{ uri: image }} style={styles.imagePoster} />}
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text> Address : *</Text>
                            <TextInput
                                style={{width: "90%"}}
                                mode={"outlined"}
                                placeholder={"Rue des folies 15, 1000 Brussels"}
                                theme={{colors: {background: "transparent"}}}
                                required
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text> Date : *</Text>
                            <TextInput
                                style={{width: "90%"}}
                                mode={"outlined"}
                                placeholder={"19/12/2021"}
                                theme={{colors: {background: "transparent"}}}
                                required
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text> Horaires : *</Text>
                            <TextInput
                                style={{width: "90%"}}
                                mode={"outlined"}
                                placeholder={"16h00 - 21h00"}
                                theme={{colors: {background: "transparent"}}}
                                required
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text> Prix : *</Text>
                            <TextInput
                                style={{width: "90%"}}
                                mode={"outlined"}
                                placeholder={"23€ adulte - 10€ enfant - gratuit enfant"}
                                theme={{colors: {background: "transparent"}}}
                                required
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text> Description : </Text>
                            <TextInput
                                style={{width: "90%"}}
                                mode={"outlined"}
                                placeholder={"This is Event is ... "}
                                theme={{colors: {background: "transparent"}}}
                                autoCorrect={true}
                            />
                        </View>
                        {/*TODO: ajouter google maps - l'endroit apparait quand on rajoute une adresse dans la input adress (dynamiquement)*/}
                        <View style={styles.inputContainer}>
                            <Text> Google Maps ( localisation )</Text>
                            <View style={styles.poster}>
                                <Image source={require('../assets/GoogleMaps.png')} style={styles.img}/>
                            </View>
                        </View>
                    </View>
                    {/*TODO: ajouter la vérification du formulaire & la validation */}
                    <View style={styles.buttonsContainer}>
                        <View style={{marginRight: 20}}>
                            <MyButton style={styles.buttonSubmit}> Valider </MyButton>
                        </View>
                        <View style={{marginLeft: 20}}>
                            <MyButton style={styles.buttonCancel}> Annuler </MyButton>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    imageContainer: {
        marginBottom: 30,
        flexDirection: 'row',
    },
    inputContainer: {
        width: deviceWidth,
        paddingLeft: 20,
        marginBottom: 20
    },
    poster: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eae5e5',
        width: 340,
        height: 250,
        marginTop: 10,
        borderRadius: 5,
    },
    imagePoster:{
        width: 340,
        height: 250,
        borderRadius: 5
    },
    img: {
        flex: 1,
        resizeMode: 'contain',
        height: 250,
        width: 340
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    buttonCancel: {
        backgroundColor: colors.danger,
        width: 150,
        marginBottom: 10
    },
    buttonSubmit: {
        width: 150,
        marginBottom: 10
    },
    backButton:{
        marginRight: 50
    }
});

export default AddEventScreen;