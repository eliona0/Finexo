import React from 'react'
import Hero from '../Components/Hero'
import OurServices from '../Components/OurServices'
import AboutUs from '../Components/AboutUs'
import WhyChooseUs from '../Components/WhyChooseUs'
import OurTeam from '../Components/OurTeam'

const Home = () => {
  return (
    <div>
        <Hero/>
        <OurServices/>
        <AboutUs/>
        <WhyChooseUs/>
        <OurTeam/>
    </div>
  )
}

export default Home