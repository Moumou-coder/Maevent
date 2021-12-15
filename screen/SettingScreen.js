import React, {useState} from 'react';
import {Alert, Dimensions, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Switch} from 'react-native-paper';
import MyButton from "../components/MyButton";
import colors from "../constants/colors";
import ModalLanguage from "../components/ModalLanguage";
import ModalProfile from "../components/ModalProfile";
import { getAuth, signOut } from "firebase/auth";
import {app} from '../firebase-config'


const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const SettingScreen = props => {
    //states
    const [isNotificationSwitchOn, setIsNotificationSwitchOn] = useState(false);
    const onToggleSwitchNotification = () => setIsNotificationSwitchOn(!isNotificationSwitchOn);

    const [isLocalisationSwitchOn, setIsLocalisationSwitchOn] = useState(false);
    const onToggleSwitchLocalisation = () => setIsLocalisationSwitchOn(!isLocalisationSwitchOn);

    const [isModalLanguageVisible, setIsModalLanguageVisible] = useState(false)
    const [isModalProfileVisible, setIsModalProfileVisible] = useState(false)

    //signOut
    const handleSignOut = () => {
        const auth = getAuth(app);
        signOut(auth).then(() => {
            testNavigation()
        }).catch((error) => {
            Alert.alert(error)
        });
    }

    //navigation to root (signIn)
    const testNavigation = () => {
        props.navigation.replace('SignIn')
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/logo/Maevent_T.png')}/>
            </View>
            <View>
                <TouchableOpacity onPress={() => setIsModalProfileVisible(true)}>
                    <View style={styles.setting}>
                        <Text style={styles.settingLabel}> Modifier profil </Text>
                    </View>
                </TouchableOpacity>
                <ModalProfile
                    visible={isModalProfileVisible}
                    onPressClose={() => setIsModalProfileVisible(false)}
                    onPressSubmit={() => {console.log("submit the changes ")}}
                    onPressPhoto={() => console.log("changer la photo de profil")}
                />
                <View style={styles.setting}>
                    <Text style={styles.settingLabel}> Notifications </Text>
                    <Switch value={isNotificationSwitchOn} onValueChange={onToggleSwitchNotification} />
                </View>
                <View style={styles.setting}>
                    <Text style={styles.settingLabel}> Localisation </Text>
                    <Switch value={isLocalisationSwitchOn} onValueChange={onToggleSwitchLocalisation} />
                </View>
                <TouchableOpacity onPress={() => setIsModalLanguageVisible(true)}>
                    <View style={styles.setting}>
                        <Text style={styles.settingLabel}> Langues </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ModalLanguage visible={isModalLanguageVisible} onPress={() => setIsModalLanguageVisible(false)}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonLogOutContainer}>
                    <MyButton
                        onPress={handleSignOut}
                    >
                        Se déconnecter
                    </MyButton>
                </View>
                <View style={styles.buttonDeleteContainer}>
                    <MyButton style={styles.buttonDelete}> Supprimer compte </MyButton>
                </View>
            </View>
            <View style={styles.copyContainer}>
                <Text> © Maevent - tous les droits - 2021/2022</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        height: deviceHeight,
        justifyContent: 'space-between'
    },
    imageContainer:{
        alignItems: 'center',
        marginTop: 30
    },
    setting: {
        borderBottomWidth: 1,
        borderBottomColor: '#eae5e5',
        width: deviceWidth,
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    settingLabel: {
        fontSize: 18
    },
    buttonsContainer: {
        alignItems: 'center',
    },
    buttonLogOutContainer:{
        marginBottom: 10
    },
    buttonDeleteContainer:{
        marginTop: 10,
    },
    buttonDelete:{
        backgroundColor: colors.danger
    },
    copyContainer: {
        alignItems: 'center',
        marginBottom: 15
    }
});

export default SettingScreen;