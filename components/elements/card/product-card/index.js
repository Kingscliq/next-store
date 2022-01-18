import React from 'react';
import Image from 'next/image';
import cardStyles from './product-card.module.css';
import btnStyles from '../../button/button.module.css';
import Button from '../../button';
import { truncate } from '../../../../utils/truncate';
import ReactStars from 'react-rating-stars-component';
import { checkRatings } from '../../../../utils/check-ratings';

const ProductCard = ({
  cardImg,
  imgAlt,
  title,
  price,
  ratings,
  handleButtonClick,
  buttonText,
}) => {
  const [loading, setLoading] = React.useState(false);
  return (
    <section className={cardStyles.card_container}>
      <div className={cardStyles.img_container}>
        <Image src={cardImg} alt={imgAlt} height={500} width={500} />
      </div>

      <div className={cardStyles.card_content}>
        <div>
          <h3>{truncate(title, 20)}</h3>
        </div>
        <div>
          <ReactStars size={20} value={checkRatings(ratings)} edit={false} />
        </div>
        <div>
          <div className={cardStyles.price_box}>${price}</div>
          <div>
            <Button
              className={btnStyles.btn_black}
              label={buttonText || 'Buy Now'}
              loading={loading}
              loadingText={'Loading...'}
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
