import React, {useCallback, useReducer, useState} from 'react';
import {Alert, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from "react-native-paper";
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import MyButton from "../components/MyButton";
import MyButtonText from "../components/MyButtonText";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import {app, db} from '../firebase-config'
import {useDispatch} from "react-redux";
import {getEvent, postEvent} from "../features/event/eventSlice";

//Reducer manage states of signIn
const loginInputPost = 'LOGIN_INPUT_POST';
const signInFormReducer = (state, action) => {
    if (action.type === loginInputPost) {
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

const SignInScreen = props => {
    const dispatch = useDispatch()
    //Form Reducer (states)
    const [formState, formDispatch] = useReducer(signInFormReducer, {
        inputValues: {
            email: '',
            password: '',
        },
        inputValidations: {
            email: false,
            password: false,
        },
        formIsValid: false
    });

    //Form inputs handler
    const inputsHandler = (inputIdentifier, text) => {
        let isValid = false;
        if (text.trim().length > 0) {
            isValid = true;
        }
        formDispatch({
            type: loginInputPost,
            value: text,
            isValid: isValid,
            input: inputIdentifier
        });
    }

    //Validation submit to signIn
    const submitHandler = useCallback(() => {
        if (!formState.formIsValid) {
            Alert.alert('Form is not valid !', 'Please fill all the inputs :)', [
                {text: 'Okay'}
            ]);
        } else {
            handleLogin().then(
                homeNavigation()
            );
        }
    });

    //Firebase SignIn
    const handleLogin = async () => {
        const auth = getAuth(app);
        const tableau=[];
        signInWithEmailAndPassword(auth, formState.inputValues.email, formState.inputValues.password)
            .then((userCredential) => {
                const user = userCredential.user;
                const userId = user.uid
                // console.log("user email : " + user.email + " & user id  : " + user.uid)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(errorCode, errorMessage, [
                    {text: 'Okay'}
                ]);
            });
        const querySnapshot = await getDocs(collection(db, "event"));
        querySnapshot.forEach((doc) => {
            tableau.push(doc.data())
        })
        dispatch(getEvent(tableau));
    }

    //Navigation between screens
    const registerNavigation = () => {
        props.navigation.navigate('Register')
    }
    const homeNavigation = () => {
        props.navigation.replace('HomeLogin')
    }

    //show my password
    const [isSecureEntry, setIsSecureEntry] = useState(true)

    return (
        <KeyboardAvoidingView style={{flex:1}} behavior={"height"} keyboardVerticalOffset={10}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/logo/MaeventLogo_WT.png')}/>
                    <Text style={styles.text}>Welcome on Maevent</Text>
                </View>
                {/*TODO: add some logic error message*/}
                <View>
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
                            autoComplete={'email'}
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
                            value={formState.inputValues.password}
                            onChangeText={inputsHandler.bind(this, 'password')}
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
                    <View>
                        <MyButtonText
                            onPress={() => console.log("you forgot your password man ? ")}
                            style={styles.buttonForgot}
                        >
                            Forgot Password ?
                        </MyButtonText>
                    </View>
                </View>
                <View style={styles.loginContainer}>
                    <MyButton
                        onPress={submitHandler}
                    >
                        Sign In
                    </MyButton>
                </View>
                <View style={styles.registerContainer}>
                    <Text style={{color: 'black'}}>
                        First time here ?
                    </Text>
                    <MyButtonText
                        onPress={registerNavigation}
                    >
                        Register
                    </MyButtonText>
                </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    imageContainer: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10
    },
    icons: {
        marginTop: 20,
        marginLeft: 5,
        marginRight: 10
    },

    input: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    loginContainer: {
        marginTop: 50,
    },
    registerContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonForgot: {
        paddingHorizontal: 1,
        paddingVertical: 5,
    },
});

export default SignInScreen;

