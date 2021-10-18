import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//importation des différentes activités
import LoadingScreen from "./screen/LoadingScreen"


let content = <LoadingScreen />

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
