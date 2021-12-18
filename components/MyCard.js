import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Entypo, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import {Title} from "react-native-paper";
import colors from "../constants/colors";

const MyCard = props => {

    const eventObject = {
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        date: props.date,
        hours: props.hours,
        price: props.price,
        description: props.description,
    }

    const detailsEventNavigation = () => {
        props.nav.navigation.navigate('DetailsEvent', eventObject)
    }

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={detailsEventNavigation}>
                <Image source={{uri: props.image}} style={styles.imageEvent}/>
            </TouchableOpacity>
            <View style={styles.contentCard}>
                <View>
                    <Title style={styles.titleCard}>{props.title}</Title>
                </View>
                <View style={styles.locationContainer}>
                    <Entypo name="location-pin" size={20} color='#4169e1'/>
                    <Text style={styles.addressEvent}>{props.address}</Text>
                </View>
                <View style={styles.actionsCard}>
                    {/*todo : fonctionnalité commentaires */}
                    <TouchableOpacity onPress={props.onPressComment} style={{marginRight: 25}}>
                        <MaterialCommunityIcons name="comment-outline" size={25} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 25}}>
                        {/*todo: rajouter icon favorite (rempli) quand activity se retrouve déjà dans le profil*/}
                        <MaterialIcons name="favorite-outline" size={25} color="black"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        borderWidth: 0.5,
        borderColor: colors.secondary,
        borderRadius: 15,
        height: 200,
        width: 375,
    },
    imageEvent: {
        flex: 1,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        width: 200
    },
    contentCard: {
        flexDirection: 'column',
        marginHorizontal: 10,
        marginVertical: 3,
        alignItems: 'center',
        width: '40%'
    },
    titleCard: {
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 50
    },
    locationContainer: {
        flexDirection: 'row',
        marginBottom: 50
    },
    actionsCard: {
        flexDirection: 'row',
    },
    addressEvent: {
        color: '#4169e1'
    },
});

export default MyCard;