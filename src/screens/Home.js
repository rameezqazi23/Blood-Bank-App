import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import database from '@react-native-firebase/database';




function Home({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const saveData = () => {
        let user = {
            email,
            password,

        }
        setEmail('')  //this will clear inputs...
        setPassword('')
        database().ref('/').child('users').push(user)
        console.log('user data==>', user)

    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>

            <Text style={{ textAlign: 'center' }}>Home Page</Text>


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