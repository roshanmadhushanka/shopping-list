import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ItemDto {
    item: string,
    quantity: number,
};

export interface ShoppingListState {
    items: ItemDto[],
};

const initialState: ShoppingListState = {
    items: [],
};

const addItemReducer: CaseReducer<ShoppingListState, PayloadAction<ItemDto>> = (state, action) => {
    state.items.push(action.payload);
    return state;
}

// const shoppingListSlice = createSlice({
//     name: "shoppingList",
//     initialState,
//     reducers: {
//         addItem: addItemReducer,
//     },
// });

const shoppingListSlice = createSlice({
    name: "shoppingList",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<ItemDto>) {
            addItemReducer(state, action);
        }
    },
});


export const {addItem} = shoppingListSlice.actions;
export const selectAllItems = (state: RootState) => state.shoppingList.items;
export default shoppingListSlice.reducer;