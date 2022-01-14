import axios from 'axios';
import collectionStyles from '../styles/CollectionSlider.module.css';
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
import Button from './elements/button/index.js';
import btnStyles from '../components/button.module.css';
import newsStyles from '../styles/Newsletter.module.css';
import { FaAngleRight } from "react-icons/fa";

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    console.log("articlesss: ", data)

    return {
      props: {
        ninjas: data
      }
    }
}

const CollectionSlider = ({ninjas}) => {

    console.log("articles", ninjas);

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
                // navigation
                // pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                
            <SwiperSlide>
                <div className={collectionStyles.slides}>
                    <div className={collectionStyles.slidesContent}>
                        <div>
                            <h3>
                                Pallazo trouser- animal skin
                            </h3>

                            <p className={collectionStyles.productDescription}>
                                Take on any task or work function in
                                any of our range of Women's clothing
                            </p>

                            <div>
                                <div className={collectionStyles.productPrice}>
                                    <p>
                                        Price: {" "}
                                        <span className={collectionStyles.price}>
                                            $304
                                        </span>
                                    </p>
                                    
                                    <p>
                                        Size: {" "}
                                        <span className={collectionStyles.size}>
                                            32 Inch
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
                            src="/sliderImg.svg" 
                            alt="Vercel Logo" 
                            width={331} 
                            height={428}     
                            // layout= "fill"                   
                            quality='100'      
                            className={collectionStyles.Imgslides}                  
                        />

                        <div className={collectionStyles.Imgslidess}  >

                        </div>
                        
                    </div>                    
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={collectionStyles.slides}>
                <div className={collectionStyles.slidesContent}>
                        <div>
                            <h3>
                                Pallazo trouser- animal skin
                            </h3>

                            <p className={collectionStyles.productDescription}>
                                Take on any task or work function in
                                any of our range of Women's clothing
                            </p>

                            <div>
                                <div className={collectionStyles.productPrice}>
                                    <p>
                                        Price: {" "}
                                        <span className={collectionStyles.price}>
                                            $304
                                        </span>
                                    </p>
                                    
                                    <p>
                                        Size: {" "}
                                        <span className={collectionStyles.size}>
                                            32 Inch
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
                            src="/sliderImg.svg" 
                            alt="Vercel Logo" 
                            width={331} 
                            height={428}     
                            // layout= "fill"                   
                            quality='100'      
                            className={collectionStyles.Imgslides}                  
                        />
                        {/* 
                        <img
                            src="/public/newsletterImg.svg"
                            alt="dev"
                        /> */}
                    </div> 

                    
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={collectionStyles.slides}>
                    <div className={collectionStyles.slidesContent}>
                        <div>
                            <h3>
                                Pallazo trouser- animal skin
                            </h3>

                            <p className={collectionStyles.productDescription}>
                                Take on any task or work function in
                                any of our range of Women's clothing
                            </p>

                            <div>
                                <div className={collectionStyles.productPrice}>
                                    <p>
                                        Price: {" "}
                                        <span className={collectionStyles.price}>
                                            $304
                                        </span>
                                    </p>
                                    
                                    <p>
                                        Size: {" "}
                                        <span className={collectionStyles.size}>
                                            32 Inch
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
                            src="/sliderImg.svg" 
                            alt="Vercel Logo" 
                            width={331} 
                            height={428}     
                            // layout= "fill"                   
                            quality='100'      
                            className={collectionStyles.Imgslides}                  
                        />
                        {/* 
                        <img
                            src="/public/newsletterImg.svg"
                            alt="dev"
                        /> */}
                    </div> 
   
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className={collectionStyles.slides}>
                    <div className={collectionStyles.slidesContent}>
                        <div>
                            <h3>
                                Pallazo trouser- animal skin
                            </h3>

                            <p className={collectionStyles.productDescription}>
                                Take on any task or work function in
                                any of our range of Women's clothing
                            </p>

                            <div>
                                <div className={collectionStyles.productPrice}>
                                    <p>
                                        Price: {" "}
                                        <span className={collectionStyles.price}>
                                            $304
                                        </span>
                                    </p>
                                    
                                    <p>
                                        Size: {" "}
                                        <span className={collectionStyles.size}>
                                            32 Inch
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
                            src="/sliderImg.svg" 
                            alt="Vercel Logo" 
                            width={331} 
                            height={428}     
                            // layout= "fill"                   
                            quality='100'      
                            className={collectionStyles.Imgslides}                  
                        />
                        {/* 
                        <img
                            src="/public/newsletterImg.svg"
                            alt="dev"
                        /> */}
                    </div> 

                    
                </div>
            </SwiperSlide>

               
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




