import React, { useState } from 'react';
import { useGetAllProductsQuery } from '../../store/products/products-api';
import Topnav from '../../components/Topnav';
import MobileNav from '../../components/widgets/mobile-nav';
import Navbar from '../../components/widgets/navbar';
import styles from '../../styles/Home.module.css';
import TabGroup from '../../components/elements/tab/tab-group';
import { ProductSkeleton } from '../../components/elements/product-skeleton';
import ProductCard from '../../components/elements/card/product-card';
import ShopTab from '../../components/widgets/shop-tab';
import { addToCart } from '../../store/cart/cart-slice';
import { useDispatch } from 'react-redux';

const Shop = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  const [activeTab, setActiveTab] = useState('all');
  const dispatch = useDispatch();
  const addProductToCart = product => {
    dispatch(addToCart(product));
  };
  const AllProducts = () => {
    const allProducts = products?.map(
      ({ title, price, description, rating, image }) => {
        return (
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
        );
      });
  };
  const FemaleCloth = () => {
    return products
      .filter(product => product.category === "women's clothing")
      .map(product => {
        return (
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
        );
      });
  };
  const MensCloth = () => {
    return products
      .filter(product => product.category === "men's clothing")
      .map(product => {
        return (
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
        );
      });
  };
  const Electronics = () => {
    return products
      .filter(product => product.category === 'electronics')
      .map(product => {
        return (
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
