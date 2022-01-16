import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './products/products-api';
import cartReducer from './cart/cart-slice';

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
