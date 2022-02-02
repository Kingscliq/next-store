import FooterStyles from './Footer.module.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={FooterStyles.footerDesign}>
      <div className={FooterStyles.footerLogo}>
        <div>
          <h3>Next-Store</h3>
        </div>

        <p>{"Copyright 2021. Company's Name "}</p>
      </div>

      <div className={FooterStyles.socialmediaicons}>
        <p className={FooterStyles.socialicons}>
          <FaFacebookF className={FooterStyles.SM2} />
        </p>

        <p className={FooterStyles.socialicons}>
          <FaLinkedinIn className={FooterStyles.SM2} />
        </p>

        <p className={FooterStyles.socialicons}>
          <FaInstagram className={FooterStyles.SM2} />
        </p>

        <p className={FooterStyles.socialicons}>
          <FaTwitter className={FooterStyles.SM2} />
        </p>
      </div>

      <div className={FooterStyles.socialmediaicons}>
        <p className={FooterStyles.socialicons}>
          <FaCcMastercard className={FooterStyles.icon} />
        </p>

        <p className={FooterStyles.socialicons}>
          <FaCcPaypal className={FooterStyles.icon} />
        </p>

        <p className={FooterStyles.socialicons}>
          <FaCcVisa className={FooterStyles.icon} />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
