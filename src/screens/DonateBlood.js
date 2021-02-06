import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Picker,
} from 'react-native';

//Become Donor

import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';
// import { ScrollView } from 'react-native-gesture-handler';

// import { Button, Input } from 'react-native-elements';
// import { blue100 } from 'react-native-paper/lib/typescript/styles/colors';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import UserDetails from './UserDetails';

function DonateBlood({ navigation }) {

    // const [selectedValue, setSelectedValue] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState();
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [bloodGroup, setBloodgroup] = useState('');

    // const [details, setDetails] = useState({})

    const pushDetails = (e) => {
        database().ref('/').child('/donatePersonData').push({
            name: name,
            email: email,
            phone: phone,
            age: age,
            weight: weight,
            bloodgroup: bloodGroup,


        })
        navigation.navigate("DonorDetails", { name, email, phone, age, weight, bloodGroup })

        setName('')
        setEmail('')
        setPhone('')
        setAge('')
        setWeight('')
        setBloodgroup('')

        // console.log("name==>", name, email, phone, age, weight, bloodGroup)
    }

    return (

        <ScrollView>
            <View style={styles.container}>

                <View style={styles.main1}>

                    <Text style={styles.headertxt}>Add Your Personal Details to became a donor</Text>
                    {/* <Text style={styles.headertxt}>Personal Details to become donor</Text> */}


                </View>

                <View style={styles.main2}>

                    <View style={{ justifyContent: 'center', textAlign: 'center' }}>

                        <View style={{ borderStyle: 'solid', borderRadius: 15, borderWidth: 1, width: 300, justifyContent: 'center', alignSelf: 'center' }}>
                            <View style={{ marginTop: 20 }}>
                                <Input
                                    onChangeText={(e) => setName(e)}
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
                            <View style={{ width: 300, justifyContent: 'center' }}>
                                <Input
                                    onChangeText={(e) => setEmail(e)}
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
                                    onChangeText={(e) => setPhone(e)}
                                    placeholder='Phone'
                                    keyboardType='number-pad'


                                    leftIcon={
                                        <Icon
                                            name='phone'
                                            type='evilicon'
                                            color='#517fa4'
                                        />
                                    }
                                />

                            </View>
                            <View style={{ flexDirection: 'row', flexWrap: 'nowrap', width: 150, justifyContent: 'center', alignSelf: 'center', marginBottom: 30 }}>
                                <Input
                                    onChangeText={(e) => setAge(e)}
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
                                    onChangeText={(e) => setWeight(e)}
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
                            <View>

                                <Picker
                                    selectedValue={bloodGroup}
                                    style={{ height: 50, width: 150, fontSize: 30 }}
                                    onValueChange={(itemValue, itemIndex) => setBloodgroup(itemValue)}
                                >
                                    <Picker.Item label="A+" value="A+" />
                                    <Picker.Item label="A-" value="A-" />
                                    <Picker.Item label="B+" value="A+" />
                                    <Picker.Item label="B-" value="B-" />
                                    <Picker.Item label="O+" value="O+" />
                                    <Picker.Item label="O-" value="O-" />
                                    <Picker.Item label="AB+" value="AB+" />
                                    <Picker.Item label="AB-" value="AB-" />


                                </Picker>
                            </View>





                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>

                            <Button
                                onPress={pushDetails}
                                title="Click here to proceed"

                            />

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
        paddingTop: 30,
        marginLeft: 15,
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',


    }



})

export default DonateBlood;