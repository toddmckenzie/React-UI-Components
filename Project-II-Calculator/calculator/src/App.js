import React from 'react';
import './App.scss';

import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className="box">
       <div className="top">
       </div>
        <NumberButton props={numbers} />
    </div>
  );
};

const numbers = ['/',7,8,9,'x',4,5,6,'-',1,2,3,'+',0];




export default App;
