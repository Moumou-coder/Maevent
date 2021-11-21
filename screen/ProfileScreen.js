import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Title} from 'react-native-paper';
import MyCard from "../components/MyCard";
import {Ionicons} from '@expo/vector-icons';


const ProfileScreen = props => {

    const username = "ProfileName";

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <TouchableOpacity style={styles.settingContainer}>
                    <Ionicons name="ios-settings" size={30} color="black"/>
                </TouchableOpacity>
                <View style={styles.avatarContainer}>
                    <Avatar.Image size={100} source={require('../assets/avatar/profilAvatar.jpg')}/>
                    <Title style={styles.pseudo}> {username} </Title>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text>
                        voici une description sur ma personnalité
                    </Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardContainer}>
                    <MyCard/>
                </View>
            </ScrollView>
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
        marginBottom: 10
    },
    pseudo: {
        color: '#191970',
        marginLeft: 20
    },
    descriptionContainer: {
        marginVertical: 10
    }
});

export default ProfileScreen;