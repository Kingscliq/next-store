import React from 'react';
import Image from 'next/image';
import CategoriesCardStyles from './categories-card.module.css';
import Button from '../../button';
import btnStyles from '../../button/button.module.css';

const CategriesCard = ({ imgSrc, imgAlt, categoryHeading }) => {
  return (
    <section className={CategoriesCardStyles.categories_card}>
      <div className={CategoriesCardStyles.categorycard_first_div}>
        <h3>{categoryHeading}</h3>
        <Button
          label="View All"
          className={btnStyles.btn_outline_light}
          onClick={() => alert('Button Clicked')}
        />
      </div>
      <div className={CategoriesCardStyles.categorycard_second_div}>
        <Image src={imgSrc} alt={imgAlt} width={408} height={219} />
      </div>
    </section>
  );
};

export default CategriesCard;
