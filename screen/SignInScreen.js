import React, {useState} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from "react-native-paper";
import {AntDesign, MaterialIcons} from '@expo/vector-icons'


const SignInScreen = props => {

    const [isSecureEntry, setIsSecureEntry] = useState(true)

    return(
        <KeyboardAvoidingView style={styles.container} behavior={"height"} >
            {/*TODO: verifier si la couleur mauve convient ou devrions nous changer de couleurs ?*/}
            <View style={styles.imageContainer}>
                <Image source={require('../assets/logo/MaeventLogo.png')} />
                <Text style={{marginTop:10}}>Welcome on Maevent</Text>
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
                        theme={{ colors: {background: "transparent"} }}
                        required
                    />
                </View>
                <View style={styles.input}>
                    <MaterialIcons name="lock-outline" size={24} color="black" style={styles.icons} />
                    <TextInput
                        style={{width: "85%"}}
                        mode={"flat"}
                        label={"Password"}
                        placeholder={"********"}
                        theme={{ colors: {background: "transparent"} }}
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
            </View>
            {/*TODO: rectifier color hover of buttons : sign in and register*/}
            <View style={styles.loginContainer}>
                <Button
                    style={styles.loginButton}
                    mode={"contained"} onPress={() => console.log("login Button")}
                    uppercase={false}
                >
                    Sign In
                </Button>
                {/*TODO: add the button text Forgot your password ?*/}
            </View>
            <View style={styles.registerContainer}>
                <Text style={{color:'black'}}>
                    First time here ?
                </Text>
                <Button
                    mode={"text"}
                    onPress={() => console.log("new account register button")}
                    compact={true}
                    uppercase={false}
                >
                    Register
                </Button>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        marginBottom : 20,
        alignItems:'center'
    },
    icons:{
        marginTop:10,
        marginLeft: 5,
        marginRight: 10
    },

    input:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    loginContainer:{
        marginTop: 20,
    },
    loginButton:{
        borderRadius:25,
        height:50,
        width:250,
        borderWidth :1,
        justifyContent:'center'
    },
    registerContainer:{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default SignInScreen;

