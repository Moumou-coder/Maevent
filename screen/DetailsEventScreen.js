import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Entypo, FontAwesome, Ionicons, Octicons} from '@expo/vector-icons';
import {Caption, Title} from "react-native-paper";
import colors from "../constants/colors";
import MyButton from "../components/MyButton";


const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const DetailsEventScreen = props => {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.posterContainer}>
                <ImageBackground source={require('../assets/zevent.jpg')} style={styles.posterEvent}>
                    <View style={styles.contentPosterContainer}>
                        {/*todo: ajouter icon heart quand c'est deja rajoutee ou lors du clickEvent*/}
                        <TouchableOpacity style={styles.likeButton}>
                            <FontAwesome name="heart-o" size={35} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.locationContent} activeOpacity={0.5}>
                            <Entypo name="location-pin" size={24} color={colors.white}/>
                            <Text style={styles.txtLocation}> 0 km away</Text>
                        </TouchableOpacity>
                        <View style={{marginLeft: 5}}>
                            <Title style={styles.posterTxt}> My Title Of Event </Title>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.info}>
                    <Octicons name="calendar" size={27} color={colors.primary}/>
                    <View style={styles.subInfo}>
                        <Caption style={styles.captionTxt}> Date </Caption>
                        <Text style={styles.txtInfo}> 19/12/21 </Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <Ionicons name="time-outline" size={27} color={colors.primary}/>
                    <View style={styles.subInfo}>
                        <Caption style={styles.captionTxt}> Time </Caption>
                        <Text style={styles.txtInfo}> 00:00 </Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <FontAwesome name="euro" size={27} color={colors.primary}/>
                    <View style={styles.subInfo}>
                        <Caption style={styles.captionTxt}> Price </Caption>
                        <Text style={styles.txtInfo}> 50€ </Text>
                    </View>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={{color: '#696969'}}>
                    Un paragraphe est une section de texte en prose vouée au développement d'un point particulier
                    souvent au moyen de plusieurs phrases, dans la continuité du précédent et du suivant.
                    Sur le plan typographique, le paragraphe est compris entre deux alinéas, qui s'analysent aussi comme
                    une « ponctuation blanche ».
                    Le symbole du paragraphe est §. La fin d'un paragraphe était autrefois indiquée par un
                    pied-de-mouche (¶).
                </Text>
            </View>
            {/*todo: ajouter les fonctionnalités correspondantes + navigation*/}
            <View style={styles.buttonContainer}>
                <MyButton
                    onPress={()=>{console.log("edit")}}
                    style={{width: 150,}}
                >
                    Edit
                </MyButton>
                <MyButton
                    onPress={()=>{console.log("Delete")}}
                    style={{backgroundColor: colors.danger, width: 150,}}
                >
                    delete
                </MyButton>
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
        height: deviceHeight / 1.8,
    },
    posterEvent: {
        flex: 1,
        width: '100%',
        borderRadius: 20,
        resizeMode: 'contain',
        overflow: 'hidden',
        opacity: 0.9
    },
    contentPosterContainer: {
        height: deviceHeight / 1.9,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    posterTxt: {
        color: colors.white,
        fontSize: 25
    },
    locationContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    txtLocation: {
        color: colors.white,
        fontSize: 15,
        fontStyle: 'italic',
    },
    infoContainer: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#eae5e5",
        marginTop: 20,
        height: 70,
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    subInfo: {
        alignItems: 'center'
    },
    captionTxt: {
        fontSize: 13
    },
    txtInfo: {
        fontWeight: 'bold'
    },
    descriptionContainer: {
        width: '95%',
        padding: 5,
        marginTop: 15,
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around'
    },
    likeButton: {
        position: 'absolute',
        right: 30,
        top: 30,
    }
});

export default DetailsEventScreen;