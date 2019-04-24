import React from 'react';
import './Button.scss';




const NumberButton = props => {
  return (
    <div className="numberButton">
    {props.numsProp.map((item, index) => {
      if (index===3 || index===7 || index===11 || item==='='){
        return <button className="button color-button" key={index}>{item}</button>
      }else {
        return <button className="button" key={index}>{item}</button>
      }
    })}
   </div>
 )

}

export default NumberButton;
