import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  status: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const res = axios.get('https://fakestoreapi.com/products/');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => (state.status = 'pending'),
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = 'fulfilled';
    },
    [fetchProducts.rejected]: (state, action) => (state.status = 'rejected'),
  },
});

export default productSlice.reducer;
