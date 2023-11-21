import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { ItemDto, getSelectedItem, selectItem } from "../redux/shopping-list/shopping-list.slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";

const styles = StyleSheet.create({
    item: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.2)",
    },
    itemName: {
        fontWeight: "500",
    },
    quantity: {
        padding: 6,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "rgba(0, 0, 0, 0.05)"
    },
});

const Item: React.FC<ItemDto> = ({id, item, quantity}) => {

    const dispatch = useDispatch<AppDispatch>();
    const currentItem = useSelector(getSelectedItem);

    const handleLongPress = () => {
        dispatch(selectItem(id))
    }

    return(
        <View>
            <TouchableHighlight onLongPress={handleLongPress}>
                <View style={styles.item}>
                    <Text style={styles.item}>{item}</Text>
                    <Text style={styles.quantity}>x{quantity}</Text>
                </View>
            </TouchableHighlight>
            {(currentItem && currentItem.id === id) && <Text style={styles.quantity}>Long press detected!</Text>}
        </View>
    )
}

export default Item;