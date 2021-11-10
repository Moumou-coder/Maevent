import React from 'react';
import {StyleSheet,Text,View} from 'react-native';


const DetailsEventScreen = props => {
    return(
        <View style={styles.container}>
            <Text> Details event screen </Text>
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

export default DetailsEventScreen;