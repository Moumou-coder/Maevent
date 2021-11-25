import React, {useState} from 'react';
import {Dimensions, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Switch} from 'react-native-paper';
import MyButton from "../components/MyButton";
import colors from "../constants/colors";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const SettingScreen = props => {

    const [isNotificationSwitchOn, setIsNotificationSwitchOn] = useState(false);
    const onToggleSwitchNotification = () => setIsNotificationSwitchOn(!isNotificationSwitchOn);

    const [isLocalisationSwitchOn, setIsLocalisationSwitchOn] = useState(false);
    const onToggleSwitchLocalisation = () => setIsLocalisationSwitchOn(!isLocalisationSwitchOn);

    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/logo/Maevent_T.png')}/>
            </View>
            <View>
                <TouchableOpacity>
                    <View style={styles.setting}>
                        <Text style={styles.settingLabel}> Modifier profil </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.setting}>
                    <Text style={styles.settingLabel}> Notifications </Text>
                    <Switch value={isNotificationSwitchOn} onValueChange={onToggleSwitchNotification} />
                </View>
                <View style={styles.setting}>
                    <Text style={styles.settingLabel}> Localisation </Text>
                    <Switch value={isLocalisationSwitchOn} onValueChange={onToggleSwitchLocalisation} />
                </View>
                <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                    <View style={styles.setting}>
                        <Text style={styles.settingLabel}> Langues </Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/*Ouverture du modal pour le choix de la langue*/}
            <Modal visible={isModalVisible} animationType={'slide'}>
                <View style={styles.modalContainer}>
                    <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 5, alignItems: 'center'}}>
                        <MaterialIcons
                            name={'close'}
                            size={30}
                            onPress={() => setIsModalVisible(false)}
                            style={{marginRight: 10}}
                        />
                        <Text style={{fontSize: 20}}> Choisissez votre langue </Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => console.log('french')}>
                        <View style={styles.language} >
                            <Text >
                                Français (france)
                            </Text>
                            <AntDesign name="check" size={24} color="#000080" style={styles.checkIcon}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Anglais')}>
                        <View style={styles.language}>
                            <Text>
                                English (usa)
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Neerlandais')}>
                        <View style={styles.language}>
                            <Text>
                                Nederlands (Belgie)
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Fin du modal & Button that allow users to delete account or log out */}
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonLogOutContainer}>
                    <MyButton> Se déconnecter </MyButton>
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
    },
    modalContainer:{
        marginBottom: 20
    },
    language:{
        height: 20,
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkIcon:{
        marginLeft: 12
    }
});

export default SettingScreen;