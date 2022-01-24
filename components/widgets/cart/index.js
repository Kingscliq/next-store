import React from 'react';
import { cart } from '../../../store/cart/cart-slice';
import { useSelector } from 'react-redux';
import CartItem from './cart-item';
import EmptyCart from '../empty-cart';
import CartSummary from './cart-summary';
 
import styles from './cart.module.css';

const Cart = () => { 
  const shoppingCart = useSelector(cart);

  console.log(shoppingCart);
  return shoppingCart.length > 0 ? (
    <>
      <h2 className="container mt-4">Cart</h2>

      <hr className="container" />
      <section className={[styles.cart_container, 'container mt-4'].join(' ')}>
        <div>
          {shoppingCart.map(product => (
            <CartItem product={product} />
          ))}
        </div>
        <div>
          <CartSummary />
        </div>
      </section>
    </>
  ) : (
    <EmptyCart />
  );
};

export default Cart;
