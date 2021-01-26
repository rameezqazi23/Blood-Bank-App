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

            <Text style={{textAlign: 'center'}}>Home Page</Text>
            {/* <Text style={{ textAlign: 'center', fontSize: 25 }}>Home Screen</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Gallery')}>
                <Text style={styles.btntxt}>Goto gallery</Text>
            </TouchableOpacity>

            <View>
                <TextInput onChangeText={(e) => setEmail(e)} value={email} keyboardType={'email-address'} style={{ textAlign: "center", justifyContent: 'center', alignItems: 'center' }} placeholder="Enter email" />
            </View>
            <View>
                <TextInput onChangeText={(e) => setPassword(e)} value={password} secureTextEntry={true} autoCompleteType='password' style={{ textAlign: "center", justifyContent: 'center' }} placeholder="Ente Password" />
            </View>

            <TouchableOpacity style={styles.btn} onPress={saveData}>
                <Text style={styles.btntxt}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btntxt}>Add social Acc</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Test')}>
                <Text style={styles.btntxt}>Test</Text>
            </TouchableOpacity> */}





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