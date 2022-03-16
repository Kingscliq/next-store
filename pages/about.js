// import React from 'react';
import aboutStyles from '../styles/about.module.css';
import Image from 'next/image';

const About = ({ text }) => {
  return (
    <section className={aboutStyles.about}>
      <div className={aboutStyles.aboutHeadings}>
        <h2>
          About Us
        </h2>

        <p>
          NextStore is an ecommerce website 
          built by 3 developers using NextJS.
          The importance of having an e-commerce 
          website cannot be over emphasized for
          business owners. 
          The people your website must convince 
          are the ones who most determine the 
          success of your company. They are the 
          shoppers who come there to find out more 
          about the goods you offer. Hence,
          NextStore was built
        </p>
        <p>
          NexStore tried
          to show the reason why people should shop 
          without stress
        </p>
      </div>

      <div className={aboutStyles.aboutImageDiv}>
        <h4>
          NextStore Team
        </h4>

        <div className={aboutStyles.aboutImages}>
          <div className={aboutStyles.aboutImg}>
            <Image src="/section-bg.jpg" alt="about owners" height={300} width={300} />
            <div className={aboutStyles.aboutDev}>
              Ajaezo Kingsley
            </div>
          </div>

          <div className={aboutStyles.aboutImg}>
            <Image src="/section-bg.jpg" alt="about owners" height={300} width={300} />
            <div className={aboutStyles.aboutDev}>
              JuanPedro
            </div>
          </div>

          <div className={aboutStyles.aboutImg}>
            <Image src="/section-bg.jpg" alt="about owners" height={300} width={300} />
            <div className={aboutStyles.aboutDev}>
              Israel Chidera
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
