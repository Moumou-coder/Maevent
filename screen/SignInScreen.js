import React, {useState} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from "react-native-paper";
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import MyButton from "../components/MyButton";
import MyButtonText from "../components/MyButtonText";


const SignInScreen = props => {

    const [isSecureEntry, setIsSecureEntry] = useState(true)

    return (
        <KeyboardAvoidingView style={styles.container} behavior={"height"} keyboardVerticalOffset={10}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/logo/MaeventLogo.png')}/>
                <Text style={{marginTop: 10}}>Welcome on Maevent</Text>
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
                        theme={{colors: {background: "transparent"}}}
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
                    onPress={() => console.log("login Button")}
                    style={styles.buttonLogin}
                >
                    Sign In
                </MyButton>
            </View>
            <View style={styles.registerContainer}>
                <Text style={{color: 'black'}}>
                    First time here ?
                </Text>
                <MyButtonText
                    onPress={() => console.log("new account register button")}
                >
                    Register
                </MyButtonText>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        marginBottom: 20,
        alignItems: 'center'
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
        marginTop: 30,
    },
    registerContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonForgot:{
        paddingHorizontal: 1,
        paddingVertical : 5,
    },
});

export default SignInScreen;

