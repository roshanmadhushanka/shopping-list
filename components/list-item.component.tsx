import React from "react";
import { FlatList, View } from "react-native";
import { selectAllItems } from "../redux/shopping-list/shopping-list.slice";
import { useSelector } from "react-redux";
import Item from "./item.component";

const ListItem: React.FC = () => {

    const items = useSelector(selectAllItems);
    return(
        <FlatList data={items} keyExtractor={(item, index) => `${item.item}-${index}`} renderItem={({item}) => (
            <Item item={item.item} quantity={item.quantity}/>
        )}/>
    )
}

export default ListItem;