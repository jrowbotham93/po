import React from 'react';

const Button = ({
  styles,
  text,
  icon,
  }) => {
    return (
        <button className={styles}>
            <i className={icon}></i>
            {text}
        </button>
    );
  }

export default Button;