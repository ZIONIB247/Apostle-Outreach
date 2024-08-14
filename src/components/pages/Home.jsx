import React from 'react'
import About from '../subcomponents/About'
import Contact from '../subcomponents/Contact'
// import BannerSlider from '../subcomponents/BannerSlider'
import Slider from '../subcomponents/Slider'
import testOne from "../../assets/pg.jpg";
import testTwo from "../../assets/pg2.jpg";
import testThree from "../../assets/homeless.webp";
import testFour from "../../assets/pg3.jpg";


const Home = () => {
  const images = [
    testOne,
    testTwo,
    testThree,
    testFour
  ];

  return (
    <div>
       <About />
       <Contact />
       {/*<BannerSlider />*/}

       <Slider images={images} autoSlideInterval={3000} />
    </div>
  )
}

export default Home