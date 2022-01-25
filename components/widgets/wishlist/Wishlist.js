import cartStyles from './wishlist.module.css';
import Image from 'next/image';
import{ wishlist } from '../../../store/wishlist/wishlist-slice';
import { useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import Button from '../../elements/button';
import { FaHeart, FaRegTimesCircle } from 'react-icons/fa';
import EmptyCart from '../empty-wishlist';

const Wishlist = () => {
    const wishlistCart = useSelector(wishlist);

    console.log(wishlistCart)
    
    return wishlistCart.length > 0 ? ( 
        <>
            <h2>Wish List</h2>
            <div>
                {wishlistCart?.map(product => (
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
                                <Button label={`Save For Later`} className={cartStyles.save_btn} />
                            </div>
                        </div>
                        
                        <div>
                        <button
                            className={cartStyles.remove_btn}
                            onClick={() => removeItemFromWishlist(product)}
                        >
                            <FaRegTimesCircle size={25} />
                        </button>
                        </div>
                  </section>
                ))}
            </div>
        </>
    ):(
        <EmptyCart />
    );
}

export default Wishlist
