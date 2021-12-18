import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Avatar, Title} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import {useSelector} from "react-redux";


const ProfileScreen = props => {
    const currentUser = useSelector((state) => state.user.value);
    console.log(currentUser)
    //Navigation to settings
    const settingsNavigation = () => {
        props.navigation.navigate('Settings', {currentUser: currentUser})
    }
    const comments = () => {
        props.navigation.navigate('Comments')
    }
    const detailsEvent = () => {
        props.navigation.navigate('DetailsEvent')
    }


    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <TouchableOpacity
                    style={styles.settingContainer}
                    onPress={() => settingsNavigation()}
                >
                    <Ionicons name="ios-settings" size={30} color="black"/>
                </TouchableOpacity>
                <View style={styles.avatarContainer}>
                    <Avatar.Image size={100} source={require('../assets/avatar/profilAvatar.jpg')}/>
                    <Title style={styles.pseudo}> {currentUser.pseudo} </Title>
                </View>
            </View>
            {/*<ScrollView showsVerticalScrollIndicator={false}>*/}
            {/*    <ListOfEvent*/}
            {/*        nav={props}*/}
            {/*    />*/}
            {/*</ScrollView>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#eae5e5',
        marginBottom: 10,
        marginTop: 45,
        marginLeft: 15,
        marginRight: 15
    },
    settingContainer: {
        alignItems: 'flex-end'
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    pseudo: {
        color: '#191970',
        marginLeft: 20,
        fontSize: 25
    },
});

export default ProfileScreen;