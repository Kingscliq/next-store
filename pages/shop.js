import React from 'react';
import { useGetAllProductsQuery } from '../store/products/products-api';
import Topnav from '../components/Topnav';
import MobileNav from '../components/widgets/mobile-nav';
import Navbar from '../components/widgets/navbar';
import styles from '../styles/Home.module.css';
import TabGroup from '../components/elements/tab/tab-group';
import { ProductSkeleton } from '../components/elements/product-skeleton';
import ProductCard from '../components/elements/card/product-card';
const Shop = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  return (
    <div>
      <Topnav />
      <Navbar />
      <TabGroup />

      <div className="category-section container">
        {isLoading && <ProductSkeleton />}

        {products?.map(product => (
          <div>
            <ProductCard
              title={product.title}
              price={product.price}
              cardImg={product.image}
              imgAlt={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
