import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

export default function Section2() {
    return (
        <View style={{ 
            marginTop: -60, 
            marginHorizontal: 20, 
            padding: 20, 
            backgroundColor: '#fff', 
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
        }}>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                Hilton San Francisco
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
                <FontAwesome name="star" size={20} color="#FFD700" />
                <FontAwesome name="star" size={20} color="#FFD700" />
                <FontAwesome name="star" size={20} color="#FFD700" />
                <FontAwesome name="star" size={20} color="#FFD700" />
                <FontAwesome name="star-half-o" size={20} color="#FFD700" />
            </View>
            <Text style={{ textAlign: 'center', fontSize: 14, color: '#666' }}>
                Facilities provided may range from a modest quality mattress in a small room to large suites
            </Text>
        </View>
    );
}

