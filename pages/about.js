import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import ListItem from '../components/elements/list-item';
import Navbar from '../components/widgets/navbar';

const About = ({ text }) => {
  return (
    <div>
      {/* <ListItem href="/about" icon={<FaShoppingCart />} badgeLabel="1" /> */}
      <Navbar />
    </div>
  );
};
export default About;
