import React from 'react';
import Topnav from '../../components/widgets/Top-nav/Topnav';
import MobileNav from '../../components/widgets/mobile-nav';
import Navbar from '../../components/widgets/navbar';

import { useSelector } from 'react-redux';
import { cart } from '../../store/cart/cart-slice';
import Subscribe from '../../components/widgets/subscribe/Subscribe';
import Footer from '../../components/widgets/footer/Footer';
import Head from 'next/head';
const Layout = ({ children }) => {
  const [mobileNav, setMobileNav] = React.useState(false);
  const cartItems = useSelector(cart);

  console.log(cartItems);
  return (
    <>
      <Head>
        <title>
          Next Store | Jeweries | Female Wears | Male Wears | Electronics
        </title>
        <meta
          name="description"
          content="One stop  store for all Jeweries | Female Wears | Male Wears | Electronics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topnav />
      {mobileNav && <MobileNav setMobileNav={setMobileNav} />}
      <Navbar
        mobileNav={mobileNav}
        setMobileNav={setMobileNav}
        cartItems={cartItems}
      />
      <main>{children}</main>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Layout;
