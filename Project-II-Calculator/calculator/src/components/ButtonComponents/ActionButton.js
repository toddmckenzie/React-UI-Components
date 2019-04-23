import React from 'react';
import './Button.scss';


const ActionButton = (props, index) => {
  return (
    <p className="clear" key={index}>{props.action}</p>
  )
}


export default ActionButton;
