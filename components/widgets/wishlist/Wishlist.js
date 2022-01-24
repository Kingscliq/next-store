import cartStyles from './wishlist.module.css';
import Image from 'next/image';
import{ cart } from '../../../store/cart/cart-slice';
import { useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import Button from '../../elements/button';
import { FaHeart, FaRegTimesCircle } from 'react-icons/fa';
import EmptyCart from '../empty-wishlist';

const wishlist = ({product}) => {
    const shoppingCart = useSelector(cart);

    console.log(shoppingCart)
    return shoppingCart.length > 0 ? (
        <>
            <section className={[cartStyles.cart_item_container].join(' ')}>
            <div className={cartStyles.image}>
                {/* <Image src={product.image} height={120} width={120} /> */}
            </div>
            <div>
                <div>
                <h4>Head</h4>
                </div>
                <div>
                <p>Para</p>
                </div>
                <ReactStars
                size={20}
                // value={checkRatings(product.rating.rate)}
                edit={false}
                />
                <div>
                <Button label={`Save For Later`} className={cartStyles.save_btn} />
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
                <div className="text-center">product.quantity</div>
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
        </>
    ):(
        <EmptyCart />
    );
}

export default wishlist
