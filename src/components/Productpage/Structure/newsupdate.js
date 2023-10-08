import React from 'react'
import {useState} from 'react';
import ScrachNews from '../../../Images/scrach.png';




const newss = [
    { image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200724042713_Tata-Nexon-FL-front-tracking.jpg&w=726&h=482&q=75&c=1', url: 'https://via.placeholder.com/31x31',title:'Does the Toyota Glanza petrol manual deliver on the claimed mileage?', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, ' },
    { image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200724042713_Tata-Nexon-FL-front-tracking.jpg&w=726&h=482&q=75&c=1', url: 'https://via.placeholder.com/31x31',title:'Does the Toyota Glanza petrol manual deliver on the claimed mileage?', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, ' },
    { image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200724042713_Tata-Nexon-FL-front-tracking.jpg&w=726&h=482&q=75&c=1', url: 'https://via.placeholder.com/31x31',title:'Does the Toyota Glanza petrol manual deliver on the claimed mileage?', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, ' },
    { image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200724042713_Tata-Nexon-FL-front-tracking.jpg&w=726&h=482&q=75&c=1', url: 'https://via.placeholder.com/31x31',title:'Does the Toyota Glanza petrol manual deliver on the claimed mileage?', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, ' },
    { image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200724042713_Tata-Nexon-FL-front-tracking.jpg&w=726&h=482&q=75&c=1', url: 'https://via.placeholder.com/31x31',title:'Does the Toyota Glanza petrol manual deliver on the claimed mileage?', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, ' },
    { image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200724042713_Tata-Nexon-FL-front-tracking.jpg&w=726&h=482&q=75&c=1', url: 'https://via.placeholder.com/31x31',title:'Does the Toyota Glanza petrol manual deliver on the claimed mileage?', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, ' },
    { image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200724042713_Tata-Nexon-FL-front-tracking.jpg&w=726&h=482&q=75&c=1', url: 'https://via.placeholder.com/31x31',title:'Does the Toyota Glanza petrol manual deliver on the claimed mileage?', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, ' },

  ];









  const NewsSection = () => {
    const newsWidth = 270; // Fixed width of each news
    const newssCount = newss.length;
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % newssCount);
    };
  
    const handlePrevious = () => {
      setCurrentIndex((currentIndex - 1 + newssCount) % newssCount);
    };
  
    const containerStyle = {
      transform: `translateX(-${currentIndex * newsWidth}px)`,
      transition: 'transform 0.3s ease 0s',
    };
  
    return (
        <div className='d-flex justify-content-center'>
      <section className='d-flex align-items-center card-section-top'>
        <button className="slider_btn_white" onClick={handlePrevious}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <div className="news-cardsection frnewwws">
          <div className="d-flex" style={containerStyle}>
            {newss.map((news, index) => (
              <div key={index} href={news.url} className='card-body-com card-body-com-new'>
                <img src={news.image} alt="news" className="com-image" />
                
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
  
  


const Newsupdate = () => {
  return (
    <section>
<div className="carousel">
      <div className="label d-flex">
                    <p className="varienttxt mt-3 fw-bold">
                        <span className="text-wrapper">USER</span>
                        <span className="span">&nbsp;</span>
                        <span className="text-wrapper-2">REVIEWS</span>
                    </p></div></div>

        <NewsSection />
<div className='mt-5'></div>
  </section> 
  )
}

export default Newsupdate;