import React from 'react'
import Header from '../Homepage/Structure/header'
import Adbanner1 from '../Homepage/Structure/Adbanner1'
import Searchbar from '../Homepage/Structure/Search'
import Cards from '../Homepage/Structure/subcomponents/cards'
import Adbanner2 from '../Homepage/Structure/Adbanner2'
import Fuelprice from '../Homepage/Structure/fuelprice'
import FeatureCar from '../Homepage/Structure/featuredcars'
import Adbanner3 from '../Homepage/Structure/Adbanner3'
import Adbanner4 from '../Homepage/Structure/Adbanner4'
import Brands from '../Homepage/Structure/brands'
import LatestVideo from '../Homepage/Structure/youtubevideos';
import TopVideos from '../Homepage/Structure/toppicsforyou';
import MoStories from '../Homepage/Structure/mostories';
import CarComparison from '../Homepage/Structure/carcomparision';
import News from '../Homepage/Structure/newsupdate';
import Footer from '../Homepage/Structure/footer';
// import 'bootstrap/dist/css/bootstrap.css';




export const Homepage = () => {
  return (
    <>
        <Header />
        <Adbanner1 />
          <div className='back_image'>
        <Searchbar />
        <Cards />
        <Adbanner2 />
        <Fuelprice />
          </div>
        <FeatureCar />
        <Adbanner3 />
        <Brands />
        <LatestVideo />
        <TopVideos />
        <MoStories />
        <Adbanner4 />
        <CarComparison />
        <News />
        <Footer />


    </>
  )
}
export default Homepage;
