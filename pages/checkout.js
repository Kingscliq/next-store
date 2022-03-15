import checkoutStyles from '../styles/checkout.module.css';
import Image from 'next/image';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';
import btnStyles from '../components/elements/button/button.module.css';
import { Form, Formik, useField } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup'

const CustomTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>
        {label}
      </label>  
        <input {...field} {...props}/>
        {meta.touched && meta.error ? (
          <div className={checkoutStyles.emailError}>
            {meta.error}
          </div>
        ) : null}
      
    </>
  )
}
 
const CustomCheckbox = ({children, ...props}) => {
  const [field, meta] = useField(props, 'checkbox');

  return (
    <>
      <label >             
        <input type="checkbox" {...field} {...props}/>
        <div>
          {children}
        </div>
      </label>   
        {meta.touched && meta.error ? (
          <div className={checkoutStyles.emailError}></div>
        ) : null}
      
    </>
  )
}

const checkout = () => {

  return (
    <section className={checkoutStyles.checkout}>
      <div className={checkoutStyles.wrapper}>
        <div className={checkoutStyles.timelineArea}>
          <div className={checkoutStyles.lineArea}></div>
          <div className={checkoutStyles.singleItem}>
            <p className={checkoutStyles.firstCircle}>Add to cart</p>
          </div>

          <div
            className={`${checkoutStyles.singleItem} ${checkoutStyles.active}`}
          >
            <p className={checkoutStyles.secondCircle}>Shipping and payment</p>
          </div>

          <div className={checkoutStyles.singleItem}>
            <p className={checkoutStyles.thirdCircle}>Done</p>
          </div>
        </div>
      </div>

      <div className={checkoutStyles.containerFlexed}>
        <div className={checkoutStyles.payment}>
          <div className={checkoutStyles.paymentMethod}>
            <div className={checkoutStyles.paymentMethodHeader}>
              <h1>Payment Method</h1>
              <p>
                How will you like to pay?
                <span className={checkoutStyles.totalPrice}>$480</span>
              </p>
            </div>

            <div className={checkoutStyles.creditFlexed}>
              <div className={checkoutStyles.circleFlexed}>
                <div className={checkoutStyles.bigCircle}>
                  <div className={checkoutStyles.smallCircle}></div>
                </div>
                <span>Credit or Debit Card</span>
              </div>

              <div className={checkoutStyles.creditCards}>
                <p>
                  <FaCcVisa className={checkoutStyles.creditIcon} />
                </p>

                <p>
                  <FaCcMastercard className={checkoutStyles.creditIcon} />
                </p>

                <p>
                  <FaCcPaypal className={checkoutStyles.creditIcon} />
                </p>
              </div>
            </div>
          </div>

          

          <Formik
            initialValues = {{
              name: "",
              num: "",
              cvv: "",
              acceptedTerms: false
            }}
            validationSchema= {Yup.object().shape({
              name: Yup.string()
                .min(3, "Must be t least 3 charcters")
                .max(18, "18 characters or less")
                .required("Required"),
              num: Yup.string()
                .min(3, "Must be 16 charcters")                                
                .required("Required"), 
              cvv: Yup.number()                
                .min(3, "Must equal 3 numbers")
                .required("Required"), 
              acceptedTerms: Yup.boolean()
                .required("Required")
                .oneOf([true], "You must accept the terms and condition")  
            })}
            onSubmit={(values, {setSubmitting, resetForm}) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false)
              }, 3000)
            }}
          >
            
            {props => (
              <Form>
                <div>
                  <CustomTextInput
                    label="Card holder's name" 
                    name="name"
                    type="text"
                    placeholder="The name on the card"                    
                  />
                </div>

                <div>
                  <CustomTextInput
                    label="Card number" 
                    name="num"
                    type="text"
                    placeholder="The card number"                    
                  />
                </div>

                <div className={checkoutStyles.cart}>
                  <div>
                    <label>Expiry Date</label>
                    <select 
                      name="expireMM" 
                      className={checkoutStyles.month}
                    >
                      <option value="">Month</option>
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>

                    <select 
                      name="expireYY" 
                      className={checkoutStyles.year}
                    >
                      <option value="">Year</option>
                      <option value="20">2021</option>
                      <option value="21">2022</option>
                      <option value="22">2023</option>
                      <option value="23">2024</option>
                      <option value="24">2025</option>
                    </select>
                  </div>

                  <div>
                    <CustomTextInput
                      label="CVV" 
                      name="cvv"
                      type="number"                                         
                    />
                  </div>
                </div>

                <div className={checkoutStyles.acceptedTerm}>
                  <CustomCheckbox name="acceptedTerms">
                    I accept the terms and conditions
                  </CustomCheckbox>
                </div>

                <div>
                  <button
                    className={checkoutStyles.payBtn}
                    type="submit"                 
                  >
                    {props.isSubmitting ? 'Loading ...' : 'Proceed to checkout'}
                  </button>
              </div>
              </Form>
            )
            }
            {/* <form>
              <div>
                <label>{"Card holder's name"}</label>
                <input 
                  type="text" 
                  placeholder="The name on the card"                   
                />                
              </div>

              <div>
                <label>Card number</label>
                <input 
                  type="text" 
                  placeholder="The card number"                   
                />
              </div>

              <div className={checkoutStyles.cart}>
                <div>
                  <label>Expiry Date</label>
                  <select 
                    name="expireMM" 
                    className={checkoutStyles.month}
                  >
                    <option value="">Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>

                  <select 
                    name="expireYY" 
                    className={checkoutStyles.year}
                  >
                    <option value="">Year</option>
                    <option value="20">2021</option>
                    <option value="21">2022</option>
                    <option value="22">2023</option>
                    <option value="23">2024</option>
                    <option value="24">2025</option>
                  </select>
                </div>

                <div>
                  <label>CVV</label>
                  <input 
                    type="numbers" 
                    maxLength="3"                     
                  />
                </div>

              </div>

              <div className={checkoutStyles.saveDetails}>
                <input 
                  type="checkbox" 
                />
                <span>Save card details for future use</span>
              </div>

              <div>
                <button
                  className={checkoutStyles.payBtn}
                  type="submit"                 
                >
                  Pay now
                </button>
              </div>
            </form> */}
            
          </Formik>
 
        </div>

        <div className={checkoutStyles.cartHistory}>
          <div>
            <div className={checkoutStyles.cartHistoryHeader}>
              <h3>Shopping Cart</h3>
            </div>

            <div className={checkoutStyles.cartOrder}>
              <div className={checkoutStyles.cartOrderFlexed}>
                <div>
                  <Image
                    src="/Mac.png"
                    alt="Vercel Logo"
                    width={50}
                    height={50}
                    quality="100"
                    // className={newsStyles.newsImg}
                  />
                </div>
                <div className={checkoutStyles.cartOrderDetails}>
                  <p>
                    Luxury Fashion Necklace Earring Bracelet Ring Set Gold Color
                  </p>
                  <p className={checkoutStyles.cartPrice}>
                    Amount: <span>$100</span>
                  </p>
                </div>
              </div>

              <div className={checkoutStyles.cartOrderFlexed}>
                <div>
                  <Image
                    src="/Mac.png"
                    alt="Vercel Logo"
                    width={50}
                    height={50}
                    quality="100"
                    // className={newsStyles.newsImg}
                  />
                </div>
                <div className={checkoutStyles.cartOrderDetails}>
                  <p>
                    Luxury Fashion Necklace Earring Bracelet Ring Set Gold Color
                  </p>
                  <p className={checkoutStyles.cartPrice}>
                    Amount: <span>$100</span>
                  </p>
                </div>
              </div>

              <div className={checkoutStyles.cartOrderFlexed}>
                <div>
                  <Image
                    src="/Mac.png"
                    alt="Vercel Logo"
                    width={50}
                    height={50}
                    quality="100"
                    // className={newsStyles.newsImg}
                  />
                </div>
                <div className={checkoutStyles.cartOrderDetails}>
                  <p>
                    Luxury Fashion Necklace Earring Bracelet Ring Set Gold Color
                  </p>
                  <p className={checkoutStyles.cartPrice}>
                    Amount: <span>$100</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default checkout;
