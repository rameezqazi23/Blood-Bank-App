import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator} from './navigation';
import UserDetails from '../screens/UserDetails';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={UserDetails} />
            {/* <Tab.Screen name="Contact" component={ContactStackNavigator} /> */}
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;