import React from 'react'
import HeroSection from '../components/home/Hero'
import WhyChooseUs from '../components/home/Whychooseus'
import LanguageStack from '../components/home/LanguageStack'
function Home () {
  return (
    <div className='bg-white'>
      <HeroSection />
      <WhyChooseUs />
      <LanguageStack />
    </div>
  )
}

export default Home
