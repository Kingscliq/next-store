import React from 'react';
import Image from 'next/image';
import { Speaker } from '../../../../assets/images';
import cardStyles from './product-card.module.css';
import btnStyles from '../../button/button.module.css';
import Button from '../../button';

const ProductCard = ({ cardImg, imgAlt }) => {
  const [overlay, setOverlay] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  return (
    <section
      className={cardStyles.card_container}
      onMouseOver={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
    >
      <div className={cardStyles.img_container}>
        <Image src={cardImg} alt={imgAlt} />
      </div>
      {overlay && (
        <div className={cardStyles.card_overlay}>
          <div>
            <h3>Text</h3>
          </div>
          <div>
            <div className={cardStyles.price_box}>$205</div>
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
