import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export interface Item {
    item: string,
    quantity: number,
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: "700",
    },
    form: {
        marginTop: 30,
    },
    input: {
        padding: 15,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    addItemButton: {
        backgroundColor: "#eb8634",
        paddingVertical: 20,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "500",
    }
});

const AddItem: React.FC = () => {
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState("");

    return(
        <View>
            <Text style={styles.heading}>Add Shopping Item</Text>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Enter Item" value={item} onChangeText={text => setItem(text)}/>
                <TextInput style={styles.input} passwordRules="Enter Quantity" keyboardType="numeric" value={quantity} onChangeText={quantity => setQuantity(quantity)}/>
                <TouchableOpacity style={styles.addItemButton} onPress={() => {}}>
                    <Text style={styles.buttonText}>Add Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default AddItem;