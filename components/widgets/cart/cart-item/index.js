import React from 'react';
import cartStyles from './cart-item.module.css';
import { useDispatch } from 'react-redux';
import { FaHeart, FaRegTimesCircle } from 'react-icons/fa';
import Image from 'next/image';
import {
  decreaseCartQuantity,
  increaseCartQuantity,
  removeItemFromCart,
} from '../../../../store/cart/cart-slice';
import ReactStars from 'react-rating-stars-component';
import { checkRatings } from '../../../../utils/check-ratings';
import Button from '../../../elements/button';
import { addToWishlist } from '../../../../store/wishlist/wishlist-slice';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const deleteFromCart = product => {
    dispatch(removeItemFromCart(product));
  }; 
  const increaseProductQuantity = item => {
    dispatch(increaseCartQuantity(item));
  };

  const decreaseProductQuantity = item => { 
    dispatch(decreaseCartQuantity(item));
  };

  const handleAddToWishlist = product => {
    dispatch(addToWishlist(product));
  };

  return (
    <section className={[cartStyles.cart_item_container].join(' ')}>
      <div className={cartStyles.image}>
        <Image src={product.image} height={120} width={120} />
      </div>
      <div>
        <div>
          <h4>${product.price}</h4>
        </div>
        <div>
          <p>{product.title}</p>
        </div>
        <ReactStars
          size={20}
          value={checkRatings(product.rating.rate)}
          edit={false}
        />
        <div>
          <Button 
            label={`Save For Later`} 
            className={cartStyles.save_btn} 
            onClick={() => handleAddToWishlist(product)}
          />
        </div>
      </div>
      <div>
        <div className={[cartStyles.quantity_container].join(' ')}>
          <div>
            <button
              className={cartStyles.qty_btn}
              onClick={() => decreaseProductQuantity(product)}
            >
              -
            </button>
          </div>
          <div className="text-center">{product.quantity}</div>
          <div>
            <button
              className={cartStyles.qty_btn}
              onClick={() => increaseProductQuantity(product)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <button
          className={cartStyles.remove_btn}
          onClick={() => deleteFromCart(product)}
        >
          <FaRegTimesCircle size={25} />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
