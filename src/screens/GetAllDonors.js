import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Picker,
} from 'react-native';

//Donor Details
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';



function GetAllDonors({ route, navigation }) {

    database().ref('/donatePersonData').on('child_added', (data)=>{
        console.log(data.val())
        
    })

    return (

        <ScrollView>
            <View style={styles.container}>

                <View style={styles.main1}>

                    <Text style={styles.headertxt}>
                        Here are the some donors they Help Humanity, Match the preferences & get Blood
                    </Text>

                    {/* <Text style={styles.headertxt}>Personal Details to become donor</Text> */}


                </View>

                <View style={styles.main2}>

                    <View style={{ justifyContent: 'center', textAlign: 'center' }}>

                        <View style={{ borderStyle: 'solid', borderRadius: 15, borderWidth: 1, width: 300, justifyContent: 'center', alignSelf: 'center' }}>

                            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Your Details</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', opacity: 0.7, paddingLeft: 10 }}>Name: </Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', opacity: 0.7, paddingLeft: 10 }}>Email: </Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', opacity: 0.7, paddingLeft: 10 }}>Phone No: </Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', opacity: 0.7, paddingLeft: 10 }}>Age: </Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', opacity: 0.7, paddingLeft: 10 }}>Wieght: </Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', opacity: 0.7, paddingLeft: 10 }}>Blood Group: </Text>



                        </View>




                    </View>

                </View>

            </View>



        </ScrollView>


    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main1: {
        flex: 1,
        width: 360,
        height: 200,

        backgroundColor: '#201F1d',
        // alignItems: 'center',
        // justifyContent: 'center',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,


    },
    main2: {
        flex: 1,
        width: 500,
        height: 500,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',


    },
    headertxt: {
        // display: 'flex',
        // alignItems: 'stretch',
        paddingTop: 0,
        marginLeft: 15,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',


    }



})

export default GetAllDonors;