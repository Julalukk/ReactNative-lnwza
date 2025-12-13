import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props: any) {
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Tour</Text>
            <Text style={{ color: 'grey', marginVertical: 10 }}>Let find out what most interesting things</Text>
            <ScrollView horizontal={true}>
                <TourItem />
                <TourItem />
                <TourItem />
            </ScrollView>
        </View>
    );
}


