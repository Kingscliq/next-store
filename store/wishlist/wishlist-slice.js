import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify'; 

const initialState = {
    wishlistItems: []
},
  wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
      addToWishlist(state, action) {
        state.wishlistItems.push(action.payload)
        toast.success('Item Added To Wishlist');
      },
      removeItemFromWishlist(state, action) {
        const newProduct = state.wishlistItems.filter(
          item => item.id !== action.payload.id
        );
        state.wishlistItems = newProduct;

        toast.error('Item removed from Wishlist');
      }
    }  
  })

export const {
  addToWishlist,
  removeItemFromWishlist,
} = wishlistSlice.actions;

export const wishlist = state => state.wishlist.wishlistItems;

export default wishlistSlice.reducer;