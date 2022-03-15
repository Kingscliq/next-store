import React, { useState, useEffect } from 'react';
import ShowcaseStyle from './homepage-showcase.module.css';
import Image from 'next/image';
import Button from '../../button';
import btnStyles from '../../button/button.module.css';
import Styles from '../../../../styles/Home.module.css';
import { Pavilion } from '../../../../assets/images';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useGetAllProductsQuery } from '../../../../store/products/products-api';
import { ProductSkeleton } from '../../product-skeleton';

const HomepageShowcase = () => {
  const { data: products, isLoading } = useGetAllProductsQuery();
  
  const highestRatedProducts = products?.filter(
    product => product.rating.rate > 4
  );

  console.log('====================================');
  console.log(products);
  console.log('====================================');
  
  return (
    <section className={`${ShowcaseStyle.carousel_slider} ${Styles.container}`}>
      <div className={ShowcaseStyle.carousel_item}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1.5}
          breakpoints={{
            240: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >  
          {
            isLoading && <ProductSkeleton />
          }    
          {
            highestRatedProducts?.map(product => (
              <SwiperSlide key={product.id}>
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
              </SwiperSlide>
            ))
          }      
          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>  
        
      </div>

      
    </section>
  );
};

export { HomepageShowcase };
