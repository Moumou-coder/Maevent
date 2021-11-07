import React from 'react';
import {StyleSheet,Text,View, TouchableOpacity} from 'react-native';


const MyButtonText = props => {
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={ props.onPress }>
            <View style={props.style}>
                <Text style={[styles.buttonText, props.style]}> { props.children } </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText:{
        color : '#0000ff',
        fontWeight : 'bold',
    }
});

export default MyButtonText;