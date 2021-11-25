import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import MyCard from "../components/MyCard";

const HomeScreen = props => {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <Image source={require('../assets/logo/Maevent_T.png')}/>
                <TouchableOpacity onPress={() => console.log("rajouter une activité ")}>
                    <MaterialIcons name="add-circle-outline" size={30} color="black"/>
                </TouchableOpacity>
            </View>
            {/*TODO: créer une flatlist pour les card*/}
            <View>
                <MyCard/>
            </View>
            <View>
                <MyCard/>
            </View>
            <View>
                <MyCard/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
        marginBottom: 50
    },
});

export default HomeScreen;