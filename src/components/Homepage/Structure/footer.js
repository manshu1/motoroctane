import React from 'react'
import logo from '../../../Images/mainlogo.png'
import brandklin from '../../../Images/brandklin.png'

const footer = () => {
  return (
    <footer>
    <section className='inside-footer'>
      <div className='link-logos'>
        <div className='d-flex'>
        <ul className='links-footer d-flex'>
          <li>ABOUT US</li>
          <li>TERMS & CONDITIONS</li>
          <li>CONTACT US</li>
          <li>ADVERTISE</li>
        </ul>
        </div>
        <div className='d-flex footer-image'>
          <img src={logo} alt='Motor Octane' />
          <div className='d-flex flex-column copyright-txt'>
            <div className='d-flex flex-row'>All rights reserved © 2006 - 2023. www.motoroctane.com</div>
            <p>Visitor Agreement & Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className='social-power'>
        <div>
          <div className='logos-link'>
            <div><ion-icon name="logo-youtube"></ion-icon></div>
            <div><ion-icon name="logo-facebook"></ion-icon></div>
            <div><ion-icon name="logo-instagram"></ion-icon></div>
            <div></div>
            <div><ion-icon name="logo-whatsapp"></ion-icon></div>
          </div>
          <div className='d-flex mt-4'>
          Powered by <img className='brandklin ml-2' src={brandklin} alt='brandkiln' />
          </div>
        </div>
      </div>
    </section>
    </footer>
  )
}

export default footer