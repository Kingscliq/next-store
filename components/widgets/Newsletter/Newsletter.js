import newsStyles from './Newsletter.module.css';
import collectionStyles from '../collection-slider/CollectionSlider.module.css';
import btnStyles from '../../elements/button/button.module.css';
import Image from 'next/image';
import { FaAngleRight } from "react-icons/fa";
import Link from 'next/link';

const Newsletter = () => { 
    return (
        <section className={newsStyles.newsletter}>
            <div className={newsStyles.container}>
                <div className={newsStyles.content}>
                    <div className={newsStyles.topic}>
                        <span className={newsStyles.smallFont}>
                            All Ups For Grabs
                        </span>

                        <h3>
                            Enjoy up to 70% off!
                        </h3>
                    </div>

                    

                    <div>
                        <p>
                            Grab your limited-time discount and enjoy
                            70% off on all our products 
                        </p>

                        <Link href="/shop">
                            <div className={newsStyles.imgContainer}>
                                <button
                                    className={btnStyles.btn_whitee}
                                    // onClick={() => alert('Button Clicked')}                                
                                >
                                  Start shopping                             
                                </button>

                                <div className={newsStyles.imgDetailss}>
                                    < FaAngleRight style={{color: 'white'}}/>
                                </div>
                            </div>
                        </Link>
                        
                    </div>

                </div>

                <div className={newsStyles.newsletterImg}>
                    <Image 
                        src="/newsletterImg.svg" 
                        alt="woman shopping happiness" 
                        width={720} 
                        height={481}                        
                        quality='100'      
                        className={newsStyles.newsImg}                  
                    />
                </div>
            </div>
        </section>
    )
}

export default Newsletter
