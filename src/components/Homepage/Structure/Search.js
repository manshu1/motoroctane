import React from 'react'


const Search = () => {
  return (
    <div>    
    <div className="label">
    <p className="FIND-YOUR-PERFECT">
      <span className="text-wrapper">FIND YOUR</span>
      <span className="span">&nbsp;</span>
      <span className="text-wrapper-2">PERFECT CAR</span>
    </p>
  </div>
  <ul className='search_tabs'>
    <div className='full_tabs'><li>SEARCH</li></div>
    <div className='full_tabs'><li>ASSIST ME</li></div>
    <div className='full_tabs'><li>CONSULT US</li></div>
  </ul>
      <div className="input_box">
      <input className="input_box_input"
        type="text"
        placeholder="Select Car"
      />
      <div className='search_btn'><ion-icon name="search-outline"></ion-icon></div>
      </div>
      <p className='input_box_below'>E.g.: Jeep Cherokee</p>
      <div className='advance_bars'>
        <ul className='search_tabs addmargin'>
            <li className='advance_bars_back'>UNDER <div className="price-range">8L</div></li><div className='margin_gap' />
            <li className='advance_bars_back'>UNDER <div className="price-range">15L</div></li><div className='margin_gap' />
            <li className='advance_bars_back'>UNDER <div className="price-range">25L</div></li><div className='margin_gap' />
            <li className='advance_bars_back'>UNDER <div className="price-range">50L</div></li><div className='margin_gap' />
            <li className='advance_bars_back'>ABOVE <div className="price-range">50L</div></li>
        </ul>
      </div>
  </div>
  )
}

export default Search;