import React from 'react'
import HeroSection from '../components/home/Hero'
import WhyChooseUs from '../components/home/Whychooseus'
import LanguageStack from '../components/home/LanguageStack'
import AboutUs from '../components/home/AboutUs'
function Home () {
  return (
    <div className='bg-white'>
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <LanguageStack />
      
    </div>
  )
}

export default Home
