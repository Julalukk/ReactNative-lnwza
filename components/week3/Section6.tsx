import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Section6() {
    return (
        <View style={{
            flexDirection: 'column',
            marginHorizontal: 20,
            marginTop: 20,
            backgroundColor: '#fff',
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#e0e0e0'
        }}>
            <View style={{ padding: 15 }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: 10
                }}>
                    Location
                </Text>
                <Text style={{
                    fontSize: 14,
                    color: '#666',
                    lineHeight: 20,
                    marginBottom: 15
                }}>
                    218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore
                </Text>
            </View>
            <View>
                <Image 
                    source={require('../../assets/images/week3/map.jpg')}
                    style={{
                        width: '100%',
                        height: 200,
                        resizeMode: 'cover'
                    }}
                />
            </View>
        </View>
    );
}

