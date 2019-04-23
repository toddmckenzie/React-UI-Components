import React from 'react';
import './Button.scss';




const NumberButton = props => {
  return (
    <div className="numberButton">
    {props.numsProp.map((item, index) => {
      if (index===0 || index===4 || index===8 || index===12){
        return <button className="button color-button" key={index}>{item}</button>
      }else {
        return <button className="button" key={index}>{item}</button>
      }
    })}
   </div>
 )

}

export default NumberButton;
