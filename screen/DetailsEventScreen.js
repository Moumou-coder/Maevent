import React, {useState} from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Entypo, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import {Title} from "react-native-paper";


const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const DetailsEventScreen = props => {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.posterContainer}>
                <ImageBackground source={require('../assets/zevent.jpg')} style={styles.posterEvent}>
                    <View style={styles.contentPosterContainer}>
                        <View>
                            <Entypo name="location-pin" size={24} color='#4169e1'/>
                            <Text> 0 km away</Text>
                        </View>
                        <Title> My Title Of Event </Title>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        width: deviceWidth,
        alignItems: 'center',
        marginTop: 35,
    },
    posterContainer: {
        width: '95%',
        borderRadius: 20,
        height: deviceHeight / 1.8
    },
    posterEvent: {
        flex: 1,
        width: '100%',
        borderRadius: 20,
        resizeMode: 'contain',
        overflow: 'hidden',
        opacity: 0.8
    },
    contentPosterContainer:{

    }
});

export default DetailsEventScreen;