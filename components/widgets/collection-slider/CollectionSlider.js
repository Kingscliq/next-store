import axios from 'axios';
import collectionStyles from './CollectionSlider.module.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
// import img1 from '../public/newsletterImg.svg';
// import Button from '../components/Button'; 
import Button from '../../elements/button/index.js';
import btnStyles from '../../elements/button/button.module.css';
import newsStyles from '../Newsletter/Newsletter.module.css';
import { FaAngleRight } from "react-icons/fa";
import { useGetAllProductsQuery } from '../../../store/products/products-api';


const CollectionSlider = () => {
    // useGetAllProductsQuery()
    const { data: products, isLoading } = useGetAllProductsQuery();

    console.log("prod:", products);

    const highestPricedProducts = products?.filter(
        product => product.price > 150
    );
    console.log("hi", highestPricedProducts)
    return (
        <section className={collectionStyles.container}>
            <p className={collectionStyles.containerHeader}>
                Popular this week
            </p>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1.5}
                breakpoints={{
                    "240": {
                        "slidesPerView": 1,
                        "spaceBetween": 10
                    },
                    "640": {
                      "slidesPerView": 1,
                      "spaceBetween": 10
                    },
                    "768": {
                      "slidesPerView": 1.5,
                      "spaceBetween": 10
                    },
                    "1024": {
                      "slidesPerView": 1.5,
                      "spaceBetween": 10
                    }
                }} 
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                
            {highestPricedProducts?.map(product => (
                <SwiperSlide key={product.id}>
                    <div className={collectionStyles.slides}>
                        <div className={collectionStyles.slidesContent}>
                            <div>
                                <h3>
                                    {product.title}
                                </h3>

                                <p className={collectionStyles.productDescription}>
                                    {product.description}
                                </p>

                                <div>
                                    <div className={collectionStyles.productPrice}>
                                        <p>
                                            Price: {" "}
                                            <span className={collectionStyles.price}>
                                                {product.price}
                                            </span>
                                        </p>
                                        
                                        <p>
                                            Rating: {" "}
                                            <span className={collectionStyles.size}>
                                                {product.rating.rate}
                                            </span>
                                        </p>
                                    </div>

                                
                                    <div className={newsStyles.imgContainer}>
                                        
                                        <button
                                            className={btnStyles.btn_darke}
                                            onClick={() => alert('Button Clicked')}
                                        >
                                            Buy now 
                                        </button>

                                        <div className={collectionStyles.imgDetails}>
                                            < FaAngleRight />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={collectionStyles.imgs}>
                            <Image 
                                src={product.image} 
                                alt="Vercel Logo" 
                                width={231} 
                                height={328}     
                                // layout= "fill"                   
                                quality='100'      
                                className={collectionStyles.Imgslides}                  
                            />           
                        </div>                    
                    </div>

                    
                </SwiperSlide>
            ))}

           

               
            </Swiper>
        </section>
    )
}



// export const getStaticProps = async () => {
//     const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)

//     return {
//       props: {
//         articles: res
//       }
//     }
// }

export default CollectionSlider




