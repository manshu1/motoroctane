import React from 'react'
import {useState} from 'react';



const newss = [
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
        <div className="news-cardsection">
          <div className="d-flex" style={containerStyle}>
            {newss.map((news, index) => (
              <div key={index} href={news.url} className='card-body-com'>
                <img src={news.image} alt="news" className="com-image" />
                <div>
                <div className='news-title'>{news.title}</div>
                <p className='news-description'>{news.description}</p>
                <div className='news-url' href={news.url} >Read More</div>
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
  
  


const News = () => {
  return (
    <section>
    <div className="label">
    <p className="FIND-YOUR-PERFECT brand mt-3">
      <span className="text-wrapper">NEWS</span>
      <span className="span">&nbsp;</span>
      <span className="text-wrapper-2">UPDATE</span>
    </p>
  </div>

        <NewsSection />
<div className='mt-5'></div>
  </section> 
  )
}

export default News;