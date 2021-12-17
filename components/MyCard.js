import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Entypo, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

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

    return(
        //TODO: rajouter un effet shadow
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={detailsEventNavigation}>
                <Image source={{uri:props.image }} style={styles.imageEvent}/>
            </TouchableOpacity>
            <View style={styles.contentCard}>
                <View>
                    <Text style={styles.titleCard}>{props.title}</Text>
                </View>
                <View style={styles.locationContainer}>
                    <Entypo name="location-pin" size={20} color='#4169e1' />
                    <Text style={styles.addressEvent}>{props.address}</Text>
                </View>
                <View style={styles.participantContainer}>
                    <Text style={styles.participantTxt}>participants : x</Text>
                </View>
                <View style={styles.actionsCard}>
                    {/*todo: voir si faire ou pas en fonction du temps, fct commentaires (amelioration)*/}
                    <TouchableOpacity onPress={props.onPressComment}>
                        <MaterialCommunityIcons name="comment-outline" size={25} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        {/*todo: rajouter icon favorite (rempli) quand activity se retrouve déjà dans le profil*/}
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
        fontSize: 18
    },
    addressEvent:{
        color: '#4169e1'
    },
    participantTxt:{
        color: '#daa520'
    }
});

export default MyCard;