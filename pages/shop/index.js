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

const Shop = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  const [activeTab, setActiveTab] = useState('all');

  console.log(products);

  const AllProducts = () => {
    const allProducts = products?.map(product => {
      return (
        <div>
          <ProductCard
            title={product.title}
            price={product.price}
            cardImg={product.image}
            imgAlt={product.description}
            ratings={product.rating.rate}
          />
        </div>
      );
    });

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
            />
          </div>
        );
      });
  };
  return (
    <div>
      <Topnav />
      <Navbar />
      <ShopTab />
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
