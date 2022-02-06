import subscribeStyles from './Subscribe.module.css';
import { FaAngleRight } from "react-icons/fa"; 
import { useFormik } from 'formik';
import { useEffect } from 'react';


const Subscribe = () => {
    const validate = values => {
        const errors = {};
       
        if (formik.touched.email && !formik.values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)) {
          errors.email = 'Invalid email address';
        }
      
        return errors;
    };
     
    const formik = useFormik({
        initialValues: {
          email: '',
        },
        validate,
        onSubmit: values => {
            alert("Newsletter Subscription is sucessful")
            // alert(JSON.stringify(values, null, 2));
        },
    });



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

                    <div>
                        <div className={subscribeStyles.flexed2}>
                            <form onSubmit={formik.handleSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    onChange={formik.handleChange}
                                    // value={formik.values.email}
                                />                            
                                
                                <button 
                                    type="submit" 
                                    className={subscribeStyles.icon}
                                >
                                    < FaAngleRight />
                                </button>
                            </form>

                            
                        </div>
                        <p className={subscribeStyles.emailError}>
                            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        </p>
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default Subscribe
