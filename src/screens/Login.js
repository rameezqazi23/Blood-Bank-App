// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Switch,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,

} from 'react-native';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {

        auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {

                var user = userCredential.user;
                console.log("User Email==>", user.email)
                console.log("User UID==>", user.uid)
                database().ref('/users').on('child_added', (data) => {
                    console.log(data.val())

                })


                // history.push('/Home')
                alert("Sign In successfully")




                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('error message==>', errorMessage)
                alert(errorMessage)
            });



    }

    const signUp = () => {

        auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                database().ref('/').child('/users').push({
                    email: user.email,
                    id: user.uid,
                })
                alert("Sign Up Successfully login again for further proceed")



                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
                // ..
            })


    }

    return (
        <ScrollView alwaysBounceVertical={true}>
            <View style={styles.container}>



                <View style={styles.main1}>
                    <Image style={styles.image1} source={{ uri: 'https://qph.fs.quoracdn.net/main-qimg-56e5cd36ea29abdd5b981a9777c0669b' }} />
                    {/* <Image style={styles.image2} source={{ uri: 'https://media1.giphy.com/media/1poV2Eac3xFYFQQzve/source.gif' }} /> */}


                </View>

                <View style={styles.main2}>
                    <Text style={styles.logintxt}>LOG IN</Text>
                    <Text style={{ marginLeft: 30, marginTop: 25, fontSize: 20, fontWeight: "bold" }}>Email</Text>
                    <TextInput onChangeText={(e) => setEmail(e)} style={styles.textinput} placeholder="Enter email" />

                    <Text style={{ marginLeft: 30, marginTop: 25, fontSize: 20, fontWeight: "bold" }}>Password</Text>
                    <TextInput onChangeText={(e) => setPassword(e)} secureTextEntry={true} style={styles.textinput} placeholder="Enter password" />

                    <TouchableOpacity style={styles.btn} onPress={signIn}>
                        <Text style={styles.btntxt}>Login</Text>
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 70 }}>or</Text>
                    <TouchableOpacity style={styles.btn} onPress={signUp}>
                        <Text style={styles.btntxt}>Create Account</Text>
                    </TouchableOpacity>
                </View>

                {/* <StatusBar style="auto" /> */}

            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF66',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card1: {
        backgroundColor: 'white',
        minHeight: 300,
        width: 300,
        borderRadius: 15,
        marginTop: 50,
        marginBottom: 50,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,

    },

    txt: {
        color: 'red',
        fontSize: 30,
    },
    main1: {
        flex: 1,
        width: "100%",
        backgroundColor: '#FFFF66',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80,
    },
    main2: {
        flex: 2,
        width: "100%",

        minHeight: 500,
        backgroundColor: 'white',
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
    },
    image1: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
        borderRadius: 35,


    },
    image2: {
        resizeMode: "contain",
        width: 75,
        height: 75,


    },
    logintxt: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 25,
        paddingTop: 25,

    },
    textinput: {
        backgroundColor: '#DE354C',
        color: 'white',
        width: 220,
        height: 50,
        marginLeft: 25,
        marginTop: 5,
        paddingLeft: 10,
        borderRadius: 25,

    },
    btn: {
        alignItems: 'flex-start',
        marginLeft: 30,
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



    },

});

export default Login;
