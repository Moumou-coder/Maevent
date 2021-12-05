import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import colors from "../constants/colors";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";


const ModalLanguage = props => {

    return(
        <Modal visible={props.visible} animationType={'slide'}>
            <View style={styles.modalContainer}>
                <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 5, alignItems: 'center'}}>
                    <MaterialIcons
                        name={'close'}
                        size={30}
                        onPress={props.onPress}
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
    );
}

const styles = StyleSheet.create({
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

export default ModalLanguage;