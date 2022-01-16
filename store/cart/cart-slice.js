import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    cartItems: [],
    totalCartItemsQuantity: 0,
    totalPrice: 0,
  },
  cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action) {
        const itemIndex = state.cartItems.findIndex(
          item => item.image === action.payload.image
        );
        if (itemIndex >= 0) {
          state.cartItems[itemIndex].quantity += 1;
        } else {
          const temp = { ...action.payload, quantity: 1 };
          state.cartItems.push(temp);
        }

        toast.success('Item Added To Cart');
      },
    },
  });

export const { addToCart } = cartSlice.actions;
export const cart = state => state.cart.cartItems;
export default cartSlice.reducer;
