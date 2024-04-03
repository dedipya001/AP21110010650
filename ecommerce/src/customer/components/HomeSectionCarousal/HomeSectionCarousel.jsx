// import React, { useState } from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
// import { Button } from '@mui/material';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { data } from '../../../data/data';
// import 'react-alice-carousel/lib/alice-carousel.css';

// const HomeSectionCarousel = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     const responsive = {
//         0: { items: 1 },
//         568: { items: 2 },
//         1024: { items: 5 },
//     };
//     const slidePrev = () => setActiveIndex(activeIndex - 1);
//     const slideNext = () => setActiveIndex(activeIndex + 1)

//     const syncActiveIndex = ({ item }) => setActiveIndex(item)
//     const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);
//     return (
//         <div className='border'>
//             <div className='relative p-5'>
//                 <AliceCarousel
//                     items={items}
//                     disableButtonsControls
//                     responsive={responsive}
//                     disableDotsControls={false}
//                     onSlideChanged={syncActiveIndex}
//                     activeIndex={activeIndex}
//                 />
//                 {activeIndex !== items.length - 5 &&
//                     <Button
//                         variant="contained"
//                         className='z-50 bg-white'
//                         onClick={slideNext}
//                         sx={{ position: 'absolute', top: '8rem', right: '0rem' }}
//                         color='primary'
//                         aria-label='next'
//                     >
//                         <ArrowForwardIosIcon />
//                     </Button>}

//                 {activeIndex !== 0 && <Button
//                     variant="contained"
//                     sx={{ position: 'absolute', top: '8rem', left: '1rem' }}
//                     color='primary'
//                     className='z-50 bg-white'
//                     aria-label='previous'
//                     onClick={slidePrev}
//                 >
//                     <ArrowBackIosIcon />
//                 </Button>}
//             </div>
//         </div>
//     );
// };

// export default HomeSectionCarousel;

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const HomeSectionCarousel = ({ data,sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => {
        setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const slideNext = () => {
        setActiveIndex((prevIndex) => Math.min(prevIndex + 1, Math.ceil(data.length / 5) - 1));
    };

    const renderSlides = () => {
        const slides = [];
        for (let i = 0; i < data.length; i += 5) {
            const slideItems = data.slice(i, i + 5).map((item, index) => (
                <div key={i + index} style={slideItemStyle}>
                    <HomeSectionCard product={item} />
                </div>
            ));
            slides.push(<div key={i} style={slideStyle}>{slideItems}</div>);
        }
        return slides;
    };

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 5 },
    };

    return (
        <div className='border'>
            <h1 className='text-2xl font-bold text-center'>{sectionName}
            </h1>

            <div className='relative p-5'>
                <Carousel
                    selectedItem={activeIndex}
                    onChange={setActiveIndex}
                    showArrows={false}
                    showStatus={false} // Hide status
                    showIndicators={false} // Hide indicators
                    emulateTouch
                    responsive={responsive}
                >
                    {renderSlides()}
                </Carousel>

                {activeIndex !== Math.ceil(data.length / 5) - 1 && (
                    <Button
                        variant="contained"
                        className='z-50 bg-white'
                        onClick={slideNext}
                        style={{ position: 'absolute', top: '8rem', right: '0rem' }}
                        color='primary'
                        aria-label='next'
                    >
                        <ArrowForwardIosIcon />
                    </Button>
                )}

                {activeIndex !== 0 && (
                    <Button
                        variant="contained"
                        style={{ position: 'absolute', top: '8rem', left: '1rem' }}
                        color='primary'
                        className='z-50 bg-white'
                        aria-label='previous'
                        onClick={slidePrev}
                    >
                        <ArrowBackIosIcon />
                    </Button>
                )}
            </div>
        </div>
    );
};

// Inline CSS styles for the slide container and slide items
const slideStyle = {
    display: 'flex',
    alignItems: 'center', // Align items vertically
    justifyContent: 'space-between', // Distribute items evenly
};

const slideItemStyle = {
    flex: '0 0 calc(20% - 20px)', 
    marginRight: '2%', 
};

export default HomeSectionCarousel;
