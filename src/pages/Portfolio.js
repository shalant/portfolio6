import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import './portfolio.css';

function Portfolio () {
    return (
        <div className='portfolio__container'>
            <div className='portfolio__container-header'>
                <h1>My story, through programming</h1>
                <h2 >"I" built this slideshow using Javascript, and watching 5 different Youtube tutorials</h2>
                <p>These are projects from my bootcamp</p>
                <p>Scroll down to see the 30 projects I've completed via YouTube "builds"</p>
            </div>
            <div className='portfolio__container-carousel'>
                <ImageSlider slides={SliderData} />
            </div>
        </div>
    )
}

export default Portfolio;