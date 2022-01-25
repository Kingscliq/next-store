import { useRouter } from 'next/dist/client/router';
import {
  useGetProductsByCategoryQuery,
  useGetSingleProductQuery,
} from '../../../../store/products/products-api';
import Image from 'next/image';
import ReactStars from 'react-rating-stars-component';
import productStyles from '../../../../styles/product.module.css';
import Button from '../../../../components/elements/button';
import Skeleton from 'react-loading-skeleton';
import { checkRatings } from '../../../../utils/check-ratings';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../store/cart/cart-slice';
import RelatedProducts from '../../../../components/widgets/related-products';

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isFetching, error } = useGetSingleProductQuery(id);
  const dispatch = useDispatch();

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  const category = data?.category;
  const {
    data: productsByCategory,
    isFetching: loadingCategory,
    error: loadingError,
  } = useGetProductsByCategoryQuery(category);

  return (
    <>
      <section
        className={[productStyles.product_container, 'container mt-5'].join(
          ' '
        )}
      >
        {isFetching && <Skeleton style={{ height: '600px' }} />}

        {data && (
          <section className={productStyles.image_container}>
            <div>
              <Image
                src={data?.image}
                alt="product image"
                height={500}
                width={500}
              />
            </div>
          </section>
        )}

        <section>
          <h2 className={productStyles.title}>{data?.title}</h2>

          <div className={productStyles.ratings}>
            <span>
              {isFetching && <Skeleton width={100} />}
              {data && (
                <ReactStars
                  size={30}
                  value={Number(checkRatings(data?.rating.rate))}
                  edit={false}
                />
              )}
            </span>
            <span>
              {isFetching && <Skeleton width={100} />}
              {data && <>{data?.rating.count} Reviews</>}
            </span>
          </div>
          <p>
            {isFetching && <Skeleton width={100} />}
            {data && (
              <>
                <strong>Category: </strong> {data?.category}
              </>
            )}
          </p>
          <div className={productStyles.pricing_section}>
            <div className={productStyles.price}>
              {isFetching && <Skeleton width={100} />}
              {data && `$${data?.price}`}
            </div>
            {data && <div>Size: 13</div>}
            {isFetching && <Skeleton width={100} />}
          </div>
          <div className="mb-3">
            {isFetching && <Skeleton width={200} height={60} />}
            {data && (
              <div className="mb-1">
                <Button
                  className="btn btn-primary"
                  label="Add to Cart"
                  onClick={() => handleAddToCart(data)}
                />
              </div>
            )}
          </div>
          <div className="mb-3">
            {isFetching && <Skeleton width={200} className="mb-1" />}
            {data && <h4 className="mb-1">Product Description</h4>}
            <p>
              {data?.description}
              {isFetching && (
                <>
                  <Skeleton width={400} />
                  <Skeleton width={500} />
                  <Skeleton width={500} />
                  <Skeleton width={500} />
                  <Skeleton width={500} />
                  <Skeleton width={500} />
                </>
              )}
            </p>
          </div>
        </section>
      </section>
      <div>
        <h2 className="text-center mt-3">You May Also Like</h2>
        <RelatedProducts
          products={productsByCategory}
          isFetching={loadingCategory}
          error={loadingError}
        />
      </div>
    </>
  );
};

export default Product;
