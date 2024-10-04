
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addItemToCart: (state, action) => {
            const itemExists = state.cartItems.find(item => item.id === action.payload.id);
            if (itemExists) {
                itemExists.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItemFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                state.cartItems[itemIndex].quantity -= 1;
                if (state.cartItems[itemIndex].quantity === 0) {
                    state.cartItems.splice(itemIndex, 1);
                }
            }
        },
    },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
