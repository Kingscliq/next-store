import React, { useState } from 'react';
import ShowcaseStyle from './homepage-showcase.module.css';
import Image from 'next/image';
import Button from '../../button';
import btnStyles from '../../button/button.module.css';
import Styles from '../../../../styles/Home.module.css';
import { Pavilion } from '../../../../assets/images';

const HomepageShowcase = () => {
  const [translateX, setTranslateX] = useState(0);

  const showcaseItems = [1, 2];

  const carourelItemStyle = {
    transform: `translateX(-${translateX * 100}%)`,
  };

  const updatetranslateX = currentTranslateX => {
    if (currentTranslateX >= showcaseItems.length) {
      currentTranslateX = 0;
    }
    if (currentTranslateX < 0) {
      currentTranslateX = showcaseItems.length - 1;
    }

    setTranslateX(currentTranslateX);
    console.log(translateX);
  };

  return (
    <section className={`${ShowcaseStyle.carousel_slider} ${Styles.container}`}>
      <div className={ShowcaseStyle.carousel_item} style={carourelItemStyle}>
        <div className={ShowcaseStyle.main_item}>
          <div>
            <h2>
              HP PAVILION WAVE <br />
              <span>DESKTOP INTEL CORE i3</span>
            </h2>
            <p>lorem ipseum isi una ggggahhh hah ipseum udjk hhd</p>
            <div className={ShowcaseStyle.showcase_btn_container}>
              <Button
                label="ORDER"
                className={btnStyles.btn_primary}
                onClick={() => alert('Button Clicked')}
              />

              <Button
                label="ADD TO CART"
                className={btnStyles.btn_white}
                onClick={() => alert('Button Clicked')}
              />
            </div>
          </div>
          <div>
            <Image src={Pavilion} width={472} height={581} alt="mac image" />
          </div>
        </div>
        <div className={ShowcaseStyle.main_item}>
          <div>
            <h2>
              HP PAVILION WAVE <br />
              <strong>DESKTOP INTEL CORE i3</strong>
            </h2>
            <p>lorem ipseum isi una ggggahhh hah ipseum udjk hhd</p>
            <div className={ShowcaseStyle.showcase_btn_container}>
              <Button
                label="ORDER"
                className={btnStyles.btn_primary}
                onClick={() => alert('Button Clicked')}
              />

              <Button
                label="ADD TO CART"
                className={btnStyles.btn_white}
                onClick={() => alert('Button Clicked')}
              />
            </div>
          </div>
          <div>
            <Image
              src={'/HP Pavilion.png'}
              width={472}
              height={581}
              alt="mac image"
            />
          </div>
        </div>
      </div>

      <button
        className={`${ShowcaseStyle.btn_scroll} ${ShowcaseStyle.btn_scroll_left}`}
        onClick={() => updatetranslateX(translateX - 1)}
      >
        <i className={`${ShowcaseStyle.arrow} ${ShowcaseStyle.left}`}></i>
      </button>

      <button
        className={`${ShowcaseStyle.btn_scroll} ${ShowcaseStyle.btn_scroll_right}`}
        onClick={() => updatetranslateX(translateX + 1)}
      >
        <i className={`${ShowcaseStyle.arrow} ${ShowcaseStyle.right}`}></i>
      </button>
    </section>
  );
};

export { HomepageShowcase };
