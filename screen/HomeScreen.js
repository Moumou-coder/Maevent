import React from 'react';
import {StyleSheet,Text,View} from 'react-native';


const HomeScreen = props => {
    return(
        <View style={styles.container}>
            <Text> Home screen </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeScreen;