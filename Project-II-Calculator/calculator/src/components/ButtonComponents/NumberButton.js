import React from 'react';
import './Button.scss';




const NumberButton = props => {
  return (
    <div className="numberButton">
    {props.numsProp.map((item, index) => {
      if (item==='/' || item==='+' || item==='-' || item==='X' || item==='='){
        return <button className="button color-button" key={index}>{item}</button>
      }else {
        return <button className="button" key={index}>{item}</button>
      }
    })}
   </div>
 )

}

export default NumberButton;
