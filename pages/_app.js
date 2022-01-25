import React from 'react';
import '../styles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from '../store';

import Layout from './layout';
import { getTotals } from '../store/cart/cart-slice';

function MyApp({ Component, pageProps }) {
  store.dispatch(getTotals);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer autoClose={5000} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
