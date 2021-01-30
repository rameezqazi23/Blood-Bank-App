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


function MainStackNavigator() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="Gallery" component={Gallery} />
                <Stack.Screen name="Test" component={Test} /> */}
        </Stack.Navigator>
    );
}

// function DrawerNav() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName="Home">
//                 <Drawer.Screen name="Home" component={Home} />
//                 <Drawer.Screen name="UserDetails" component={UserDetails} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// }

export default MainStackNavigator;