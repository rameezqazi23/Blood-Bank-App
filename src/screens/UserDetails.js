import React from 'react';
import { Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

//Become a Donor
function UserDetails() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>

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

    )
}

export default UserDetails;


