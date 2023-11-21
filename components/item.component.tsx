import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ItemDto, getSelectedItem, selectItem } from "../redux/shopping-list/shopping-list.slice";
import { useSelector, useDispatch } from "react-redux";
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
    const isMenuVisible = currentItem && currentItem.id === id;

    const handleOnLongPress = () => {
        dispatch(selectItem(id))
    }

    const handleOnPress = () => {
        dispatch(selectItem(''));
    }

    return(
        <View>
            <TouchableOpacity onLongPress={handleOnLongPress} onPress={handleOnPress} activeOpacity={0.5}>
                <View style={styles.item}>
                    <Text style={styles.item}>{item}</Text>
                    <Text style={styles.quantity}>x{quantity}</Text>
                </View>
            </TouchableOpacity>
            {isMenuVisible && <Text style={styles.quantity}>Long press detected!</Text>}
        </View>
    )
}

export default Item;