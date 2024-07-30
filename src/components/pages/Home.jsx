import React from 'react'
import About from '../subcomponents/About'
import Contact from '../subcomponents/Contact'
import BannerSlider from '../subcomponents/BannerSlider'
import Slider from '../subcomponents/Slider'
import testOne from "../../assets/bglogo.jpg";
import testTwo from "../../assets/homeless.webp";
import testThree from "../../assets/plan.jpg";
import testFour from "../../assets/build.png";


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
       <BannerSlider />

       <Slider images={images} autoSlideInterval={3000} />
    </div>
  )
}

export default Home