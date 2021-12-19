import React, {useEffect, useState} from "react";
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
        country: props.country,
        date: props.date,
        hours: props.hours,
        price: props.price,
        description: props.description,
    }

    //fetch information api Json
    const myCountry = eventObject.country
    const countryInfoApi = "https://restcountries.com/v3.1/name/" + myCountry + "?fields=name,capital,subregion,languages,currrencies,demonyms,maps,population,timezones,flags,altSpellings";
    const [countryData, setCountryData] = useState([]);


    useEffect(() => {
        fetch(countryInfoApi)
            .then((result) => result.json())
            .then((json) => setCountryData(json))
            .catch((error) => alert(error))
    }, [])

    const detailsEventNavigation = () => {
        props.nav.navigation.navigate('DetailsEvent', eventObject)
    }
    const commentsEventNavigation = () => {
        props.nav.navigation.navigate('Comments', eventObject)
    }
    const CountryScreenNav = () => {
        props.nav.navigation.navigate('CountryInfo', countryData)
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
                    <TouchableOpacity onPress={CountryScreenNav}>
                        <Text style={styles.addressEvent}>{props.country}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.actionsCard}>
                    {/*todo : fonctionnalité commentaires */}
                    <TouchableOpacity onPress={commentsEventNavigation} style={{marginRight: 25}}>
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
        width: '40%',
        height: 180,
        justifyContent: 'space-between',

    },
    titleCard: {
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center'
    },
    locationContainer: {
        flexDirection: 'row',
    },
    actionsCard: {
        flexDirection: 'row',
    },
    addressEvent: {
        color: '#4169e1'
    },
});

export default MyCard;