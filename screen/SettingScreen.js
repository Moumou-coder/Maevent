import React, {useState} from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Switch} from 'react-native-paper';
import MyButton from "../components/MyButton";
import colors from "../constants/colors";
import ModalLanguage from "../components/ModalLanguage";
import ModalProfile from "../components/ModalProfile";
import {deleteUser, getAuth, signOut} from "firebase/auth";
import {app, db} from '../firebase-config'
import {useDispatch} from "react-redux";
import {deleteCurrentUser, logout} from "../features/user/userSlice";
import {collection, getDocs, query, where} from "firebase/firestore";

const SettingScreen = props => {
    const dispatch = useDispatch();
    //states
    const [isNotificationSwitchOn, setIsNotificationSwitchOn] = useState(false);
    const onToggleSwitchNotification = () => setIsNotificationSwitchOn(!isNotificationSwitchOn);

    const [isLocalisationSwitchOn, setIsLocalisationSwitchOn] = useState(false);
    const onToggleSwitchLocalisation = () => setIsLocalisationSwitchOn(!isLocalisationSwitchOn);

    const [isModalLanguageVisible, setIsModalLanguageVisible] = useState(false)
    const [isModalProfileVisible, setIsModalProfileVisible] = useState(false)

    const [isDarkSwitchOn, setIsDarkSwitchOn] = useState(false);
    const onToggleSwitchDark = () => setIsDarkSwitchOn(!isDarkSwitchOn);

    const currentUserEmail = props.route.params.currentUser.email

    //signOut
    const handleSignOut = () => {
        dispatch(logout())
        const auth = getAuth(app);
        signOut(auth).then(() => {
            rootNavigation()
        }).catch((error) => {
            Alert.alert(error)
        });
    }
    //delete the current User of firebase
    const deleteThisUser = async () => {
        const u = query(collection(db, "users"), where("email", "==", currentUserEmail));
        const querySnapshot = await getDocs(u);
        querySnapshot.forEach((docEmail) => {
            dispatch(deleteCurrentUser(docEmail.id))
            rootNavigation()
        });
        deleteUserAuth()
    }
    const deleteUserAuth = () => {
        const auth = getAuth();
        const user = auth.currentUser;
        deleteUser(user).then(() => {
            console.log("user est bien supprimé de l'auth ")
        }).catch((error) => {
            Alert.alert(error)
        });
    }

    //navigation to root (signIn)
    const rootNavigation = () => {
        props.navigation.replace('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
                        onPressSubmit={() => {
                            console.log("submit the changes ")
                        }}
                        onPressPhoto={() => console.log("changer la photo de profil")}
                    />
                    <View style={styles.setting}>
                        <Text style={styles.settingLabel}> Notifications </Text>
                        <Switch value={isNotificationSwitchOn} onValueChange={onToggleSwitchNotification}/>
                    </View>
                    <View style={styles.setting}>
                        <Text style={styles.settingLabel}> Localisation </Text>
                        <Switch value={isLocalisationSwitchOn} onValueChange={onToggleSwitchLocalisation}/>
                    </View>
                    <View style={styles.setting}>
                        <Text style={styles.settingLabel}> Dark Theme </Text>
                        <Switch value={isDarkSwitchOn} onValueChange={onToggleSwitchDark}/>
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
                        <MyButton
                            style={styles.buttonDelete}
                            onPress={deleteThisUser}
                        >
                            Supprimer compte
                        </MyButton>
                    </View>
                </View>
                <View style={styles.copyContainer}>
                    <Text> © Maevent - tous les droits - 2021/2022</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginBottom: 50,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 50
    },
    setting: {
        borderBottomWidth: 1,
        borderBottomColor: '#eae5e5',
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
        marginTop: 50,
        marginBottom: 10
    },
    buttonLogOutContainer: {
        marginBottom: 10,
    },
    buttonDeleteContainer: {
        marginTop: 10,
    },
    buttonDelete: {
        backgroundColor: colors.danger
    },
    copyContainer: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20
    }
});

export default SettingScreen;