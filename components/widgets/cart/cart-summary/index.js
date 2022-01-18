import React from 'react';
import Button from '../../../elements/button';
import styles from './cart-summary.module.css';
import { paypal } from '../../../../assets/icons';
import { masterCard2 } from '../../../../assets/icons';
import { masterCard } from '../../../../assets/icons';
import { visa } from '../../../../assets/icons';
import Image from 'next/image';

const CartSummary = () => {
  return (
    <section className={styles.summary_container}>
      <div>
        <h2>Total</h2>
      </div>
      <div className={styles.sub_containers}>
        <div className={[styles.subtotals, 'mb-1'].join(' ')}>
          <div>
            <h5>SubTotal</h5>
          </div>
          <div>$3</div>
        </div>
        <div className={styles.subtotals}>
          <h5>Delivery</h5>
          <div>$0</div>
        </div>
      </div>
      <div className="mt-3">
        <Button
          className="btn-primary"
          label="Checkout"
          style={{ width: '100%' }}
        />
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
