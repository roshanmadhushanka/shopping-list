import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ItemDto {
    id: string,
    item: string,
    quantity: number,
};

export interface ShoppingListState {
    items: ItemDto[],
    contextMenuVisible: boolean,
    selectedItem: ItemDto | null,
};

const initialState: ShoppingListState = {
    items: [],
    contextMenuVisible: false,
    selectedItem: null,
};

const addItemReducer: CaseReducer<ShoppingListState, PayloadAction<ItemDto>> = (state, action) => {
    state.items.push(action.payload);
    return state;
}

const setlectItemReducer: CaseReducer<ShoppingListState, PayloadAction<string>> = (state, action) => {
    let selectedItem = state.items.find(element => element.id === action.payload);
    if (selectedItem) {
        state.selectedItem = selectedItem;
        state.contextMenuVisible = true;
    } else {
        state.selectedItem = null;
    }
}

const removeItemReducer: CaseReducer<ShoppingListState, PayloadAction<string>> = (state, action) => {
    state.items = state.items.filter((item) => item.id !== action.payload);
}

const shoppingListSlice = createSlice({
    name: "shoppingList",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<ItemDto>) {
            addItemReducer(state, action);
        },
        selectItem(state, action: PayloadAction<string>) {
            setlectItemReducer(state, action);
        },
        removeItem(state, action: PayloadAction<string>) {
            removeItemReducer(state, action);
        }
    },
});

export const {addItem, selectItem} = shoppingListSlice.actions;
export const selectAllItems = (state: RootState) => state.shoppingList.items;
export const isContextMenuVisible = (state: RootState) => state.shoppingList.contextMenuVisible;
export const getSelectedItem = (state: RootState) => state.shoppingList.selectedItem;
export default shoppingListSlice.reducer;