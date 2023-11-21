import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { selectAllItems, selectItem } from "../redux/shopping-list/shopping-list.slice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import Item from "./item.component";

const ListItem: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    // Use slice to make a copy of the array and then reverse it. Otherwise it tries to reverse the original array, which gives an error
    const orderedItems = useSelector(selectAllItems).slice().reverse();  

    const handleOnPress = () => {
        dispatch(selectItem(''));
    }

    return(
        <TouchableOpacity activeOpacity={1} onPress={handleOnPress}>
            <FlatList data={orderedItems} keyExtractor={(item, index) => `${item.item}-${index}`} renderItem={({item}) => (
                <Item id={item.id} item={item.item} quantity={item.quantity}/>
            )}/>
        </TouchableOpacity>
    )
}

export default ListItem;