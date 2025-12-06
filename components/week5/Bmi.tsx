import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState("");

    const calculateBMI = () => {
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height);

        if (weightNum > 0 && heightNum > 0) {
            const heightInMeters = heightNum / 100;
            const bmiValue = weightNum / (heightInMeters * heightInMeters);
            setBmi(parseFloat(bmiValue.toFixed(2)));

            // Determine category according to BMI table
            if (bmiValue < 18.5) {
                setCategory("Underweight");
            } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
                setCategory("Normal");
            } else if (bmiValue >= 25 && bmiValue <= 29.9) {
                setCategory("Overweight");
            } else if (bmiValue >= 30 && bmiValue <= 34.9) {
                setCategory("Obese");
            } else {
                setCategory("Extremely obese");
            }
        }
    };

    return (
        <View style={styles.container}>
            {/* แถวที่ 1 */}
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Weight (kg.)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Input your Weight ..."
                        placeholderTextColor="#999"
                        value={weight}
                        onChangeText={setWeight}
                        keyboardType="numeric"
                    />
                </View>
            </View>

            {/* แถวที่ 2 */}
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Height (cm.)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Input your Height ..."
                        placeholderTextColor="#999"
                        value={height}
                        onChangeText={setHeight}
                        keyboardType="numeric"
                    />
                </View>
            </View>

            {/* แถวที่ 3 */}
            <View style={styles.resultContainer}>
                <View style={styles.resultBox}>
                    <Text style={styles.resultText}>{bmi !== null ? bmi.toString() : "24.22"}</Text>
                </View>
                <View style={styles.resultBox}>
                    <Text style={styles.resultText}>{category || "Normal"}</Text>
                </View>
            </View>

            {/* แถวที่ 4 */}
            <TouchableOpacity style={styles.button} onPress={calculateBMI}>
                <Text style={styles.buttonText}>CALCULATE</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputWrapper: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        minHeight: 80,
        minWidth: "100%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    input: {
        fontSize: 18,
        padding: 0,
        minHeight: 30,
    },
    resultContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        gap: 15,
    },
    resultBox: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        minHeight: 80,
        minWidth: 150,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    resultText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
    },
    button: {
        backgroundColor: "#00BFFF",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 1,
    },
});
