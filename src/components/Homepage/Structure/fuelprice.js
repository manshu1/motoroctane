import React, { useState } from 'react';

const FuelPrice = () => {
  const fuelPricesByCity = {
    delhi: {
        petrol: 107.2,
        diesel: 96.6,
        cng: 50.9,
        lpg: 55.2,
      },
      mumbai: {
        petrol: 114.5,
        diesel: 106.3,
        cng: 53.9,
        lpg: 60.1,
      },
      bangalore: {
        petrol: 110.7,
        diesel: 100.3,
        cng: 59.2,
        lpg: 55.8,
      },
      chennai: {
        petrol: 112.8,
        diesel: 101.9,
        cng: 58.7,
        lpg: 58.3,
      },
  };

  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleFuelChange = (event) => {
    setSelectedFuel(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const price = selectedCity && selectedFuel ? fuelPricesByCity[selectedCity][selectedFuel] : '';

  return (
    <>
    <section className='select_section_main'>
    <section>
      <div>
        <div className='fule_text'>FUEL <span className='fule_colour'>PRICES</span></div>
        <div className='select_section'>
        <div className='select_section_under'>
        <div>
          <select className='select_fuel' id="fuel" value={selectedFuel} onChange={handleFuelChange}>
            <option value="">Choose Fuel</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="cng">Cng</option>
            <option value="lpg">Lpg</option>
          </select>
        </div>

        <div>
          <select className='select_fuel' id="city" value={selectedCity} onChange={handleCityChange}>
            <option value="">Choose City</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
            <option value="chennai">Chennai</option>
          </select>
        </div>

        {selectedCity && selectedFuel && (
          <div className='select_fuel_price'>
            ₹{price.toFixed(2)}
          </div>
        )}
      </div></div>
      </div>
      </section>
      <section className='ad_space'>
        <div>Ad Banner</div>
      </section>
      </section>
    </>
  );
};

export default FuelPrice;
