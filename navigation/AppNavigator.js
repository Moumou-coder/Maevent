import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from "./RoutersNavigator";

const AppNavigator = props => {
    return(
        <NavigationContainer>
            <AuthNavigator/>
        </NavigationContainer>
    );
}

export default AppNavigator;