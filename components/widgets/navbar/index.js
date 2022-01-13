import React from 'react';
import navStyles from './navbar.module.css';
import {
  FaBars,
  FaFacebookF,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUserAlt,
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import ListItem from '../../elements/list-item';

const Navbar = ({ mobileNav, setMobileNav }) => {
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
            <ListItem
              href="/categories"
              icon={<IoIosArrowDown />}
              linkText="Categories"
              handleIconClick={() => console.log('Icon Clicked')}
            />
            <ListItem href="/products" linkText="Products" />
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
              href="https://facebook.com"
              badgeLabel="4"
            />
          </div>
          <div>
            <ListItem
              icon={<FaShoppingCart />}
              href="https://facebook.com"
              badgeLabel="1"
            />
          </div>
        </div>
        <div className={navStyles.mobile_cart}>
          <ListItem
            icon={<FaShoppingCart />}
            href="https://facebook.com"
            badgeLabel="1"
          />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
