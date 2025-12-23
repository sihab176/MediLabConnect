import BankSearch from '@/components/BankSearch/BankSearch'
import BloodHeroSection from '@/components/BankSearch/BloodHeroSection'
import HowItWorks from '@/components/BankSearch/HowItWorks'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className="sticky top-0 left-0 w-full z-[50]">
          <Navbar/>
        </div>
        <BloodHeroSection/>
        <BankSearch/>
        <HowItWorks/>
        <Footer/>
    </div>
  )
}

export default page