import React from 'react';
import Image from 'next/image';
import { Speaker } from '../../../../assets/images';
import cardStyles from './product-card.module.css';
import btnStyles from '../../button/button.module.css';
import Button from '../../button';

const ProductCard = ({ cardImg, imgAlt, title, price }) => {
  const [overlay, setOverlay] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  return (
    <section
      className={cardStyles.card_container}
      onMouseOver={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
    >
      <div className={cardStyles.img_container}>
        <Image src={cardImg} alt={imgAlt} height={500} width={500} />
      </div>
      {overlay && (
        <div className={cardStyles.card_overlay}>
          <div>
            <h3>{title}</h3>
          </div>
          <div>
            <div className={cardStyles.price_box}>${price}</div>
            <div>
              <Button
                className={btnStyles.btn_outline_light}
                label="Buy Now"
                loading={loading}
                loadingText={'Loading...'}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCard;
