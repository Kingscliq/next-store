import subscribeStyles from './Subscribe.module.css';
import { FaAngleRight } from "react-icons/fa"; 

const Subscribe = () => {
    return (
        <section className={subscribeStyles.container}>
            <div>
                <div className={subscribeStyles.containerFlex}>
                    <div className={subscribeStyles.flexed1}>
                        <h3>
                            Subscribe to our newsletter
                        </h3>
                        <p>
                            Sign up for our emails and be 
                            the first to know about special 
                            offers,  sales, the latest
                            and much more
                        </p>
                    </div>

                    <div className={subscribeStyles.flexed2}>
                        <form>
                            <input
                                type="text"
                                placeholder="Enter your email"
                            />
                            
                            <button className={subscribeStyles.icon}>
                                < FaAngleRight />
                            </button>
                        </form>
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default Subscribe
