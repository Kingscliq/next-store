import React, { useEffect } from 'react';
import navStyles from './navbar.module.css';
import {
  FaBars,
  FaFacebookF,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUserAlt,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../../elements/list-item';
import {
  cart,
  totalCartItemsQuantity,
  getTotals,
} from '../../../store/cart/cart-slice';

const Navbar = ({ mobileNav, setMobileNav }) => {
  const cartItems = useSelector(cart);
  const totalQuantity = useSelector(totalCartItemsQuantity);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  return (
    <section className={navStyles.navbar}>
      <nav className={[navStyles.main_nav, 'container'].join(' ')}>
        <div className={navStyles.logo_section}>
          <div className={navStyles.app_bar} onClick={() => setMobileNav(true)}>
            <FaBars />
          </div>
          <div>NextStore</div>
        </div>
        <div>
          <ul className={navStyles.nav_group}>
            <ListItem href="/" linkText="Home" />
            <ListItem href="/shop" linkText="Shop" />
            <ListItem href="/about" linkText="About" />
          </ul>
        </div>
        <div className={navStyles.socials}>
          <div>
            <ListItem icon={<FaFacebookF />} href="https://facebook.com" />
          </div>
          <div>
            <ListItem icon={<FaSearch />} href="https://facebook.com" />
          </div>
          <div>
            <ListItem icon={<FaUserAlt />} href="https://facebook.com" />
          </div>
          <div>
            <ListItem
              icon={<FaHeart />}
              href="/wishlist"
              badgeLabel="4"
            />
          </div>
          <div>
            <ListItem
              icon={<FaShoppingCart />}
              href="/cart"
              badgeLabel={(totalQuantity > 0 && totalQuantity) || null}
            />
          </div>
        </div>
        <div className={navStyles.mobile_cart}>
          <ListItem
            icon={<FaShoppingCart />}
            href="/cart"
            badgeLabel={(totalQuantity > 0 && totalQuantity) || null}
          />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
