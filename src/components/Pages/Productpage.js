import React from 'react';
import Header from '../Homepage/Structure/header';
import Productsection from '../Productpage/Structure/productsection';
import Adbanner2 from '../Productpage/Structure/Adbanner2';
import Youtubevideo from '../Productpage/Structure/youtubevideo';
import CarPros from '../Productpage/Structure/pros_cons';
import Variants from '../Productpage/Structure/variants';
import ColorsVariants from '../Productpage/Structure/colorvariants';
import Mileage from '../Productpage/Structure/mileage';
import FuelCost from '../Productpage/Structure/fuelcost';
import Reviews from '../Productpage/Structure/reviews';
import History from '../Productpage/Structure/myhistory';
import Adbanner3 from '../Productpage/Structure/Adbanner3';
import Newsupdate from '../Productpage/Structure/newsupdate';
import Carupdate from '../Productpage/Structure/carcomparision';
import FeaturedCar from '../Homepage/Structure/featuredcars';
import Footer from '../Homepage/Structure/footer';


const Productpage = () => {
  return (
    <>
    <Header />
    <Productsection />
    <Youtubevideo channelLink="https://www.youtube.com/channel/UCSXOsOIzeJqJb4h0QlimDww" />
    <Adbanner2 />
    <CarPros />
    <Variants />
    <ColorsVariants />
    <Adbanner2 />
    <Mileage />
    <FuelCost />
    <Reviews />
    <History />
    <Adbanner3 />
    <Newsupdate />
    <Carupdate />
    <FeaturedCar />
    <Footer />
    </>
  )
}

export default Productpage;