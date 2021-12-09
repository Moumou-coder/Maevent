import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import colors from "./constants/colors";
import AppNavigator from "./navigation/AppNavigator";

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
        backgroundColor: colors.accent
    },
});
