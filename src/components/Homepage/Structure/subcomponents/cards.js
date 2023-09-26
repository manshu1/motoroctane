import React from 'react';
import {useState} from 'react';

import './card.css';
import seater from '../../../../Images/icons/seat.png';
import petrol from '../../../../Images/icons/gas.png';
import manul from '../../../../Images/icons/machin.png';
import ncap from '../../../../Images/icons/privi.png';
import cardData from './cardData.js'; // Import the data array

const Cards = () => {
        const cardWidth = 400;
        const [currentIndex, setCurrentIndex] = useState(0); // Initialize the current index
      
        const handleNext = () => {
          setCurrentIndex(currentIndex + 1);
        };
      
        const handlePrevious = () => {
          setCurrentIndex(currentIndex - 1);
        };
      
  return (
    <div className='container'>
            <button className='slider_btn' onClick={handlePrevious} disabled={currentIndex === 0}><ion-icon name="chevron-back-outline"></ion-icon> </button>
    <div className='cards_section'>
      {cardData.map((card) => (
      <section className='main_card_body'  style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`, // Slide animation
          }}>
        <div key={card.id} className='main_card'>
          <div className="bookmarkRibbon"></div>
          <div className="inside_card">
          <div className="inside_card_title">{card.title}<span>{card.title2}</span></div>
          <img className="main_card_image" src={card.imageSrc} alt={card.title} />
          <div className="stars">{card.star}</div>
          <section className='info_card'>
          <div className='info_card_variants'>Variants <span style={{ color: 'var(--red)'}}>{card.variants}</span></div>
          <div style={{ color: '#B1081A',fontWeight: '600'}}>
  <span style={{ color: 'var(--black)' }}>₹</span> 10,44,000 - <span style={{ color: 'var(--black)' }}>₹</span> 18,20,000
</div>
          <div>Ex-Showroom | On-Road</div></section>
          </div>
        </div>
     
      <section className='main_card_info'>
        <div className='side_info'> <img className='icon_image' src={seater} alt="Seater Icon" /> Seater info</div>
        <div className='side_info'> <img className='icon_image' src={petrol} alt="Petrol Icon" /> Petrol info</div>
        <div className='side_info'> <img className='icon_image' src={manul} alt="Manual Icon" /> Manual info</div>
        <div className='side_info'> <img className='icon_image' src={ncap} alt="NCAP Icon" />NCAP info</div>
      </section>
    </section> ))}
    </div>
    <button className='slider_btn' onClick={handleNext} disabled={currentIndex === cardData.length - 2}><ion-icon name="chevron-forward-outline"></ion-icon></button>

    </div>
  );
};

export default Cards;
