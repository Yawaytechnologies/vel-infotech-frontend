import React from 'react'
import ReviewsSection from '../components/Reviews/ReviewSection';
import ReviewsCarousel from '../components/Reviews/ReviewCarousel';
import ReviewsBanner from '../components/Reviews/ReviewBanner';
import ReviewCard1 from '../components/Reviews/ReviewCard1';
import ReviewBanner2 from '../components/Reviews/ReviewBanner2';
import ReviewBanner3 from '../components/Reviews/ReviewBanner3';



const Reviews = () => {
  return (
    <div>
      <ReviewsBanner />
      
      
      
      <ReviewsCarousel />
      <ReviewCard1 />
      <ReviewBanner2 />
      <ReviewBanner3 />
      
      
      

    </div>
  )
}

export default Reviews
