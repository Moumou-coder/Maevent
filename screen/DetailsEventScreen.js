import React from 'react';
import {Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Entypo, FontAwesome, Ionicons, Octicons} from '@expo/vector-icons';
import {Caption, Title} from "react-native-paper";
import colors from "../constants/colors";
import MyButton from "../components/MyButton";
import {useDispatch} from "react-redux";
import {deleteEvent} from "../features/event/eventSlice";
import {db} from '../firebase-config'
import { collection, query, where, getDocs } from "firebase/firestore";

const deviceHeight = Dimensions.get('window').height

const DetailsEventScreen = props => {

    //récuper depuis firebase id de l'event et le supprimer depuis le store
    const dispatch = useDispatch();
    const deleteThisEvent = async () => {
        const q = query(collection(db, "event"), where("id", "==", superEventObject.id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            dispatch(deleteEvent(doc.id))
            props.navigation.replace("HomeEvent")
        });
    }

    // passage des de paramètres par navigation
    const superEventObject = props.route.params;
    //navigations
    const goBack = () =>{
        props.navigation.goBack();
    }
    return (
        <ScrollView>
            <View style={styles.screenContainer}>
                <View style={styles.posterContainer}>
                    <ImageBackground source={{uri: superEventObject.image}} style={styles.posterEvent}>
                        <View style={styles.contentPosterContainer}>
                            {/*todo: ajouter icon heart quand c'est deja rajoutee ou lors du clickEvent*/}
                            <TouchableOpacity style={styles.backButton} onPress={() => goBack()}>
                                <Ionicons name="arrow-back" size={35} color={colors.white} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.likeButton}>
                                <FontAwesome name="heart-o" size={35} color={colors.white} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.locationContent} activeOpacity={0.5}>
                                <Entypo name="location-pin" size={24} color={colors.white}/>
                                <Text style={styles.txtLocation}> 0 km away</Text>
                            </TouchableOpacity>
                            <View style={{marginLeft: 5}}>
                                <Title style={styles.posterTxt}> {superEventObject.title} </Title>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Octicons name="calendar" size={27} color={colors.primary}/>
                        <View style={styles.subInfo}>
                            <Caption style={styles.captionTxt}> Date </Caption>
                            <Text style={styles.txtInfo}> {superEventObject.date} </Text>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <Ionicons name="time-outline" size={27} color={colors.primary}/>
                        <View style={styles.subInfo}>
                            <Caption style={styles.captionTxt}> Time </Caption>
                            <Text style={styles.txtInfo}> {superEventObject.hours} </Text>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <FontAwesome name="euro" size={27} color={colors.primary}/>
                        <View style={styles.subInfo}>
                            <Caption style={styles.captionTxt}> Price </Caption>
                            <Text style={styles.txtInfo}> {superEventObject.price} </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={{color: '#696969'}}> {superEventObject.description} </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <MyButton
                        onPress={deleteThisEvent}
                        style={{backgroundColor: colors.danger, width: 150,}}
                    >
                        delete
                    </MyButton>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        marginBottom: 20
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
        width: '90%',
        justifyContent: 'center'
    },
    likeButton: {
        position: 'absolute',
        right: 30,
        top: 30,
    },
    backButton:{
        position: 'absolute',
        left: 15,
        top: 25,
    }
});

export default DetailsEventScreen;