import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {Title} from "react-native-paper";


const CommentsScreen = props => {

    const goBack = () => { props.navigation.goBack() }

    return(

            <View style={styles.Container}>
                <View style={styles.headerModal}>
                    <Ionicons
                        name="arrow-back"
                        size={30}
                        color="black"
                        style={{marginRight: 20}}
                        onPress={() => goBack()}
                    />
                    <Title> Commentaires </Title>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        marginTop: 5,
    },
    headerModal: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 15,
        alignItems: 'center',
    }
});

export default CommentsScreen;