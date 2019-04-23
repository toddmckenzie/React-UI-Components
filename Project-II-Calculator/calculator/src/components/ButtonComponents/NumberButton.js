import React from 'react';
import './Button.scss';




const NumberButton = props => {
  return (
    <div>
    {props.numsProp.map((item, index) => {
      return <button className="button" key={index}>{item}</button>
    })}
   </div>
 )

}

export default NumberButton;
