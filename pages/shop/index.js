import React, { useState } from 'react';
import { useGetAllProductsQuery } from '../../store/products/products-api';
import TabGroup from '../../components/elements/tab/tab-group';
import { ProductSkeleton } from '../../components/elements/product-skeleton';
import ProductCard from '../../components/elements/card/product-card';
import ShopTab from '../../components/widgets/shop-tab';
import { addToCart } from '../../store/cart/cart-slice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const Shop = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  const [activeTab, setActiveTab] = useState('all');
  const dispatch = useDispatch();
  const addProductToCart = product => {
    dispatch(addToCart(product));
  };

  const AllProducts = () => {
    const allProducts = products?.map(
      ({ title, price, description, rating, image, id }) => {
        return (
          <Link href={`/shop/products/${id}`} key={id}>
            <div>
              <ProductCard
                title={title}
                price={price}
                cardImg={image}
                imgAlt={description}
                ratings={rating.rate}
                handleButtonClick={() =>
                  addProductToCart({ title, price, description, rating, image })
                }
                buttonText="Add To Cart"
              />
            </div>
          </Link>
        );
      }
    );

    return allProducts;
  };

  const Jewelry = () => {
    return products
      ?.filter(product => product.category === 'jewelery')
      .map(product => {
        return (
          <Link href={`/shop/products/${product.id}`} key={product.id}>
            <div>
              <ProductCard
                title={product.title}
                price={product.price}
                cardImg={product.image}
                imgAlt={product.description}
                ratings={product.rating.rate}
                handleButtonClick={() => addProductToCart(product)}
                buttonText="Add To Cart"
              />
            </div>
          </Link>
        );
      });
  };

  const FemaleCloth = () => {
    return products
      .filter(product => product.category === "women's clothing")
      .map(product => {
        return (
          <Link href={`/shop/products/${product.id}`} key={product.id}>
            <div>
              <ProductCard
                title={product.title}
                price={product.price}
                cardImg={product.image}
                imgAlt={product.description}
                ratings={product.rating.rate}
                buttonText="Add To Cart"
                handleButtonClick={() => addProductToCart(product)}
              />
            </div>
          </Link>
        );
      });
  };

  const MensCloth = () => {
    return products
      .filter(product => product.category === "men's clothing")
      .map(product => {
        return (
          <Link href={`/shop/products/${product.id}`} key={product.id}>
            <div>
              <ProductCard
                title={product.title}
                price={product.price}
                cardImg={product.image}
                imgAlt={product.description}
                ratings={product.rating.rate}
                buttonText="Add To Cart"
                handleButtonClick={() => addProductToCart(product)}
              />
            </div>
          </Link>
        );
      });
  };

  const Electronics = () => {
    return products
      .filter(product => product.category === 'electronics')
      .map(product => {
        return (
          <Link href={`/shop/products/${product.id}`} key={product.id}>
            <div>
              <ProductCard
                title={product.title}
                price={product.price}
                cardImg={product.image}
                imgAlt={product.description}
                ratings={product.rating.rate}
                buttonText="Add To Cart"
                handleButtonClick={() => addProductToCart(product)}
              />
            </div>
          </Link>
        );
      });
  };
  return (
    <div>
      <ShopTab activeTab={activeTab} />
      <TabGroup activeTab={activeTab} setActiveTab={setActiveTab} />
      {isLoading && <ProductSkeleton />}
      <div className="category-section container">
        {products && activeTab === 'all' && <AllProducts />}
        {products && activeTab === 'jewelry' && <Jewelry />}
        {products && activeTab === 'men-cloth' && <MensCloth />}
        {products && activeTab === 'female-cloth' && <FemaleCloth />}
        {products && activeTab === 'electronics' && <Electronics />}
      </div>
    </div>
  );
};

export default Shop;
