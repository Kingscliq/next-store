import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './products/products-api';
import cartReducer, { getTotals } from './cart/cart-slice';
import wishlistReducer from './wishlist/wishlist-slice';

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(getTotals());
export default store;
