import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Heartbeat() {
    const [count, setCount] = useState(0);

    const handlePress = () => {
        setCount(count + 1);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress} style={styles.iconButton}>
                <FontAwesome name="heart" size={50} color="#FF8C00" />
            </TouchableOpacity>
            <Text style={styles.counterText}>{count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        padding: 20,
        gap: 15,
    },
    iconButton: {
        alignItems: "center",
        justifyContent: "center",
    },
    counterText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#333",
    },
});
