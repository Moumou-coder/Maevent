import React from 'react';
import {StyleSheet,Text,View, TouchableOpacity} from 'react-native';


const MyButton = props => {
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={ props.onPress }>
            <View style={[styles.button, props.style]}>
                <Text style={[styles.buttonText, props.style]}> { props.children } </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 25,
        height: 50,
        width: 250,
        paddingVertical: 14,
        paddingHorizontal: 24,
        backgroundColor : '#8a2be2'
    },
    buttonText:{
        textAlign: 'center',
        color : 'white',
    }
});

export default MyButton;