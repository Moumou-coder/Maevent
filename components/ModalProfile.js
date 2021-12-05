import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import colors from "../constants/colors";
import {Feather, MaterialIcons} from "@expo/vector-icons";
import {Title} from "react-native-paper";


const ModalProfile = props => {

    return(
        <Modal visible={props.visible} animationType={'slide'}>
            <View style={styles.modalContainer}>
                <View style={styles.headerModal}>
                    <MaterialIcons
                        name={'close'}
                        size={30}
                        onPress={props.onPressClose}
                    />
                    <Title> Modifier votre profil </Title>
                    <Feather
                        name="check"
                        size={30}
                        color={colors.primary}
                        onPress={props.onPressSubmit}
                    />
                </View>

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer:{
        marginBottom: 20
    },
    headerModal: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
});

export default ModalProfile;