import React from 'react';
import { Text, View } from 'react-native';

export default function Section3() {
    return (
        <View style={{
            marginHorizontal: 20,
            marginTop: 20,
            padding: 15
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: '#FF0000',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 15
                }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
                        9.5
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 5 }}>
                        Excellent
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                        See 801 reviews
                    </Text>
                </View>
            </View>
        </View>
    );
}

