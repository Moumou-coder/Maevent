import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const deviceWidth = Dimensions.get('window').width


const TestScreen = props => {


    return(
        <View style={styles.container}>
            <View>
                <Text>  Test Screen : </Text>
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
});

export default TestScreen;