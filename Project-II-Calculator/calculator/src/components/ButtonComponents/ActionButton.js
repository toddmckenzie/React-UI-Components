import React from 'react';
import './Button.scss';


const ActionButton = (props, index) => {
  return (
    <button className="clear" key={index}>{props.action}</button>
  )
}


export default ActionButton;
