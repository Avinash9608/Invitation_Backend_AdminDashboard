import React from 'react'
import HeroSection from './Hero'
import MidSection from './MidSection'
import Pricing from './Pricing'

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <MidSection/>
    <section id='pricing'>
    <Pricing/>
    </section>
    </>
  )
}

export default HomePage