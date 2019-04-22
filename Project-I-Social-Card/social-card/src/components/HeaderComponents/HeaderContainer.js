import React from 'react';
import './Header.scss';

import HeaderContent from './HeaderContent.js'
import HeaderTitle from './HeaderTitle.js'
import ImageThumbnail from './ImageThumbnail.js'


const HeaderContainer = () => {
  return (
    <div className="header-contain">
      <div className="header-flex">
        <ImageThumbnail />
        <HeaderTitle />
      </div>
      <HeaderContent />
    </div>
  )
}

export default HeaderContainer;
