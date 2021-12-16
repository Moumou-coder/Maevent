import {StatusBar} from 'expo-status-bar';
import React, {useReducer} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
//navigation
import AppNavigator from "./navigation/AppNavigator";
//redux toolkit
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import eventReducer from './features/event/eventSlice'


export default function App() {
    const store = configureStore({
        reducer: {
            event: eventReducer,
        },
    });

    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <AppNavigator/>
                <StatusBar style="auto"/>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
