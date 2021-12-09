import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import MyCard from "../components/MyCard";
import ModalComments from "../components/ModalComments";

const HomeScreen = props => {

    const [isModalCommentsVisible, setIsModalCommentsVisible] = useState(false)
    //Navigations
    const addingEvent = () => {
        props.navigation.navigate('AddEvent')
    }
    const detailsEvent = () => {
        props.navigation.navigate('DetailsEvent')
    }

    return (
        <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                {/*todo: resize image, la mettre tout à gauche, boutton reste à sa palce */}
                <Image source={require('../assets/logo/Maevent_T.png')}/>
                <TouchableOpacity onPress={() => addingEvent()}>
                    <MaterialIcons name="add-circle-outline" size={30} color="black"/>
                </TouchableOpacity>
            </View>
            {/*TODO: créer une flatlist pour les card*/}
            {/*todo: modal comment */}
            <View>
                <MyCard
                    onPressComment={() => setIsModalCommentsVisible(true)}
                    onPressDetails={() => detailsEvent()}
                />
                <ModalComments
                    visible={isModalCommentsVisible}
                    onPressBack={() => setIsModalCommentsVisible(false)}
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
        justifyContent: 'space-around',
        marginTop: 50,
        marginBottom: 50
    },
});

export default HomeScreen;