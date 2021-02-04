import React, { useState } from 'react';
import {
    Text,
    View,
} from 'react-native';

import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserDetails from './UserDetails';

function AddDetails() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>
            <Input
                placeholder='INPUT WITH CUSTOM ICON'
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
            />

            
        </View>

    )


}

export default AddDetails;