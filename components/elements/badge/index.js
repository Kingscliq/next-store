import React from 'react';
import styles from './badge.module.css';

const Badge = ({ className, label, onClick }) => {
  return (
    <div className={[styles.badge, `${className}`].join(' ')} onClick={onClick}>
      {label}
    </div>
  );
};

export default Badge;
