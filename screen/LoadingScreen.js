import React from 'react';
import {Image, StyleSheet, View} from 'react-native';


const LoadingScreen = props => {
    return(
        //todo: voir discussion abdel pour loading page
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/logo/MaeventLogo.png')} />
            </View>
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

export default LoadingScreen;