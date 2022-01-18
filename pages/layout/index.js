import React, { Children } from 'react';
import Topnav from '../../components/widgets/Top-nav/Topnav';
import MobileNav from '../../components/widgets/mobile-nav';
import Navbar from '../../components/widgets/navbar';

import { useSelector } from 'react-redux';
import { cart } from '../../store/cart/cart-slice';

const Layout = ({ children }) => {
  const [mobileNav, setMobileNav] = React.useState(false);
  const cartItems = useSelector(cart);

  console.log(cartItems);
  return (
    <>
      {/* < Topnav /> */}

      < Topnav /> 
      {mobileNav && <MobileNav setMobileNav={setMobileNav} />}
      <Navbar
        mobileNav={mobileNav}
        setMobileNav={setMobileNav}
        cartItems={cartItems}
      />
      <main>{children}</main>
    </>
  );
};

export default Layout;
