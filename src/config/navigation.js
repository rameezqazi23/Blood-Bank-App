import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//custom components
import Login from '../screens/Login';
import Home from '../screens/Home';
// import Gallery from '../screens/ImagePicker';
// import Test from '../screens/Test';




const Stack = createStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                {/* <Stack.Screen name="Gallery" component={Gallery} />
                <Stack.Screen name="Test" component={Test} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;