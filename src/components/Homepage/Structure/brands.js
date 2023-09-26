import React from 'react'
import {useState} from 'react';
import ScrachNewBrand from '../../../Images/scrach.png';



const logos = [
    { src: 'hi.png', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
    // Add more logos here
    { src: 'https://via.placeholder.com/31x31', link: 'https://via.placeholder.com/31x31' },
  ];









  const LogosSection = () => {
    const logoWidth = 50; // Fixed width of each logo
    const logosCount = logos.length;
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % logosCount);
    };
  
    const handlePrevious = () => {
      setCurrentIndex((currentIndex - 1 + logosCount) % logosCount);
    };
  
    const containerStyle = {
      transform: `translateX(-${currentIndex * logoWidth}px)`,
    };
  
    return (
        <div className='center_logo'>
      <section className='brand_logos'>
        <button className="slider_btn" onClick={handlePrevious}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <div className="logos-section">
          <div className="logos-container" style={containerStyle}>
            {logos.map((logo, index) => (
              <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
                <img src={logo.src} alt="Logo" className="logo-image" />
              </a>
            ))}
          </div>
        </div>
        <button className="slider_btn" onClick={handleNext}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </section>
      </div>
    );
  };
  
  


const brands = () => {
  return (
    <section>
        <img className='scrach-image-brand' src={ScrachNewBrand} alt='scrach'></img>    
    <div className="label">
    <p className="FIND-YOUR-PERFECT brand mt-3">
      <span className="text-wrapper">BROWSE BY</span>
      <span className="span">&nbsp;</span>
      <span className="text-wrapper-2">BRANDS</span>
    </p>
  </div>

        <LogosSection />

  </section> 
  )
}

export default brands;