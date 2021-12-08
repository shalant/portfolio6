import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';

const Portfolio = () => {
    return (
        <div>
            <ImageSlider slides={SliderData} />
        </div>
    )
}

export default Portfolio;