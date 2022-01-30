import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import Button from '../components/elements/button';
import { HomepageShowcase } from '../components/elements/carousel/homepage-showcase';
import CategriesCard from '../components/elements/card/categories-card';
import { useGetAllProductsQuery } from '../store/products/products-api';
import ProductCard from '../components/elements/card/product-card';
import { ProductSkeleton } from '../components/elements/product-skeleton';
import Newsletter from '../components/widgets/Newsletter/Newsletter';
import CollectionSlider from '../components/widgets/collection-slider/CollectionSlider';
import Link from 'next/link';

export default function Home() {
  const { data: products, isLoading } = useGetAllProductsQuery();

  const highestRatedProducts = products?.filter(
    product => product.rating.rate > 4
  );
  return (
    <div>
      <main className={styles.main}>
        <HomepageShowcase />

        <section className={[styles.card_containers, 'mb-3'].join(' ')}>
          <section
            className={[styles.home_categries_section, 'container'].join(' ')}
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
        </section>
      </main>
      <div className="container">
        <Button label="Best Sales" className="btn btn-primary" />
      </div>
      {isLoading && <ProductSkeleton />}
      <div className="category-section container">
        {highestRatedProducts?.map(
          ({ title, price, image, description, rating, id }) => (
            <Link href={`/shop/products/${id}`} key={id}>
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
    </div>
  );
}
