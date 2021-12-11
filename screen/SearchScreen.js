import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';


const SearchScreen = props => {
    return(
        <View style={styles.container}>
            <Text> search page </Text>
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

export default SearchScreen;