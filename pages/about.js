import React from 'react';
import ProductCard from '../components/elements/card/product-card';
import ListItem from '../components/elements/list-item';
import { Speaker } from '../assets/images';

const About = ({ text }) => {
  return (
    <div>
      {/* <ListItem href="/about" icon={<FaShoppingCart />} badgeLabel="1" /> */}
      <div className="category-section container">
        <ProductCard cardImg={Speaker} />
        <ProductCard cardImg={Speaker} />
        <ProductCard cardImg={Speaker} />
        <ProductCard cardImg={Speaker} />
        <ProductCard cardImg={Speaker} />
        <ProductCard cardImg={Speaker} />
        <ProductCard cardImg={Speaker} />
        <ProductCard cardImg={Speaker} />
      </div>
    </div>
  );
};
export default About;
