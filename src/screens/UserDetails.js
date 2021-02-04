import React from 'react';
import { Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

//Become a Donor
function UserDetails() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>

            <View style={{ borderStyle: 'solid', borderRadius: 15, borderWidth: 1, width: 300, justifyContent: 'center', alignSelf: 'center', alignContent: 'center' }}>
                <View>
                    <Input
                        placeholder='Enter Your Name'
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
                        placeholder='Enter Your Name'
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
                    <Input
                        placeholder='Enter Your Name'
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
                    <Input
                        placeholder='Enter Your Name'
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


