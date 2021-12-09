import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importations des screens
import SignInScreen from "../screen/SignInScreen";
import RegisterScreen from "../screen/RegisterScreen";
import HomeScreen from "../screen/HomeScreen";
import DetailsEventScreen from "../screen/DetailsEventScreen";
import AddEventScreen from "../screen/AddEventScreen";
import ProfileScreen from "../screen/ProfileScreen";
import SettingScreen from "../screen/SettingScreen";

//Import Constant colors
import colors from "../constants/colors";

//screenOptions
const defaultScreenOptions = {
    headerShown : false
}


const AuthStackNavigator = createNativeStackNavigator();
export const AuthNavigator = () => {
    return(
        <AuthStackNavigator.Navigator  initialRouteName="SignIn" screenOptions={defaultScreenOptions}>
            <AuthStackNavigator.Screen
                name={"SignIn"}
                component={SignInScreen}
            />
            <AuthStackNavigator.Screen
                name={"Register"}
                component={RegisterScreen}
            />
            <AuthStackNavigator.Screen
                name={"HomeNavigator"}
                component={HomeNavigator}
            />
        </AuthStackNavigator.Navigator>
    );
}

const HomeStackNavigator = createNativeStackNavigator();
export const HomeNavigator = () => {
    return(
        <HomeStackNavigator.Navigator initialRouteName="Home" screenOptions={defaultScreenOptions}>
            <HomeStackNavigator.Screen
                name={"Home"}
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name={"DetailsEvent"}
                component={DetailsEventScreen}
            />
            <HomeStackNavigator.Screen
                name={"AddEvent"}
                component={AddEventScreen}
            />
        </HomeStackNavigator.Navigator>
    );
}










const RoutersNavigator = props => {
};

export default RoutersNavigator;