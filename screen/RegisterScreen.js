import React, {useState} from 'react';
import {Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from "react-native-paper";
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import MyButtonText from "../components/MyButtonText";
import MyButton from "../components/MyButton";

const RegisterScreen = props => {

    const [isSecureEntry, setIsSecureEntry] = useState(true)
    const [isSecureEntryConfirm, setIsSecureEntryConfirm] = useState(true)

    //Navigation between screens
    const signInNavigation = () => {
        props.navigation.navigate('SignIn')
    }

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
                        <View style={styles.input}>
                            <MaterialIcons name="lock" size={24} color="black" style={styles.icons}/>
                            <TextInput
                                style={{width: "85%"}}
                                mode={"flat"}
                                label={"Confirm Password"}
                                placeholder={"********"}
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
                            onPress={() => console.log("Register Button")}
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