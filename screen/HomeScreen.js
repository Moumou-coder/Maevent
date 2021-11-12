import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import MyButton from "../components/MyButton";


const HomeScreen = props => {
    return(
        <View style={styles.container}>
            <MyButton style={styles.button}>
                Testing
            </MyButton>
            <View style={{backgroundColor: '#c69c6d'}}>
                <Text>
                    ceci est un big test
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button :{
        backgroundColor: '#930d8a'
    }
});

export default HomeScreen;