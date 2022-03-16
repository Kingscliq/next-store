import React from 'react';
import navStyles from './mobile-nav.module.css';
import { FaTimes } from 'react-icons/fa';
import ListItem from '../../elements/list-item';

const MobileNav = ({ setMobileNav }) => {
  return (
    <section className={navStyles.mobile_nav}>
      <nav>
        <div className={navStyles.logo}>
          <div>NextStore</div>
          <div onClick={() => setMobileNav(false)} className={navStyles.close}>
            <FaTimes />
          </div>
        </div>
        <div>
          <ul className="">
            <ListItem href="/" linkText="Home" className={navStyles.list} />
            <ListItem
              href="/categories"
              linkText="Categories"
              handleIconClick={() => console.log('Icon Clicked')}
              className={navStyles.list}
            />
            <ListItem
              href="/shop"
              linkText="Shop"
              handleIconClick={() => console.log('Icon Clicked')}
              className={navStyles.list}
            />
            <ListItem
              href="/products"
              linkText="Products"
              className={navStyles.list}
            />
            <ListItem
              href="/about"
              linkText="About"
              className={navStyles.list}
            />
          </ul>
        </div>
        <div></div>
      </nav>
    </section>
  );
};

export default MobileNav;
