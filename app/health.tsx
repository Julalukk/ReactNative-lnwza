import React from "react";
import { ScrollView } from "react-native";
import Bmi from "../components/week5/Bmi";
import Heartbeat from "../components/week5/Heartbeat";

export default function Health() {
    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: 'lightblue',
        }}
        contentContainerStyle={{
            justifyContent: "center",
            padding: 20,
            flexGrow: 1
        }}>
            <Bmi />
            <Heartbeat />
        </ScrollView>
    );
}

