import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import Button from '../components/elements/Button';
import { HomepageShowcase } from '../components/elements/carousel/homepage-showcase';
import CategriesCard from '../components/elements/card/categories-card';
import { useGetAllProductsQuery } from '../store/products/products-api';
import ProductCard from '../components/elements/card/product-card';
import { ProductSkeleton } from '../components/elements/product-skeleton';
import Newsletter from '../components/widgets/Newsletter/Newsletter';
import CollectionSlider from '../components/widgets/collection-slider/CollectionSlider';
import Subscribe from '../components/widgets/subscribe/Subscribe';
import Footer from '../components/widgets/footer/Footer';
import Link from 'next/link';

export default function Home() {
  const { data: products, isLoading } = useGetAllProductsQuery();

  const electronicProducts = products?.filter(
    product => product.rating.rate > 4
  );
  return ( 
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomepageShowcase />
        <section
          className={`${styles.container} ${styles.home_categries_section}`}
        >
          <div className={styles.home_categries_section_div}>
            <CategriesCard
              imgSrc="/Mac.png"
              imgAlt="mac picture"
              categoryHeading="ELECTRONICS"
            />
          </div>

          <div className={styles.home_categries_section_div}>
            <CategriesCard
              imgSrc="/Mac.png"
              imgAlt="mac picture"
              categoryHeading="CLOTHING"
            />
          </div>
        </section>
      </main>
      <div className="container">
        <Button label="Best Sales" className="btn btn-primary" />
      </div>
      {isLoading && <ProductSkeleton />}
      <div className="category-section container">
        {electronicProducts?.map(
          ({ title, price, image, description, rating, id }) => (
            <Link href={`/shop/products/${id}`}>
              <div>
                <ProductCard
                  title={title}
                  price={price}
                  cardImg={image}
                  imgAlt={description}
                  ratings={rating.rate}
                />
              </div>
            </Link>
          )
        )}
      </div>
      <Newsletter />
      <CollectionSlider />
      <Subscribe />
      <Footer />
    </div>
  );
}
