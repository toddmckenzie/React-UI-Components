import React from 'react';
import './App.scss';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="box">
       <div className="top">
        <p className="display">0</p>
       </div>
       <div className="flex">
          <ActionButton action={actions[0]} />
          <NumberButton numsProp={numbers} />
          <ActionButton action={actions[1]} />
          <NumberButton numsProp={equals} />
        </div>
    </div>
  )
};

const actions = ['clear', 0]
const numbers = ['/',7,8,9,'X',4,5,6,'-',1,2,3,'+'];
const equals = ['='];



export default App;
