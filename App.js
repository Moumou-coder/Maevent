import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
//navigation
import AppNavigator from "./navigation/AppNavigator";
//redux toolkit
import store from './reduxStore/store'
import {Provider} from 'react-redux'
import colors from "./constants/colors";


export default function App() {
    return (
            <SafeAreaView style={styles.container}>
                <AppNavigator/>
                <StatusBar style="auto"/>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
