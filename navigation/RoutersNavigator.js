import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Importations des screens
import SignInScreen from "../screen/SignInScreen";
import RegisterScreen from "../screen/RegisterScreen";
import HomeScreen from "../screen/HomeScreen";
import DetailsEventScreen from "../screen/DetailsEventScreen";
import AddEventScreen from "../screen/AddEventScreen";
import ProfileScreen from "../screen/ProfileScreen";
import SettingScreen from "../screen/SettingScreen";
import SearchScreen from "../screen/SearchScreen";

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
            <AuthStackNavigator.Screen name={"SignIn"} component={SignInScreen}/>
            <AuthStackNavigator.Screen name={"Register"} component={RegisterScreen}/>
            <AuthStackNavigator.Screen name={"HomeTab"} component={Tab}/>
        </AuthStackNavigator.Navigator>
    );
}

const TabNavigator = createBottomTabNavigator();
export const Tab = () => {
    return(
        <TabNavigator.Navigator initialRouteName="Home" screenOptions={defaultScreenOptions}>
            <TabNavigator.Screen name={"Home"} component={HomeNavigator} />
            <TabNavigator.Screen name={"Search"} component={SearchScreen} />
            <TabNavigator.Screen name={"Profile"} component={ProfileNavigator} />
        </TabNavigator.Navigator>
    );
}

const HomeStackNavigator = createNativeStackNavigator();
export const HomeNavigator = () => {
    return(
        <HomeStackNavigator.Navigator initialRouteName="HomeEvent" screenOptions={defaultScreenOptions}>
            <HomeStackNavigator.Screen name={"HomeEvent"} component={HomeScreen}/>
            <HomeStackNavigator.Screen name={"DetailsEvent"} component={DetailsEventScreen}/>
            <HomeStackNavigator.Screen name={"AddEvent"} component={AddEventScreen}/>
        </HomeStackNavigator.Navigator>
    );
}


const ProfileStackNavigator = createNativeStackNavigator();
export const ProfileNavigator = () => {
    return(
        <ProfileStackNavigator.Navigator initialRouteName="Account" screenOptions={defaultScreenOptions}>
            <ProfileStackNavigator.Screen name={"Account"} component={ProfileScreen} />
            <ProfileStackNavigator.Screen name={"Settings"} component={SettingScreen} />
        </ProfileStackNavigator.Navigator>
    );
}


const RoutersNavigator = props => {
};

export default RoutersNavigator;