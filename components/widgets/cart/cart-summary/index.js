import React, { useState } from 'react';
import Button from '../../../elements/button';
import styles from './cart-summary.module.css';
import { paypal } from '../../../../assets/icons';
import { masterCard } from '../../../../assets/icons';
import { visa } from '../../../../assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { totalPrice } from '../../../../store/cart/cart-slice';

const CartSummary = () => {
  const totalAmount = useSelector(totalPrice);
  const [delivery, setDelivery] = useState(0);
  return (
    <section className={styles.summary_container}>
      <div className={styles.grand_total}>
        <h2>Total</h2>
        <h3>${(totalAmount + delivery).toFixed(2)}</h3>
      </div>
      <div className={styles.sub_containers}>
        <div className={[styles.subtotals, 'mb-1'].join(' ')}>
          <div>
            <h5>SubTotal</h5>
          </div>
          <div>${totalAmount.toFixed(2)}</div>
        </div>
        <div className={styles.subtotals}>
          <h5>Delivery</h5>
          <div>$0</div>
        </div>
      </div>
      <div className="mt-3">
        <Link href="/checkout">
          <Button
            className="btn-primary"
            label="Checkout"
            style={{ width: '100%' }}
          />
        </Link>
      </div>
      <div className="mt-1">
        <Link href="/shop">
          <Button
            // className="btn-primary"
            label="Continue Shopping"
            style={{ width: '100%' }}
          />
        </Link>
      </div>
      <div className="mt-3">
        <p>We Accept:</p>
      </div>
      <div className="mt-1">
        <Image src={paypal} height={70} width={70} />
        &nbsp;
        <Image src={visa} height={70} width={70} />
        &nbsp;
        <Image src={masterCard} height={70} width={70} />
      </div>
    </section>
  );
};

export default CartSummary;
