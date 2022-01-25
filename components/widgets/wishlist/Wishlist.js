import cartStyles from './wishlist.module.css';
import Image from 'next/image';
import{ wishlist } from '../../../store/wishlist/wishlist-slice';
import { useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import Button from '../../elements/button';
import { FaHeart, FaRegTimesCircle } from 'react-icons/fa';
import EmptyCart from '../empty-wishlist';

const Wishlist = ({product}) => {
    const shoppingCart = useSelector(wishlist);

    console.log(shoppingCart)
    return shoppingCart.length > 0 ? ( 
        <>
            <h2>Wish List</h2>
            <div>
                {shoppingCart?.map(prod => (
                    <div>
                        {prod.id}
                    </div>
                ))}
            </div>
        </>
    ):(
        <EmptyCart />
    );
}

export default Wishlist
