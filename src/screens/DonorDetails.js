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



function DonorDetails({ route, navigation }) {

    // const {name, email, phone, age, weight, bloodGroup} = props;
    const { name, email, phone, age, weight, bloodGroup } = route.params;
    console.log("Details goes here==>", name, email, phone, age, weight, bloodGroup)





    return (

        <ScrollView>
            <View style={styles.container}>

                <View style={styles.main1}>

                    <Text style={styles.headertxt}>
                        Congratulations! You are a donor now,
                        Thanks For Donating Blood!
                        Keep Donating Blood to help
                        the Humanity
                    </Text>
                    {/* <Text style={styles.headertxt}>Personal Details to become donor</Text> */}


                </View>

                <View style={styles.main2}>

                    <View style={{ justifyContent: 'center', textAlign: 'center' }}>

                        <View style={{ borderStyle: 'solid', borderRadius: 15, borderWidth: 1, width: 300, justifyContent: 'center', alignSelf: 'center' }}>

                            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Your Details</Text>


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

export default DonorDetails;