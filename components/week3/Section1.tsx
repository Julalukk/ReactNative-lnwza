import React from 'react';
import { Image, View } from 'react-native';

export default function Section1() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image 
                    source={require('../../assets/images/week3/room-6.jpg')}
                    style={{ flex: 1, resizeMode: 'cover', aspectRatio: 2 }}
                />
            </View>
        </View>
    );
}

