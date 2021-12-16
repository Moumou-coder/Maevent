import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal, Image, Dimensions, ScrollView} from 'react-native';
import colors from "../constants/colors";
import {Feather, MaterialIcons} from "@expo/vector-icons";
import {Avatar, TextInput, Title} from "react-native-paper";
import MyButtonText from "./MyButtonText";

const deviceWidth = Dimensions.get('window').width

const ModalProfile = props => {

    return (
        <Modal visible={props.visible} animationType={'slide'}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.modalContainer}>
                    <View style={styles.headerModal}>
                        <MaterialIcons
                            name={'close'}
                            size={30}
                            onPress={props.onPressClose}
                        />
                        <Title> Modifier votre profil </Title>
                        {/*todo: voir video passage de param modal vers screen (setting) */}
                        <Feather
                            name="check"
                            size={30}
                            color={colors.primary}
                            onPress={props.onPressSubmit}
                        />
                    </View>
                    <View style={styles.photoContainer}>
                        <Avatar.Image size={100} source={require('../assets/avatar/profilAvatar.jpg')}/>
                        <MyButtonText
                            style={styles.btnTxtPhoto}
                            onPress={props.onPressPhoto}
                        >
                            Changer la photo de profil
                        </MyButtonText>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            mode={"flat"}
                            label={"Pseudo"}
                            placeholder={"IamDiamond"}
                            theme={{colors: {background: "transparent"}}}
                            required
                        />
                        <TextInput
                            style={styles.input}
                            mode={"flat"}
                            label={"Bio"}
                            placeholder={"I like to go to a crazy event with my friends"}
                            theme={{colors: {background: "transparent"}}}
                            multiline={true}
                            required
                        />
                    </View>
                </View>
            </ScrollView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        marginTop: 5,
        marginBottom: 10
    },
    headerModal: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    photoContainer: {
        alignItems: 'center',
        marginVertical: 30
    },
    btnTxtPhoto: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5
    },
    inputContainer: {
        width: deviceWidth,
        alignItems: 'center'
    },
    input: {
        width: '95%',
        marginVertical: 10
    }
});

export default ModalProfile;