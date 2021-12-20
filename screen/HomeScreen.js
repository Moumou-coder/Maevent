import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {ListOfEvent} from "../components/ListOfEvent";

const HomeScreen = props => {
    //Navigations
    const addingEvent = () => {
        props.navigation.navigate('AddEvent')
    }

    return (
        <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <Image source={require('../assets/logo/Maevent_T.png')}/>
                <TouchableOpacity onPress={() => addingEvent()}>
                    <MaterialIcons name="add-circle-outline" size={30} color="black"/>
                </TouchableOpacity>
            </View>
            <View style={styles.listEventContainer}>
                <ListOfEvent
                    nav={props}
                />
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
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 35,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        paddingBottom: 10,
    },
    listEventContainer: {
        marginBottom: 140
    }
});

export default HomeScreen;