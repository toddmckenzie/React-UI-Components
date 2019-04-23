import React from 'react';
import './Button.scss';






const NumberButton = props => {
  return (
    <div>
      {props.nums.map(item => {
        return  <button>item</button>
      })}
    </div>
};

export default NumberButton;
