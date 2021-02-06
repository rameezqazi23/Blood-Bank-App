import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    StatusBar,
} from 'react-native';

import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { ScrollView } from 'react-native-gesture-handler';

// import { Button, Input } from 'react-native-elements';
// import { blue100 } from 'react-native-paper/lib/typescript/styles/colors';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import UserDetails from './UserDetails';

function AddDetails() {
    return (

        <ScrollView>
            <View style={styles.container}>

                <View style={styles.main1}>
                    <Text>Hello</Text>


                </View>

                <View style={styles.main2}>

                    <View style={{ justifyContent: 'center', textAlign: 'center' }}>

                        <View style={{ borderStyle: 'solid', borderRadius: 15, borderWidth: 1, width: 300, justifyContent: 'center', alignSelf: 'center' }}>
                            <View style={{ marginTop: 20 }}>
                                <Input
                                    placeholder='Full Name'
                                    leftIcon={
                                        <Icon
                                            name='user'
                                            type='evilicon'
                                            color='#517fa4'
                                        />
                                    }
                                />

                            </View>
                            <View style={{ width: 200, justifyContent: 'center' }}>
                                <Input
                                    placeholder='Email'
                                    autoCompleteType='email'
                                    leftIcon={
                                        <Icon
                                            name='user'
                                            type='evilicon'
                                            color='#517fa4'
                                        />
                                    }
                                />

                            </View>
                            <View style={{ width: 200, justifyContent: 'center' }}>
                                <Input
                                    placeholder='Phone'
                                    keyboardType='number-pad'


                                    leftIcon={
                                        <Icon
                                            name='user'
                                            type='evilicon'
                                            color='#517fa4'
                                        />
                                    }
                                />

                            </View>
                            <View style={{ flexDirection: 'row', flexWrap: 'nowrap', width: 150, justifyContent: 'center', alignSelf: 'center', marginBottom: 30 }}>
                                <Input
                                    placeholder='Age'
                                    keyboardType='number-pad'
                                    leftIcon={
                                        <Icon
                                            name='user'
                                            type='evilicon'
                                            color='#517fa4'
                                        />
                                    }
                                />
                                <Input
                                    placeholder='Weight'
                                    keyboardType='number-pad'
                                    leftIcon={
                                        <Icon
                                            name='user'
                                            type='evilicon'
                                            color='#517fa4'
                                        />
                                    }
                                />

                            </View>



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
        width: 400,
        height: 250,

        backgroundColor: '#1A73E8',
        alignItems: 'center',
        justifyContent: 'center',
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
    main3: {
        flex: 1,
        width: 500,
        height: 500,

        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',

    },



})

export default AddDetails;