import React from 'react'
import {useState} from 'react';
import shortImage from '../../../Images/shortimg.jpg';




const Stories = [
    { src: shortImage, link: '../../../Images/video_car.png', title: 'Top 7 features', description: 'Hyundai Creta..' },    
    { src: shortImage, link: '../../../Images/video_car.png', title: 'Top 7 features', description: 'Hyundai Creta..' },    
    { src: shortImage, link: '../../../Images/video_car.png', title: 'Top 7 features', description: 'Hyundai Creta..' },    
    { src: shortImage, link: '../../../Images/video_car.png', title: 'Top 7 features', description: 'Hyundai Creta..' },    
    { src: shortImage, link: '../../../Images/video_car.png', title: 'Top 7 features', description: 'Hyundai Creta..' },    
    { src: shortImage, link: '../../../Images/video_car.png', title: 'Top 7 features', description: 'Hyundai Creta..' },    
    { src: shortImage, link: '../../../Images/video_car.png', title: 'Top 7 features', description: 'Hyundai Creta..' },    
    { src: shortImage, link: '../../../Images/video_car.png', title: 'Top 7 features', description: 'Hyundai Creta..' },    
    { src: shortImage, link: '../../../Images/video_car.png', title: 'Top 7 features', description: 'Hyundai Creta..' },    
    { src: shortImage, link: '../../../Images/video_car.png', title: 'Top 7 features', description: 'Hyundai Creta..' },    
    { src: shortImage, link: '../../../Images/video_car.png', title: 'Top 7 features', description: 'Hyundai Creta..' },    
    { src: shortImage, link: '../../../Images/video_car.png', title: 'Top 7 features', description: 'Hyundai Creta..' },    
    { src: shortImage, link: '../../../Images/video_car.png', title: 'Top 7 features', description: 'Hyundai Creta..' },    
    { src: shortImage, link: '../../../Images/video_car.png', title: 'Top 7 features', description: 'Hyundai Creta..' },    
  ];





  const StoriesSection = () => {
    const StoriesWidth = 100; 
    const StoriesCount = Stories.length;
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % StoriesCount);
    };
  
    const handlePrevious = () => {
      setCurrentIndex((currentIndex - 1 + StoriesCount) % StoriesCount);
    };
  
    const containerStyle = {
      transform: `translateX(-${currentIndex * StoriesWidth}px)`,
      transition: 'transform 0.3s ease',
    };
  
    return (
        <div className='center_storie'>
      <section className='brand_storie d-flex align-items-center'>
        <button className="slider_btn" onClick={handlePrevious}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <div className="storie-section">
          <div className="storie-container" style={containerStyle}>
            {Stories.map((Stories, index) => (
                <div key={index} className="main-storie-section">
              <a key={index} href={Stories.link} target="_blank" rel="noopener noreferrer">
                <img src={Stories.src} alt="Stories" className="logo-image" />
              </a>
              <div className="storie-details">
                  <div className="storie-title">{Stories.title}</div>
                  <p className="storie-dec">{Stories.description}</p>
                </div>
                </div>
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
  
  


const MoStories = () => {
  return (
    <section className='mo-storiesec'>
    <div className="label">
    <p className="FIND-YOUR-PERFECT brand mt-3">
      <span className="text-wrapper text-uppercase">Mo</span>
      <span className="span">&nbsp;</span>
      <span className="text-wrapper-2 text-uppercase">Stories</span>
    </p>
  </div>

        <StoriesSection />

  </section> 
  )
}

export default MoStories;