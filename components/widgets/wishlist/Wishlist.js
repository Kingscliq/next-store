import cartStyles from './wishlist.module.css';
import Image from 'next/image';
import {
  removeItemFromWishlist,
  wishlist,
} from '../../../store/wishlist/wishlist-slice';
import { useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import { FaRegTimesCircle } from 'react-icons/fa';
import EmptyCart from '../empty-wishlist';
import { checkRatings } from '../../../utils/check-ratings';
import { useDispatch } from 'react-redux';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistCart = useSelector(wishlist);

  const handleAddRemoveFromWishlist = product => {
    dispatch(removeItemFromWishlist(product));
  };

  return wishlistCart.length > 0 ? (
    <>
      <h2 className="mb-3 mt-2">Wish List</h2>
      <div>
        {wishlistCart?.map(product => (
          <section
            className={[cartStyles.cart_item_container].join(' ')}
            key={product.id}
          >
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
            </div>

            <div>
              <button
                className={cartStyles.remove_btn}
                onClick={() => handleAddRemoveFromWishlist(product)}
              >
                <FaRegTimesCircle size={25} />
              </button>
            </div>
          </section>
        ))}
      </div>
    </>
  ) : (
    <EmptyCart />
  );
};

export default Wishlist;
