import React from 'react';
import './Footer.scss';

import comment from './comment.png';
import retweet from './retweet.png';
import like from './like.png';
import mail from './mail.png';

const Footer = () => {
  return (
    <div className="foot">
      <img src={comment} />
      <img src={retweet} />
      <img src={like} />
      <img src={mail} />
    </div>
  )
}

export default Footer;
