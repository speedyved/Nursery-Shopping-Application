import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.name == action.payload.name)
      existingItem ? existingItem.quantity++ : state.items.push({...action.payload, quantity: 1})
    },
    removeItem: (state, action) => {
        console.log('delete clicked', action.payload)
        state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
        let itemToUpdate = state.items.find(item => item.name === action.payload.name)
        itemToUpdate.quantity = action.payload.quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
