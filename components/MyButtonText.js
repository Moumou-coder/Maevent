import React from 'react';
import {StyleSheet,Text,View, TouchableOpacity} from 'react-native';
import colors from "../constants/colors";


const MyButtonText = props => {
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={ props.onPress }>
            <View style={props.style}>
                <Text style={{...styles.buttonText, ...props.style}}> { props.children } </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText:{
        color : colors.primary,
    }
});

export default MyButtonText;