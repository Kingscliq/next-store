import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cartIcon } from '../../../assets/icons';
import Button from '../../elements/button';
import styles from './emptywishlist.module.css';
const EmptyWishlist = () => {
  return (
    <section className={[styles.container, 'mt-4'].join(' ')}>
      <div className={[styles.cart_container, 'mb-3'].join(' ')}>
        <Image src={cartIcon} height={100} width={100} />
      </div>
      <div className={[styles.cart_desc, 'mb-3'].join(' ')}>
        <h3>You have no item on your wishlist</h3>
        <p>Browse our categories and discover our best deals!</p>
      </div>
      <div>
        <Link href="/shop">
          <Button label="Start Shopping" className="btn btn-primary" />
        </Link>
      </div> 
    </section>
  );
};

export default EmptyWishlist;
