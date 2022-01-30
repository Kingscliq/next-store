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
          item => item.id === action.payload.id
        );
        if (itemIndex >= 0) {
          state.cartItems[itemIndex].quantity += 1;
        } else {
          const temp = { ...action.payload, quantity: 1 };
          state.cartItems.push(temp);
        }

        toast.success('Item Added To Cart');
      },
      removeItemFromCart(state, action) {
        const newProduct = state.cartItems.filter(
          item => item.id !== action.payload.id
        );
        state.cartItems = newProduct;

        toast.error('Item removed from Cart');
      },
      decreaseCartQuantity(state, action) {
        const itemIndex = state.cartItems.findIndex(
          item => item.id === action.payload.id
        );
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
        } else if (state.cartItems[itemIndex].quantity === 1) {
          const newProduct = state.cartItems.filter(
            item => item.id !== action.payload.id
          );
          state.cartItems = newProduct;
        }
        toast.info('Item quantity Decreased');
      },
      increaseCartQuantity(state, action) {
        const itemIndex = state.cartItems.findIndex(
          item => item.id === action.payload.id
        );
        if (itemIndex >= 0) {
          state.cartItems[itemIndex].quantity += 1;
        } else {
          const temp = { ...action.payload, quantity: 1 };
          state.cartItems.push(temp);
        }
        toast.info('Item quantity Increased');
      },
      getTotals(state, action) {
        let { total, quantity } = state.cartItems.reduce(
          (cartTotal, cartItem) => {
            const { price, quantity: itemQuantity } = cartItem;
            const itemTotal = price * itemQuantity;

            cartTotal.total += itemTotal;
            cartTotal.quantity += itemQuantity;

            return cartTotal;
          },
          {
            total: 0,
            quantity: 0,
          }
        );

        state.totalCartItemsQuantity = quantity;
        state.totalPrice = total;
      },
    },
  });

export const {
  addToCart,
  removeItemFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
  getTotals,
} = cartSlice.actions;

export const cart = state => state.cart.cartItems;
export const totalPrice = state => state.cart.totalPrice;
export const totalCartItemsQuantity = state =>
  state.cart.totalCartItemsQuantity;
export default cartSlice.reducer;
