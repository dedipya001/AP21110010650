import React from 'react'
import { mainCarouselData } from './MainCarousalData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import 'react-alice-carousel/lib/alice-carousel.css';
const MainCarousel = () => {

    const items = mainCarouselData.map((item) => <img className = 'cursor-pointer' src = {item.image} role='presentation' alt = {item.path} />)

  return (
    <AliceCarousel
        mouseTracking
        style={{ zIndex: -1 }}
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
  )
}

export default MainCarousel

