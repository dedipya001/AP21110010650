import React from 'react'
import MainCarousel from '../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../HomeSectionCarousal/HomeSectionCarousel';
import { womens_kurta } from '../../../data/womens_kurta';
// import { Home } from '@mui/icons-material';
// import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10' >
            </div>
        </div>
    )
}

export default HomePage;