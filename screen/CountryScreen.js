import React from 'react';
import {Dimensions, Image, Linking, StyleSheet, Text, View} from "react-native";
import colors from "../constants/colors";
import {Title} from "react-native-paper";
import {Ionicons} from "@expo/vector-icons";
import MyButton from "../components/MyButton";

const deviceHeight = Dimensions.get('window').height

const CountryScreen = props => {
    const superCountryObject = props.route.params;

    const name = superCountryObject[0].name.common;
    const alSpellings = superCountryObject[0].altSpellings[0]
    const capital = superCountryObject[0].capital
    const citoyen = superCountryObject[0].demonyms.fra.f
    const flag = superCountryObject[0].flags.png
    const googleMaps = superCountryObject[0].maps.googleMaps
    const openStreetMaps = superCountryObject[0].maps.openStreetMaps
    const population = superCountryObject[0].population
    const subregion = superCountryObject[0].subregion
    const timeZone = superCountryObject[0].timezones

    //nav
    const goBack = () => {
        props.navigation.goBack()
    }
    return (
        <View style={styles.screenContainer}>
            <View style={styles.header}>
                <Ionicons
                    name="arrow-back"
                    size={30}
                    color="black"
                    style={{marginRight: 20}}
                    onPress={() => goBack()}
                />
                <Title> Infos Country </Title>
            </View>
            <View style={styles.containers}>
                <Text style={styles.theCountry}>
                    {name} - ( {alSpellings} )
                </Text>
            </View>
            <View style={styles.containers}>
                <Image source={{uri: flag}} style={styles.flagCountry}/>
            </View>
            <View style={styles.containers}>
                <Text style={styles.info}>
                    Région :
                    <Text style={styles.infoData}>
                        {subregion}
                    </Text>
                </Text>
                <Text style={styles.info}>
                    Fuseau horaires :
                    <Text style={styles.infoData}>
                        {timeZone}
                    </Text>
                </Text>
                <Text style={styles.info}>
                    Capital :
                    <Text style={styles.infoData}>
                        {capital}
                    </Text>
                </Text>
                <Text style={styles.info}>
                    Population :
                    <Text style={styles.infoData}>
                        {population}
                    </Text>
                    d'habitants
                </Text>
                <Text style={styles.info}>
                    Citoyen :
                    <Text style={styles.infoData}>
                        {citoyen}
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <MyButton
                    style={styles.buttons}
                    onPress={() => Linking.openURL(googleMaps)}
                >
                    googleMaps
                </MyButton>
                <MyButton
                    onPress={() => Linking.openURL(openStreetMaps)}
                    style={styles.buttons}
                >
                    openStreetMaps
                </MyButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 35,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        paddingBottom: 10,
    },
    theCountry: {
        color: colors.primary,
        fontSize: 30,
        fontWeight: 'bold'
    },
    flagCountry: {
        width: '70%',
        borderRadius: 10,
        height: deviceHeight / 4,
    },
    containers: {
        alignItems: 'center',
        marginBottom: 50
    },
    info: {
        fontSize: 18,
        marginVertical: 2,
        fontStyle: 'italic'
    },
    infoData: {
        color: colors.secondary,
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    buttons: {
        width: 150,
        backgroundColor: 'transparent',
        color: 'black',
        borderColor: colors.secondary,
        borderWidth: 0.5,
    }
});


export default CountryScreen;
