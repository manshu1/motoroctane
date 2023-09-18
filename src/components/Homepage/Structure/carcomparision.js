import React from 'react'
import {useState} from 'react';
import shortImage from '../../../Images/shortimg.jpg';


const CarComparisonData = [
    { src1: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=80&q=80',src2: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/2022-ertiga-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80', Brand: 'Maruti', Model: 'Brezza', Price: '7.99 - 13.96 Lakhs ' },
    { src1: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=80&q=80',src2: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/2022-ertiga-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80', Brand: 'Maruti', Model: 'Brezza', Price: '7.99 - 13.96 Lakhs ' },
    { src1: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=80&q=80',src2: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/2022-ertiga-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80', Brand: 'Maruti', Model: 'Brezza', Price: '7.99 - 13.96 Lakhs ' },
    { src1: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=80&q=80',src2: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/2022-ertiga-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80', Brand: 'Maruti', Model: 'Brezza', Price: '7.99 - 13.96 Lakhs ' },
    { src1: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=80&q=80',src2: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/2022-ertiga-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80', Brand: 'Maruti', Model: 'Brezza', Price: '7.99 - 13.96 Lakhs ' },
    { src1: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=80&q=80',src2: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/2022-ertiga-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80', Brand: 'Maruti', Model: 'Brezza', Price: '7.99 - 13.96 Lakhs ' },
    { src1: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=80&q=80',src2: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/2022-ertiga-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80', Brand: 'Maruti', Model: 'Brezza', Price: '7.99 - 13.96 Lakhs ' },
    { src1: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=80&q=80',src2: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/2022-ertiga-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80', Brand: 'Maruti', Model: 'Brezza', Price: '7.99 - 13.96 Lakhs ' },
    { src1: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=80&q=80',src2: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/2022-ertiga-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80', Brand: 'Maruti', Model: 'Brezza', Price: '7.99 - 13.96 Lakhs ' },

  ];
  
  const CarComparisonSection = () => {
    const CarComparisonWidth = 300;
    const CarComparisonCount = CarComparisonData.length;
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % CarComparisonCount);
    };
  
    const handlePrevious = () => {
      setCurrentIndex((currentIndex - 1 + CarComparisonCount) % CarComparisonCount);
    };
  
    const containerStyle = {
      transform: `translateX(-${currentIndex * CarComparisonWidth}px)`,
      transition: 'transform 0.3s ease',
    };
  
    return (
      <div className=''>
        <section className='d-flex align-items-center justify-content-center'>
          <button className="slider_btn_white" onClick={handlePrevious}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <div className="d-flex align-items-center copm-cards">
            <div className="car-com-section" style={containerStyle}>
              {CarComparisonData.map((CarComparison, index) => (
                <div key={index} className="d-flex comparo-card">
                <div>
                    <img src={CarComparison.src1} alt="Car1" className="car-comp-img" />
                  <div className="comp-description">
                    <div className="comp-description-brand">{CarComparison.Brand}</div>
                    <div className="comp-description-model">{CarComparison.Model}</div>
                    <p className="comp-description-price">₹{CarComparison.Price}</p>
                  </div>
                  </div>
                  <div><span className='vs-item'>VS</span></div>
                  <div>
                  <div>
                    <img src={CarComparison.src2} alt="Car2" className="car-comp-img" />
                    <div className="comp-description">
                    <div className="comp-description-brand">{CarComparison.Brand}</div>
                    <div className="comp-description-model">{CarComparison.Model}</div>
                    <p className="comp-description-price">₹{CarComparison.Price}</p>
                  </div>
                  </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
          <button className="slider_btn_white" onClick={handleNext}>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </section>
      </div>
    );
  };
    
  
  const CarComparison = () => {
    return (
      <section className=''>
        <div className="label">
          <p className="FIND-YOUR-PERFECT brand mt-3">
            <span className="text-wrapper text-uppercase">CAR</span>
            <span className="span">&nbsp;</span>
            <span className="text-wrapper-2 text-uppercase">COMPARISON</span>
          </p>
        </div>
  
        <CarComparisonSection />
  
      </section>
    );
  }
  
  export default CarComparison;
  