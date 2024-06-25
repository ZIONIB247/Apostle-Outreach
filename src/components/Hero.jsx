import React from 'react'
import './styles.css'
import logoo from "../assets/logoo.png"


const Hero = () => {
  return (
    <div className='heroWrapper'>
      <div className="leftSide">
       <div className="logoImg">
       <img src={logoo} alt="logo" />
       <h2>Apostle Chidi Alagwu Outreach</h2>

       </div>
        <h1><span>Emergency</span> Help Youth Face This Crisis Today</h1>
        <p>make a monthly gift to help all year long</p>

      </div>
      <div className="rightSide">
        <button className='heroBtn'>Find Shelter</button>

      </div>
    </div>
  )
}

export default Hero
