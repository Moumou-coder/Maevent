import React, {useCallback, useReducer, useState} from 'react';
import {Alert, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from "react-native-paper";
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import MyButtonText from "../components/MyButtonText";
import MyButton from "../components/MyButton";

/*Reducers hooks to manage states*/
const FormInputPost = 'REGISTER_INPUT_POST';
const registerFormReducer = (state, action) => {
    if (action.type === FormInputPost) {
        const postValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const postValidations = {
            ...state.inputValidations,
            [action.input]: action.isValid
        };
        let postFormIsValid = true;
        for (const key in postValidations) {
            postFormIsValid = postFormIsValid && postValidations[key];
        }
        return {
            formIsValid: postFormIsValid,
            inputValidations: postValidations,
            inputValues: postValues,
        };
    }
    return state;
};

const RegisterScreen = props => {
    //form states
    const [formState, formDispatch] = useReducer(registerFormReducer, {
        inputValues: {
            pseudo: '',
            email: '',
            pass: '',
            confirmPass: ''
        },
        inputValidations: {
            pseudo: false,
            email: false,
            pass: false,
            confirmPass: false
        },
        formIsValid: false
    });
    //Form Handlers
    const inputsHandler = (inputIdentifier, text) => {
        let isValid = false;
        if (text.trim().length > 0) {
            isValid = true;
        }
        formDispatch({
            type: FormInputPost,
            value: text,
            isValid: isValid,
            input: inputIdentifier

        });
    }
    //validation for the submit form
    const submitHandler = useCallback(() => {
        if (!formState.formIsValid || formState.inputValues.pass !== formState.inputValues.confirmPass) {
            Alert.alert('Form is not valid !', 'Please check if you have filled all the inputs and the passwords are identical', [
                {text: 'Okay'}
            ]);
        } else {
            signInNavigation();
        }
    });

    //Navigation between screens
    const signInNavigation = () => {
        props.navigation.navigate('SignIn')
    }
    //Show passwords
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    const [isSecureEntryConfirm, setIsSecureEntryConfirm] = useState(true)

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={"height"} keyboardVerticalOffset={10}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../assets/logo/MaeventLogo_WT.png')}/>
                        <Text style={styles.text}>Create your account </Text>
                    </View>
                    <View>
                        {/*TODO: error message*/}
                        <View style={styles.input}>
                            <MaterialCommunityIcons name="account-circle-outline" size={24} color="black"
                                                    style={styles.icons}/>
                            <TextInput
                                style={{width: "85%"}}
                                mode={"flat"}
                                label={"Pseudo"}
                                placeholder={"Deadpool"}
                                value={formState.inputValues.pseudo}
                                onChangeText={inputsHandler.bind(this, 'pseudo')}
                                theme={{colors: {background: "transparent"}}}
                                required
                            />
                        </View>
                        <View style={styles.input}>
                            <AntDesign name="mail" size={24} color="black" style={styles.icons}/>
                            <TextInput
                                style={{width: "85%"}}
                                mode={"flat"}
                                label={"Email"}
                                placeholder={"exemple@hotmail.com"}
                                value={formState.inputValues.email}
                                onChangeText={inputsHandler.bind(this, 'email')}
                                theme={{colors: {background: "transparent"}}}
                                keyboardType={'email-address'}
                                required
                            />
                        </View>
                        <View style={styles.input}>
                            <MaterialIcons name="lock-outline" size={24} color="black" style={styles.icons}/>
                            <TextInput
                                style={{width: "85%"}}
                                mode={"flat"}
                                label={"Password"}
                                placeholder={"********"}
                                value={formState.inputValues.pass}
                                onChangeText={inputsHandler.bind(this, 'pass')}
                                theme={{colors: {background: "transparent"}}}
                                secureTextEntry={isSecureEntry}
                                right={<TextInput.Icon
                                    name={isSecureEntry ? "eye-off" : 'eye'}
                                    onPress={() => {
                                        setIsSecureEntry(prev => !prev)
                                    }}
                                />}
                                required
                            />
                        </View>
                        <View style={styles.input}>
                            <MaterialIcons name="lock" size={24} color="black" style={styles.icons}/>
                            <TextInput
                                style={{width: "85%"}}
                                mode={"flat"}
                                label={"Confirm Password"}
                                placeholder={"********"}
                                value={formState.inputValues.confirmPass}
                                onChangeText={inputsHandler.bind(this, 'confirmPass')}
                                theme={{colors: {background: "transparent"}}}
                                secureTextEntry={isSecureEntryConfirm}
                                right={<TextInput.Icon
                                    name={isSecureEntryConfirm ? "eye-off" : 'eye'}
                                    onPress={() => {
                                        setIsSecureEntryConfirm(previous => !previous)
                                    }}
                                />}
                                required
                            />
                        </View>
                    </View>
                    <View style={styles.registerContainer}>
                        <MyButton
                            onPress={submitHandler}
                        >
                            Register
                        </MyButton>
                    </View>
                    <View style={styles.signInContainer}>
                        <Text style={{color: 'black'}}>
                            Already have an account ?
                        </Text>
                        <MyButtonText
                            onPress={() => signInNavigation()}
                        >
                            Sign In
                        </MyButtonText>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        marginTop: 30,
        marginBottom: 20,
        alignItems: 'center'
    },
    text: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 22
    },
    icons: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 10
    },

    input: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    registerContainer: {
        marginTop: 20,
    },
    signInContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default RegisterScreen;