import React, { useState, useEffect } from 'react';
import cardData from '../../Homepage/Structure/subcomponents/cardData'; // Import the data array

const images = [
  'https://via.placeholder.com/800x400',
  'https://via.placeholder.com/800x400',
  'https://via.placeholder.com/800x400',
  'https://via.placeholder.com/1000x400'
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change slide every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
    <section className="carousel-container">

      <div className="carousel">
      <div className="label d-flex">
                    <p className="varienttxt mt-3 fw-bold">
                        <span className="text-wrapper">USER</span>
                        <span className="span">&nbsp;</span>
                        <span className="text-wrapper-2">REVIEWS</span>
                    </p></div>
        <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div
              key={index}
              className={index === currentIndex ? 'slide active' : 'slide'}
            >
            <section className='d-flex review-cardgg'>
                <div className='d-flex review-card'>
                    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</div>
                    <div><img className="main_card_image" src='https://logohistory.net/wp-content/uploads/2023/01/Hyundai-Logo.png' alt={cardData[0].title} /></div>
                </div>
                <div className='d-flex review-card'>
                    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</div>
                    <div><img className="main_card_image" src='https://logohistory.net/wp-content/uploads/2023/01/Hyundai-Logo.png' alt={cardData[0].title} /></div>
                </div>
            </section>
            </div>
          ))}
        </div>

      </div>

      <div className="pagination">
        {images.map((_, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'dot active' : 'dot'}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </section>
    <div className='button-dwn-main'>
        <div className='button-dwn'>
        SHARE YOUR REVIEW
            </div></div>
            </>
  );
};

export default Reviews;
