import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section5() {
    return (
        <View style={{
            marginHorizontal: 20,
            marginTop: 20,
            paddingVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: '#e0e0e0'
        }}>
            <FontAwesome name="wifi" size={24} color="#4ECDC4" />
            <FontAwesome name="coffee" size={24} color="#4ECDC4" />
            <FontAwesome name="shower" size={24} color="#4ECDC4" />
            <FontAwesome name="car" size={24} color="#4ECDC4" />
            <FontAwesome name="paw" size={24} color="#4ECDC4" />
        </View>
    );
}

