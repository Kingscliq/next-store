import TopnavStyles from './Topnav.module.css';
import { FaPhoneAlt } from "react-icons/fa";

const Topnav = () => {
    return (
        <section className={TopnavStyles.container}>
            <p className={TopnavStyles.topnavcall}>
               < FaPhoneAlt />
                <span className={TopnavStyles.containerSpan}>
                    Call us +234 (336) 5666                    
                </span>
            </p>

            <div className={TopnavStyles.topnavflexed}>
                <p className={TopnavStyles.topFirst}>
                    Login
                </p>

                <p className={TopnavStyles.top}>
                    My Account
                </p>

                <p className={TopnavStyles.top}>
                    Contact Us
                </p>
            </div>
        </section>
    )
}

export default Topnav
