import React, { useState } from 'react';
import Color from './color';
import cardData from '../../Homepage/Structure/subcomponents/cardData'; // Import the data array

const ColorVariants = () => {
    const cardWidth = 400;
    const [currentIndex, setCurrentIndex] = useState(0); // Initialize the current index

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1);
    };

    const handlePrevious = () => {
        setCurrentIndex(currentIndex - 1);
    };

    return (
        <section className='youtube-viddeoleft d-flex flex-column'>
            <div className='mainsection-prodfdf'>
                <div className="label">
                    <p className="varienttxt3 mt-3 fw-bold">
                        <span className="text-wrapper">COLOR</span>
                        <span className="span">&nbsp;</span>
                        <span className="text-wrapper-2">VARIANTS</span>
                    </p>
                </div>
                <div className='linesfkbg'></div>
                <div className='chfchfcfch'><Color /></div>
            </div>

            <section>
                <div className='container'>
                    <button className='slider_btn' onClick={handlePrevious} disabled={currentIndex === 0}><ion-icon name="chevron-back-outline"></ion-icon> </button>
                    <div className='cards_section'>
                        {cardData.map((card) => (
                            <section className='main_card_body' style={{
                                transform: `translateX(-${currentIndex * cardWidth}px)`, // Slide animation
                            }}>
                                <div key={card.id} className='main_card insidecolorcard'>
                                <div className='insidecard-image-out'>
                                    <img className="main_card_image" src={card.imageSrc} alt={card.title} />
                                    </div>
                                    <p className='color-card-txt'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </div>
                            </section>
                        ))}
                    </div>
                    <button className='slider_btn' onClick={handleNext} disabled={currentIndex === cardData.length - 1}><ion-icon name="chevron-forward-outline"></ion-icon></button>
                </div>
            </section>
        </section>
    );
}

export default ColorVariants;
