import React from 'react';
import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
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

const deviceWidth = Dimensions.get('window').width
console.log(deviceWidth)

const AddEventScreen = props => {
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
                                theme={{colors: {background: "transparent"}}}
                                required
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text> Poster *</Text>
                                <TouchableOpacity>
                                    <MaterialIcons
                                        name="add-a-photo" size={22}
                                        color="black"
                                        style={{marginRight: 35}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.poster}>
                                <Image source={require('../assets/logo/MaeventLogo.png')}/>
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
                            <Text> Description : *</Text>
                            <TextInput
                                style={{width: "90%"}}
                                mode={"outlined"}
                                placeholder={"This is Event is ... "}
                                theme={{colors: {background: "transparent"}}}
                                required
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text> Google Maps ( localisation )</Text>
                            <View style={styles.poster}>
                                <Image source={require('../assets/GoogleMaps.png')} style={styles.img}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={{marginRight: 15}}>
                            <MyButton style={styles.buttonSubmit}> Valider </MyButton>
                        </View>
                        <View style={{marginLeft: 15}}>
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
        marginTop: 40,
    },
    imageContainer: {
        marginBottom: 30
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
    img: {
        flex: 1,
        resizeMode: 'contain',
        height: 250,
        width: 340
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 15
    },
    buttonCancel: {
        backgroundColor: colors.danger,
        width: 150
    },
    buttonSubmit: {
        width: 150
    }
});

export default AddEventScreen;