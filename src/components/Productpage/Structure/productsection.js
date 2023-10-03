import React from 'react'
import './product.css';
import cardData from '../../Homepage/Structure/subcomponents/cardData';


const productsection = () => {
  return (
    <section>
    <div>
    <div className="label">
    <p className="FIND-YOUR-INFO mt-5 fw-bold">
      <span className="text-wrapper">FIND YOUR PERFECT</span>
      <span className="text-wrapper-2">{cardData[0].title2}</span>
    </p>
    <p className='textunder-infoma'>Motor Octane’s verdict: 4/5*</p>
  </div>
  <ul className='search_tabs'>
    <div className='full_tabs_new active'><li>OVERVIEW</li></div>
    <div className='full_tabs_new'><li>SPECS</li></div>
    <div className='full_tabs_new'><li>VARIANTS</li></div>
    <div className='full_tabs_new'><li>MILEAGE</li></div>
  </ul>
  </div>
  <section className='card-car-full-product'>
  <div className='card-car-full-product-info'>
    <div><img className="main-product-image" src={cardData[0].imageSrc} alt={cardData.title} /></div>
    <div>
        <div className='d-flex justify-content-between'>
            <div>
            <div className="inside_card_title_product">{cardData[0].title}<span>{cardData[0].title2}</span></div>                
            <div className="product-launch d-flex align-items-center">LAUNCHED IN JUNE 2021<ion-icon name="information-circle-outline" className='infomation-gray'></ion-icon></div>                
            <div className="product-price">₹ 8.5  - 11.5 Lakhs</div>                
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='rating-inno d-flex flex-row'>4.1 &#x2B50;</div>
                <div className='rating-inno-full'>2054 reviews</div>
            </div>
        </div>
        <div>
            <div>ON ROAD MUMBAI <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
  <path d="M15 2.625L13 0.875L11 2.625L13 4.375L15 2.625Z" fill="#B1081A"/>
  <path d="M11 2.625L4.5 8.3125L6.5 10.0625L10.75 6.34375L13 4.375L11 2.625Z" fill="#B1081A"/>
  <path d="M4.5 8.3125L3.5 10.9375L6.5 10.0625L4.5 8.3125Z" fill="#B1081A"/>
  <path d="M13.5 6.5625V13.125H1V2.1875H8.5M15 2.625L13 0.875M15 2.625L10.75 6.34375M15 2.625L13 4.375M13 0.875L4.5 8.3125M13 0.875L11 2.625M4.5 8.3125L3.5 10.9375L6.5 10.0625M4.5 8.3125L6.5 10.0625M4.5 8.3125L11 2.625M6.5 10.0625L10.75 6.34375M11 2.625L13 4.375M13 4.375L10.75 6.34375" stroke="#B1081A" stroke-linecap="round" stroke-linejoin="round"/>
</svg> | EMI 7095/- ONWARDS</div>
            <div className='price-product-brea'>VIEW PRICE BREAKUP</div>
            <div className='d-flex flex-row justify-content-between'>
                <div className='changecar-product active'>CHANGE CAR</div>
                <div className='changecar-product'>SHARE A REVIEW</div>
            </div>
        </div>
    </div>
  </div>
  <div></div>
  </section>
    </section>
      )
}

export default productsection