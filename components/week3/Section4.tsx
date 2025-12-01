import React from 'react';
import { Text, View } from 'react-native';

export default function Section4() {
    return (
        <View style={{
            marginHorizontal: 20,
            marginTop: 20,
            paddingVertical: 15,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#e0e0e0'
        }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#333',
                marginBottom: 10
            }}>
                Hotel Description
            </Text>
            <Text style={{
                fontSize: 14,
                color: '#666',
                lineHeight: 20
            }}>
                218 Austen Mountain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
            </Text>
        </View>
    );
}

