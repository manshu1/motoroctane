import React from 'react'
import Cards from './subcomponents/cards'

const featuredcars = () => {
  return (
    <section className='featurd_car'>
<div className="label">
    <p className="FIND-YOUR-PERFECT">
      <span className="text-wrapper">FEATURED </span>
      <span className="span">&nbsp;</span>
      <span className="text-wrapper-2">CARS</span>
    </p>
  </div>    <ul className='search_tabs'>
    <div className='full_tabs'><li>POPULAR</li></div>
    <div className='full_tabs'><li>NEW</li></div>
    <div className='full_tabs'><li>UPCOMING</li></div>
    <div className='full_tabs'><li>MY SHORTLIST</li></div>
  </ul>
  <Cards />
    </section>
  )
}

export default featuredcars;