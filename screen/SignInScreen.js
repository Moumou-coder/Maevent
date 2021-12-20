import React, {useCallback, useReducer, useState} from 'react';
import {Alert, Dimensions, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from "react-native-paper";
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import MyButton from "../components/MyButton";
import MyButtonText from "../components/MyButtonText";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {collection, doc, getDoc, getDocs} from "firebase/firestore";
import {app, db} from '../firebase-config'
import {useDispatch} from "react-redux";
import {getEvent} from "../features/event/eventSlice";
import {login} from "../features/user/userSlice";

const deviceWidth = Dimensions.get('window').width

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
            handleLogin().then();
        }
    });

    //Firebase SignIn
    const handleLogin = async () => {
        const auth = getAuth(app);
        const tableau = [];
        signInWithEmailAndPassword(auth, formState.inputValues.email, formState.inputValues.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("email", formState.inputValues.email)
                console.log("pass", formState.inputValues.password)
                homeNavigation()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(errorCode, errorMessage, [
                    {text: 'Okay'}
                ]);
            });
        //fetch all document of events collection
        const querySnapshot = await getDocs(collection(db, "event"));
        querySnapshot.forEach((doc) => {
            const object = {...doc.data(), id: doc.id}
            tableau.push(object)
        })
        dispatch(getEvent(tableau));
        //fetch the current user and push it in redux
        const userRef = doc(db, "users", formState.inputValues.email);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            dispatch(login(userSnap.data()))
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document about the user!");
        }
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
        <KeyboardAvoidingView style={{flex: 1}} behavior={"height"} keyboardVerticalOffset={10}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../assets/logo/MaeventLogo_WT.png')}/>
                        <Text style={styles.text}>Welcome on Maevent</Text>
                    </View>
                    <View>
                        <View style={styles.input}>
                            <AntDesign name="mail" size={24} color="black" style={styles.icons}/>
                            <TextInput
                                style={{width: "90%"}}
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
                                style={{width: "90%"}}
                                mode={"flat"}
                                label={"Password"}
                                placeholder={"********"}
                                value={formState.inputValues.password}
                                onChangeText={inputsHandler.bind(this, 'password')}
                                theme={{colors: {background: "transparent"}}}
                                secureTextEntry={isSecureEntry}
                                required
                            />
                            <TextInput.Icon
                                style={styles.eyeIcon}
                                name={isSecureEntry ? "eye-off" : 'eye'}
                                onPress={() => {
                                    setIsSecureEntry(prev => !prev)
                                }}
                            />
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
        marginTop: 120,
        marginBottom: 20
    },
    imageContainer: {
        marginBottom: 50
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    icons: {
        marginTop: 20,
        marginLeft: 5,
        marginRight: 10
    },
    eyeIcon: {
        marginTop: 20,
        marginRight: 5,
        marginLeft: 10
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 20,
        marginLeft: 5
    },
    loginContainer: {
        marginTop: 100,
        marginBottom: 30
    },
    registerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
});

export default SignInScreen;

