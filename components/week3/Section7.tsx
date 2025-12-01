import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View style={{
            marginHorizontal: 20,
            marginTop: 20,
            backgroundColor: '#fff',
            borderLeftWidth: 3,
            borderLeftColor: '#9370DB'
        }}>
            <View style={{ padding: 15 }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: 15
                }}>
                    Room Type
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 15 }}>
                        <Image 
                            source={require('../../assets/images/week3/room-8.jpg')}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 10,
                                resizeMode: 'cover'
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#333',
                            marginBottom: 5
                        }}>
                            Standard Twin Room
                        </Text>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#FF0000',
                            marginBottom: 5
                        }}>
                            $399.99
                        </Text>
                        <Text style={{
                            fontSize: 12,
                            color: '#87CEEB'
                        }}>
                            Hurry Up! This is your last room!
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

