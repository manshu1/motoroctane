import React, { useState } from 'react';
import '../../../main.css';

const MobileMenu = () => {
  const [overlayHeight, setOverlayHeight] = useState('0%');

  const openNav = () => {
    setOverlayHeight('100%');
  };

  const closeNav = () => {
    setOverlayHeight('0%');
  };

  return (
    <div className='menubar'>
      <div className="overlay" style={{ height: overlayHeight }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div className="overlay-content">
          <a>CARS</a>
          <a>CONSULT US</a>
          <a>YOUTUBE VIDEOS</a>
          <a>SHARE REVIEWS</a>
          <a>MY HISTORY</a>
          <a>CALCULATORS</a>
        </div>
      </div>

      <span style={{ fontSize: '30px',color:'var(--white)', cursor: 'pointer' ,    marginLeft: '92%'}} onClick={openNav}>
        &#x2630;
      </span>
    </div>
  );
};

export default MobileMenu;
