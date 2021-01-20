import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';


import { LoginManager, AccessToken } from "react-native-fbsdk";
import auth from '@react-native-firebase/auth';




function Login() {
    async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        auth().signInWithCredential(facebookCredential)
            .then((user) => {
                console.log("data==>", user)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <View>
            <Button
                onPress={onFacebookButtonPress}
                title="login with facebook"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contaiiner: {
        textAlign: 'center',


    },

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

export default Login;