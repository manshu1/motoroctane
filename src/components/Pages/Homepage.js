import React from 'react'
import Header from '../Homepage/Structure/header'
import Adbanner1 from '../Homepage/Structure/Adbanner1'
import Searchbar from '../Homepage/Structure/Search'
import Cards from '../Homepage/Structure/subcomponents/cards'
import Adbanner2 from '../Homepage/Structure/Adbanner2'
import Fuelprice from '../Homepage/Structure/fuelprice'
import FeatureCar from '../Homepage/Structure/featuredcars'
import Adbanner3 from '../Homepage/Structure/Adbanner3'
import Brands from '../Homepage/Structure/brands'
import LatestVideo from '../Homepage/Structure/youtubevideos';



export const Homepage = () => {
  return (
    <>
        <Header />
        <Adbanner1 />
       <div className='back_image'> <Searchbar />
        <Cards />
        <Adbanner2 />
        <Fuelprice /></div>
        <FeatureCar />
        <Adbanner3 />
        <Brands />
        <LatestVideo channelLink="https://www.youtube.com/channel/UCSXOsOIzeJqJb4h0QlimDww" />

    </>
  )
}
export default Homepage;
