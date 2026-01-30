import React from 'react'
import HeroSlide from '../components/HeroSlide'
import CategoryProductsSection from './CategoryProductsSection'
import BundleSection from './BundleSection'
import SkinAssessmentSection from './SkinAssessmentSection'
import CustomerServiceSection from './CustomerServiceSection'
import TestimonialsSection from './TestimonialsSection'
import CelebrityReviewsSection from './CelebrityReviewsSection'
import PartnersSection from './PartnersSection'
import {images} from '../../../assets/assets'
import HeroSlider from '../components/HeroSlider'

function HeroSection() {
  return (
    <div className='flex flex-col items-center space-y-0 w-full'>
        <HeroSlider/>
        <PartnersSection/>
        <CategoryProductsSection/>
        <TestimonialsSection/>
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-24">
          <BundleSection />
        </div>
         <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-24">
          <SkinAssessmentSection />
        </div>
        <CustomerServiceSection/>
        <CelebrityReviewsSection/>
    </div>
  )
}

export default HeroSection