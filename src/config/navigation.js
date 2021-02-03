import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//custom components
import Login from '../screens/Login';
import Home from '../screens/Home';
import UserDetails from '../screens/UserDetails';
import AddDetails from '../screens/AddDetails';




const Stack = createStackNavigator();


function MainStackNavigator() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="UserDetails" component={UserDetails} />
            <Stack.Screen name="AddDetails" component={AddDetails} />
        </Stack.Navigator>
    );
}


// function ContactStackNavigator() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="User Details" component={UserDetails} />
//         </Stack.Navigator>

//     )

// }
export default MainStackNavigator;



// export { MainStackNavigator, ContactStackNavigator };