import React from 'react';
import ProductCard from '../../elements/card/product-card';
import { ProductSkeleton } from '../../elements/product-skeleton';
import { addToCart } from '../../../store/cart/cart-slice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const RelatedProducts = ({ products, isFetching, error }) => {
  const dispatch = useDispatch();
  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  return (
    <>
      {isFetching && <ProductSkeleton />}
      <div className="category-section container">
        {products &&
          products.map(product => (
            <Link href={`/shop/products/${product.id}`} key={product.id}>
              <div>
                <ProductCard
                  title={product.title}
                  price={product.price}
                  cardImg={product.image}
                  imgAlt={product.description}
                  ratings={product.rating.rate}
                  buttonText="Add To Cart"
                  handleButtonClick={() => handleAddToCart(product)}
                />
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default RelatedProducts;
