import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import database from '@react-native-firebase/database';

function Home({ navigation }) {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const saveData = () => {
    //     let user = {
    //         email,
    //         password,

    //     }
    //     setEmail('')  //this will clear inputs...
    //     setPassword('')
    //     database().ref('/').child('users').push(user)
    //     console.log('user data==>', user)

    // }


    return (
        <View style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <Button
                    onPress={() => navigation.navigate("UserDetails")}
                    title="Become a Donor"
                    type="outline"
                />


            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <Button
                    onPress={() => navigation.navigate("AddDetails")}
                    title="Find a Donor"
                    type="outline"
                />
            </View>


        </View >
    )
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        color: 'white',
        paddingTop: 8,
    },
    btntxt: {
        color: 'white',
        backgroundColor: 'black',
        width: 100,
        height: 30,
        textAlign: 'center',
        borderRadius: 50,



    }
})

export default Home;