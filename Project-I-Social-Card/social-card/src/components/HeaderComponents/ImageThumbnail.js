
import React from 'react';
import './Header.scss';
import logo from './lambdaLogo.jpeg'

const ImageThumbnail = () => {
  return (
    <img src={logo} alt="lambdaLogo" className="lambdaPic"/>
  )
};

export default ImageThumbnail;
