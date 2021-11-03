import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//importation des different screens
import LoadingScreen from "./screen/LoadingScreen"
import SignInScreen from "./screen/SignInScreen"
import RegisterScreen from "./screen/RegisterScreen";


// let content = <LoadingScreen />
// let content = <SignInScreen />
let content = <RegisterScreen />


export default function App() {
  return (
    <View style={styles.container}>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
  },
});
