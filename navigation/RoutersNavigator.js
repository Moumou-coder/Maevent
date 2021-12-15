import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Importations des screens
import SignInScreen from "../screen/SignInScreen";
import RegisterScreen from "../screen/RegisterScreen";
import HomeScreen from "../screen/HomeScreen";
import DetailsEventScreen from "../screen/DetailsEventScreen";
import AddEventScreen from "../screen/AddEventScreen";
import ProfileScreen from "../screen/ProfileScreen";
import SettingScreen from "../screen/SettingScreen";
import SearchScreen from "../screen/SearchScreen";
import CommentsScreen from "../screen/CommentsScreen";

//Import Constant colors
import colors from "../constants/colors";
import {Entypo, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';

//screenOptions
const defaultScreenOptions = {
    headerShown: false
}
const defaultTabScreenOptions = {
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: colors.accent
    },
}
const defaultSize = 25

//Premier bloc pour authentication
const AuthStackNavigator = createNativeStackNavigator();
export const AuthNavigator = () => {
    return (
        <AuthStackNavigator.Navigator initialRouteName="SignIn" screenOptions={defaultScreenOptions}>
            <AuthStackNavigator.Screen name={"SignIn"} component={SignInScreen}/>
            <AuthStackNavigator.Screen name={"Register"} component={RegisterScreen}/>
            <AuthStackNavigator.Screen name={"HomeLogin"} component={HomeNavigator}/>
            <AuthStackNavigator.Screen name={"ProfileLogin"} component={Tab}/>
        </AuthStackNavigator.Navigator>
    );
}

//Navigation pour TabBottomBar
const TabNavigator = createBottomTabNavigator();
export const Tab = () => {
    return (
        <TabNavigator.Navigator screenOptions={defaultTabScreenOptions}>
            <TabNavigator.Screen
                name={"Home"}
                component={HomeScreen}
                options={{
                    tabBarLabel: 'My Home',
                    tabBarIcon: ({color, size, focused}) => (
                        <Entypo
                            name="home"
                            size={defaultSize}
                            color={focused ? colors.primary : colors.secondary}
                        />
                    ),
                }}
            />
            <TabNavigator.Screen
                name={"Search"}
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({color, size, focused}) => (
                        <FontAwesome
                            name="filter"
                            size={defaultSize}
                            color={focused ? colors.primary : colors.secondary}
                        />
                    ),
                }}
            />
            <TabNavigator.Screen
                name={"Profile"}
                component={ProfileNavigator}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({color, size, focused}) => (
                        <MaterialCommunityIcons
                            name="account"
                            size={defaultSize}
                            color={focused ? colors.primary : colors.secondary}
                        />
                    ),
                }}
            />
        </TabNavigator.Navigator>
    );
}

//Bloc lié au Home pour les events
const HomeStackNavigator = createNativeStackNavigator();
export const HomeNavigator = () => {
    return (
        <HomeStackNavigator.Navigator screenOptions={defaultScreenOptions}>
            <HomeStackNavigator.Screen name={"HomeEvent"} component={Tab}/>
            <HomeStackNavigator.Screen name={"DetailsEvent"} component={DetailsEventScreen}/>
            <HomeStackNavigator.Screen name={"AddEvent"} component={AddEventScreen}/>
            <HomeStackNavigator.Screen name={"Comments"} component={CommentsScreen}/>
        </HomeStackNavigator.Navigator>
    );
}

//liaision avec le screen setting et profile
const ProfileStackNavigator = createNativeStackNavigator();
export const ProfileNavigator = () => {
    return (
        <ProfileStackNavigator.Navigator initialRouteName="Account" screenOptions={defaultScreenOptions}>
            <ProfileStackNavigator.Screen name={"Account"} component={ProfileScreen}/>
            <ProfileStackNavigator.Screen name={"Settings"} component={SettingScreen}/>
        </ProfileStackNavigator.Navigator>
    );
}


const RoutersNavigator = props => {
};

export default RoutersNavigator;