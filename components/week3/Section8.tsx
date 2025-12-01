import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Section8() {
    return (
        <View style={{
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 20,
            padding: 15,
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#e0e0e0',
            borderRadius: 10
        }}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={{
                    fontSize: 12,
                    color: '#666',
                    marginBottom: 5
                }}>
                    Price
                </Text>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#FF0000',
                    marginBottom: 5
                }}>
                    $399.99
                </Text>
                <Text style={{
                    fontSize: 12,
                    color: '#666'
                }}>
                    AVG/Night
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#FF6347',
                        paddingHorizontal: 30,
                        paddingVertical: 12,
                        borderRadius: 25
                    }}
                    onPress={() => {}}
                >
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                        Book Now
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

