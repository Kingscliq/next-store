import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import About from './about';
import React from 'react';
import Button from '../components/elements/Button';
import btnStyles from '../components/elements/button/button.module.css';
import badgeStyles from '../components/elements/badge/badge.module.css';
import Badge from '../components/elements/badge';
import { HomepageShowcase } from '../components/elements/carousel/homepage-showcase';
import Navbar from '../components/widgets/navbar';
import CategriesCard from '../components/elements/card/categories-card';
import TabGroup from '../components/elements/tab/tab-group';
import { useGetAllProductsQuery } from '../store/products/products-api';
import ProductCard from '../components/elements/card/product-card';
import { ProductSkeleton } from '../components/elements/product-skeleton';

export default function Home() {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  // const [aboutText, setAboutText] = React.useState('Welcome to my about Page');
  const electronicProducts = products?.filter(
    product => product.category === 'electronics'
  );

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />

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
      <TabGroup />

      <div className="category-section container">
        {isLoading && <ProductSkeleton />}

        {electronicProducts?.map(product => (
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
}

// export const getStaticProps = async () => {
//

//   return {
//     props: {
//       data,
//     },
//   };
// };
