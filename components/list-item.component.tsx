import React from "react";
import { FlatList, View } from "react-native";
import { selectAllItems } from "../redux/shopping-list/shopping-list.slice";
import { useSelector } from "react-redux";
import Item from "./item.component";

const ListItem: React.FC = () => {

    // Use slice to make a copy of the array and then reverse it. Otherwise it tries to reverse the original array, which gives an error
    const orderedItems = useSelector(selectAllItems).slice().reverse();  
    return(
        <FlatList data={orderedItems} keyExtractor={(item, index) => `${item.item}-${index}`} renderItem={({item}) => (
            <Item id={item.id} item={item.item} quantity={item.quantity}/>
        )}/>
    )
}

export default ListItem;