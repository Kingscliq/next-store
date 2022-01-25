import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalCartItemsQuantity: 0,
    totalPrice: 0,
},
    wishlistSlice = createSlice({
        name: 'cart',
        initialState,
        reducers: {
            addToCart(state, action) {
                const itemIndex = state.cartItems.findIndex(
                  item => item.id === action.payload.id
                );
                if (itemIndex >= 0) {
                  state.cartItems[itemIndex].quantity += 1;
                } else {
                  const temp = { ...action.payload, quantity: 1 };
                  state.cartItems.push(temp);
                }
        
                toast.success('Item Added To Wishlist');
            },
            removeItemFromCart(state, action) {
                const newProduct = state.cartItems.filter(
                  item => item.id !== action.payload.id
                );
                state.cartItems = newProduct;
        
                toast.error('Item removed from Wishlist');
            }
        }
    })

export const {
    addToCart,
    removeItemFromCart
} = wishlistSlice.actions;

export const wishlist = state => state.cart.cartItems;
export default wishlistSlice.reducer;