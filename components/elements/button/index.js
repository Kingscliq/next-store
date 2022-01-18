import React from 'react';
import btnStyle from './button.module.css';
import { Loader } from '../../../assets/icons';
import Image from 'next/image';
// import Button from './elements/button/index.js';
// components\elements\button\index.js
const Button = ({
  label,
  className,
  type,
  onClick,
  loading,
  disabled,
  loadingText,
  style,
}) => {
  return (
    <button
      className={[
        btnStyle.btn,
        loading ? btnStyle.disabled : null,
        `${className}`,
      ].join(' ')}
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      style={style}
    >
      <div className={btnStyle.loading_container}>
        {loading ? (
          <>
            <div>
              <Image src={Loader} alt="Loading..." height="30" width="30" />
            </div>
            <div style={loading ? { opacity: 0.6 } : null}>{loadingText}</div>
          </>
        ) : (
          <div>{label}</div>
        )}
      </div>
    </button>
  );
};

export default Button;
