import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {Title} from "react-native-paper";


const CommentsScreen = props => {

    const goBack = () => {
        props.navigation.goBack()
    }

    return (

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
            {/*<View style={styles.inputBottomField}>*/}
            {/*</View>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: 5,
    },
    headerModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 35,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        paddingBottom: 10,
    },
    inputBottomField: {
        flexDirection: 'row',
        marginHorizontal: 10,
        borderTopWidth: 1,
        borderTopColor: '#dcdcdc',
        paddingTop: 10,
    },
});

export default CommentsScreen;