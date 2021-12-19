import React, {useEffect, useState} from 'react';
import {
    Alert,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {TextInput} from "react-native-paper";
import {MaterialIcons} from '@expo/vector-icons';
import MyButton from "../components/MyButton";
import colors from "../constants/colors";
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch} from "react-redux";
import {postEvent} from "../features/event/eventSlice";
import {collection, doc} from "firebase/firestore";
import {db} from '../firebase-config'

//variable dimensions to use for style
const deviceWidth = Dimensions.get('window').width

const AddEventScreen = props => {
    const dispatch = useDispatch()

    //inputs State
    const [title, setTitle] = useState('');
    const titleChanged = (text) => {
        setTitle(text)
    }
    const [address, setAddress] = useState('');
    const addressChanged = (text) => {
        setAddress(text)
    }
    const [country, setCountry] = useState('');
    const countryChanged = (text) => {
        setCountry(text)
    }
    const [price, setPrice] = useState('');
    const priceChanged = (text) => {
        setPrice(text)
    }
    const [description, setDescription] = useState('');
    const descriptionChanged = (text) => {
        setDescription(text)
    }
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textDate, setTextDate] = useState('');
    const [textTime, setTextTime] = useState('');
    //Date & Time Picker
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };
    const showTimepicker = () => {
        showMode('time');
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()) + '/' + (tempDate.getFullYear());
        let fTime = tempDate.getHours() + 'h' + tempDate.getMinutes();
        setTextDate(fDate)
        setTextTime(fTime)
    };

    // Image Picker Expo
    const defaultImage = "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMaeventApp-d70132ac-6ac9-44b6-b63a-8c7ed8b02d9d/ImagePicker/36500bed-47ef-42f5-a176-db1abd06d10e.png";
    const [image, setImage] = useState(defaultImage);
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
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
        // console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    //submit form of the event
    const eventRef = doc(collection(db, "event"));
    const submitHandler = () => {
        if (title !== '' && address !== '' && country !== '' && textDate !== '' && textTime !== '' && price !== '') {
            const eventObject = {
                id: eventRef.id,
                title: title,
                image: image,
                address: address,
                country: country,
                date: textDate,
                hours: textTime,
                price: price,
                description: description,
            }
            dispatch(postEvent(eventObject))
            props.navigation.navigate('HomeEvent')
        } else {
            Alert.alert('Form is not valid !', 'Please fill all the inputs :) ', [
                {text: 'Okay'}
            ]);
        }
    }

    const cancelButton = () => {
        props.navigation.goBack();
    }
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={"height"} keyboardVerticalOffset={10}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../assets/logo/Maevent_T.png')}/>
                    </View>
                    <View>
                        <View style={styles.inputContainer}>
                            <Text> Title : *</Text>
                            <TextInput
                                style={{width: "90%"}}
                                mode={"outlined"}
                                placeholder={"ZeEvent"}
                                value={title}
                                onChangeText={titleChanged}
                                theme={{colors: {background: "transparent"}}}
                                required
                            />
                        </View>
                        {/*TODO: une image default if il y a encore aucune image ( dans le state image par default */}
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
                                {image && <Image source={{uri: image}} style={styles.imagePoster}/>}
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text> Address(rue,n°,code postal) : *</Text>
                            <TextInput
                                style={{width: "90%"}}
                                mode={"outlined"}
                                placeholder={"Rue des folies 15, 1000 Brussels"}
                                value={address}
                                onChangeText={addressChanged}
                                theme={{colors: {background: "transparent"}}}
                                required
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text> Country : *</Text>
                            <TextInput
                                style={{width: "90%"}}
                                mode={"outlined"}
                                placeholder={"Belgique"}
                                value={country}
                                onChangeText={countryChanged}
                                theme={{colors: {background: "transparent"}}}
                                required
                            />
                        </View>
                        <View style={styles.DTPicker}>
                            <MyButton
                                onPress={showDatepicker}
                                style={styles.buttonPicker}
                            >
                                Date : *
                            </MyButton>
                            <TextInput
                                style={styles.inputPicker}
                                mode={"outlined"}
                                placeholder={"01/01/2021"}
                                value={textDate}
                                onChangeText={setTextDate}
                                theme={{colors: {background: "transparent"}}}
                                editable={false}
                                required
                            />
                        </View>
                        <View style={styles.DTPicker}>
                            <MyButton
                                onPress={showTimepicker}
                                style={styles.buttonPicker}
                            >
                                Hours : *
                            </MyButton>
                            <TextInput
                                style={styles.inputPicker}
                                mode={"outlined"}
                                placeholder={"01/01/2021"}
                                value={textTime}
                                onChangeText={setTextTime}
                                theme={{colors: {background: "transparent"}}}
                                editable={false}
                                required
                            />
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                        <View style={styles.inputContainer}>
                            <Text> Prix : *</Text>
                            <TextInput
                                style={{width: "90%"}}
                                mode={"outlined"}
                                placeholder={"23 €"}
                                value={price}
                                onChangeText={priceChanged}
                                keyboardType={'numeric'}
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
                                value={description}
                                onChangeText={descriptionChanged}
                                theme={{colors: {background: "transparent"}}}
                                autoCorrect={true}
                                multiline={true}
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
                    <View style={styles.buttonsContainer}>
                        <View style={{marginRight: 20}}>
                            <MyButton
                                style={styles.buttonSubmit}
                                onPress={submitHandler}
                            >
                                Valider
                            </MyButton>
                        </View>
                        <View style={{marginLeft: 20}}>
                            <MyButton
                                style={styles.buttonCancel}
                                onPress={cancelButton}
                            >
                                Annuler
                            </MyButton>
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
    DTPicker: {
        flexDirection: 'row',
        alignItems: 'center',
        width: deviceWidth,
        paddingLeft: 20,
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    buttonPicker: {
        width: 150,
        backgroundColor: 'transparent',
        color: 'black',
        borderColor: 'grey',
        borderWidth: 0.5,
    },
    inputPicker: {
        width: 150,
        right: 37,
        textAlign: 'center'
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
    imagePoster: {
        flex: 1,
        width: 338,
        height: 249,
        borderRadius: 5
    },
    img: {
        flex: 1,
        resizeMode: 'contain',
        height: 250,
        width: 340
    },
    buttonsContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonCancel: {
        backgroundColor: colors.danger,
        width: 150,
    },
    buttonSubmit: {
        width: 150,
    }
});

export default AddEventScreen;