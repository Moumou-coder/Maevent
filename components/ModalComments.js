import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal, Image, Dimensions} from 'react-native';
import colors from "../constants/colors";
import {Feather, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {Avatar, TextInput, Title} from "react-native-paper";
import MyButtonText from "./MyButtonText";

const deviceWidth = Dimensions.get('window').width

const ModalComments = props => {

    return(
        <Modal visible={props.visible} animationType={'slide'}>
            <View style={styles.modalContainer}>
                <View style={styles.headerModal}>
                    <Ionicons
                        name="arrow-back"
                        size={30}
                        color="black"
                        onPress={props.onPressBack}
                        style={{marginRight: 20}}
                    />
                    <Title> Commentaires </Title>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer:{
        flex: 1,
        marginTop: 5,
    },
    headerModal: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 15,
        alignItems: 'center',
    }
});

export default ModalComments;