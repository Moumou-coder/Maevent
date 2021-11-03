import React from 'react';
import {StyleSheet,Text,View} from 'react-native';


const AddEventScreen = props => {
    return(
        <View style={styles.container}>
            <Text> add event screen </Text>
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

export default AddEventScreen;