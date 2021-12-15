import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import './portfolio.css';

const Portfolio = () => {
    return (
        <div>
            <h2 className='portfolio__header'>I built this slideshow using Javascript</h2>
            <ImageSlider slides={SliderData} />
        </div>
    )
}

export default Portfolio;