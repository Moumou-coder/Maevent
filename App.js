import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from "./constants/colors";

//importation des different screens
import LoadingScreen from "./screen/LoadingScreen"
import SignInScreen from "./screen/SignInScreen"
import RegisterScreen from "./screen/RegisterScreen";
import HomeScreen from "./screen/HomeScreen";
import ProfileScreen from "./screen/ProfileScreen";
import SettingScreen from "./screen/SettingScreen";
import AddEventScreen from "./screen/AddEventScreen";
import DetailsEventScreen from "./screen/DetailsEventScreen";
import TestScreen from "./screen/TestScreen";



// let content = <LoadingScreen />
// let content = <SignInScreen />
// let content = <RegisterScreen />
// let content = <HomeScreen />
// let content = <ProfileScreen/>
let content = <SettingScreen/>
// let content = <AddEventScreen/>
// let content = <DetailsEventScreen/>
// let content = <TestScreen/>

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
    backgroundColor: colors.accent
  },
});
