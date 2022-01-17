import checkoutStyles from '../styles/checkout.module.css';
import Image from 'next/image';
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import btnStyles from '../components/elements/button/button.module.css';

const checkout = () => {
    return (
        <section>
            <div className={checkoutStyles.progress}>
                
            </div>
            

            <div className={checkoutStyles.containerFlexed}>
                <div className={checkoutStyles.payment}>
                    <div className={checkoutStyles.paymentMethod}>
                        <div>
                            <h1>
                                Payment Method
                            </h1>
                            <p>
                                How will you like to pay?
                                <span className={checkoutStyles.totalPrice}>
                                    $480
                                </span>
                            </p>
                        </div>

                        <div>
                            <div>
                                <div className={checkoutStyles.bigCircle}>
                                    <div className={checkoutStyles.smallCircle}>

                                    </div>
                                </div>
                                <span>
                                    Credit or Debit Card
                                </span>
                            </div>

                            <div>
                                <p>
                                    < FaCcVisa />
                                </p>

                                <p>
                                    < FaCcMastercard />
                                </p>

                                <p>
                                    < FaCcPaypal />
                                </p>
                            </div>
                        </div>

                        <form>
                            <div>
                                <label>
                                    Card holder's name
                                </label>
                                <input 
                                    type="text"
                                    placeholder="The name on the card"
                                />
                            </div>

                            <div>
                                <label>
                                    Card number
                                </label>
                                <input 
                                    type="text"
                                    placeholder="The card number"
                                />
                            </div>

                            <div>
                                <div>
                                    <label>
                                        Card number
                                    </label>
                                    <input 
                                        type="text"
                                        placeholder="The card number"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className={checkoutStyles.cart}>
                        <div>
                            <label>
                                Expiry Date
                            </label>
                            <select 
                                name='expireMM'
                                className={checkoutStyles.month}    
                            >
                                <option value=''>Month</option>
                                <option value='01'>January</option>
                                <option value='02'>February</option>
                                <option value='03'>March</option>
                                <option value='04'>April</option>
                                <option value='05'>May</option>
                                <option value='06'>June</option>
                                <option value='07'>July</option>
                                <option value='08'>August</option>
                                <option value='09'>September</option>
                                <option value='10'>October</option>
                                <option value='11'>November</option>
                                <option value='12'>December</option>
                            </select> 

                            <select 
                                name='expireYY'
                                className={checkoutStyles.year}      
                            >
                                <option value=''>Year</option>
                                <option value='20'>2021</option>
                                <option value='21'>2022</option>
                                <option value='22'>2023</option>
                                <option value='23'>2024</option>
                                <option value='24'>2025</option>
                            </select> 
                        </div>

                        <div>
                            <label>
                                CVV
                            </label>
                            <input 
                                type="numbers"
                                maxLength="3"
                            />                        
                        </div>
                    </div>

                    <div>                    
                        <input 
                            type="checkbox"                        
                        />    
                        <span>
                            Save card details for future use    
                        </span>                    
                    </div>

                    <div>
                        <button
                            className={btnStyles.payBtn}
                            onClick={() => alert('Button Clicked')}
                        >
                            Pay now 
                        </button>
                    </div>
                </div>

                <div className={checkoutStyles.cartHistory}>
                    <div>
                        <div>
                            <h3>
                                Shopping Cart
                            </h3>
                        </div>

                        <div>
                            <div>
                                <div>
                                <Image 
                                    src="/Mac.png" 
                                    alt="Vercel Logo" 
                                    width={101} 
                                    height={101}                        
                                    quality='100'      
                                    // className={newsStyles.newsImg}                  
                                />
                                </div>
                                <div>
                                    <p>
                                        Luxury Fashion Necklace Earring 
                                        Bracelet Ring Set Gold Color
                                    </p>
                                    <p>
                                        Amount:{" "}
                                        <span>
                                            $100
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <Image 
                                        src="/Mac.png" 
                                        alt="Vercel Logo" 
                                        width={101} 
                                        height={101}                        
                                        quality='100'      
                                        // className={newsStyles.newsImg}                  
                                    />
                                </div>
                                <div>
                                    <p>
                                        Luxury Fashion Necklace Earring 
                                        Bracelet Ring Set Gold Color
                                    </p>
                                    <p>
                                        Amount:{" "}
                                        <span>
                                            $100
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <Image 
                                        src="/Mac.png" 
                                        alt="Vercel Logo" 
                                        width={101} 
                                        height={101}                        
                                        quality='100'      
                                        // className={newsStyles.newsImg}                  
                                    />
                                </div>
                                <div>
                                    <p>
                                        Luxury Fashion Necklace Earring 
                                        Bracelet Ring Set Gold Color
                                    </p>
                                    <p>
                                        Amount:{" "}
                                        <span>
                                            $100
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default checkout
