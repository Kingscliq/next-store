import newsStyles from '../styles/Newsletter.module.css';
import Button from '../components/Button';
import btnStyles from '../components/button.module.css';
import Image from 'next/image';

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

                        
                        <div className={newsStyles.imgContainer}>
                            <Button
                                text="Buy Now"
                                className={btnStyles.btn_white}
                                onClick={() => alert('Button Clicked')}
                            />
                            <div className={newsStyles.imgDetails}>
                                <Image 
                                    src="/rightIcon.svg" 
                                    alt="right Icon" 
                                    width={72} 
                                    height={16} 
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <div className={newsStyles.newsletterImg}>
                    <Image 
                        src="/newsletterImg.svg" 
                        alt="Vercel Logo" 
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
