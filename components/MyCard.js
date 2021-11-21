import React, {useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Entypo, MaterialCommunityIcons, MaterialIcons   } from '@expo/vector-icons';

const MyCard = props => {

    return(
        <View style={styles.cardContainer}>
            <View>
                <Image source={require('../assets/zevent.jpg')} style={styles.imageEvent}/>
            </View>
            <View style={styles.contentCard}>
                <View>
                    <Text style={styles.titleCard}> Card Title </Text>
                </View>
                <View style={styles.locationContainer}>
                    <Entypo name="location-pin" size={20} color='#4169e1' />
                    <Text style={styles.addressEvent}> address event</Text>
                </View>
                <View style={styles.participantContainer}>
                    <Text style={styles.participantTxt}>participants : x</Text>
                </View>
                <View style={styles.actionsCard}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="comment-outline" size={25} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="favorite-outline" size={25} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection : 'row',
        marginHorizontal:10,
        marginVertical: 5,
        padding:5,
        borderWidth:1,
        borderRadius:10,
        height: 130
    },
    imageEvent:{
        flex: 1,
        width: 200,
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 20,
    },
    contentCard:{
        paddingLeft:10,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal:1,
    },
    locationContainer:{
        flexDirection: 'row',
        marginTop: 5,

    },
    participantContainer:{
        paddingLeft: 5,

    },
    actionsCard:{
        flexDirection: 'row',
        marginTop: 20,
        paddingLeft: 5,
        justifyContent: 'space-evenly'
    },
    titleCard:{
        fontWeight: 'bold',
        fontSize: 16
    },
    addressEvent:{
        color: '#4169e1'
    },
    participantTxt:{
        color: '#daa520'
    }
});

export default MyCard;