import React from 'react';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';


const LoadingScreen = props => {
    return(
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