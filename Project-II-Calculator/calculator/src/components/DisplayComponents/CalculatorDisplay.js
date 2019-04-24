import React from 'react';
import './Display.scss';



const CalculatorDisplay = (props) => {
  return (
    <p className="display">{props.count}</p>
  )
}


export default CalculatorDisplay;
