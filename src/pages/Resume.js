import React from 'react';
import './resume.css';
import resume from '../assets/images/DouglasRosenbergResume.png'

function Resume() {
    return (
        <div className='resume__container'>
            <div className='resume-link'>
                <a href='https://docs.google.com/document/d/1G1z3cVN6IjHW4M2zVytsoE6g_-fWETb0qTSSZqI05Tk/edit?usp=sharing'>Resume</a>
            </div>
            <div className='resume-div'>
                <img src={resume} alt='resume' className='resume-img'></img>
            </div>
        </div>
    )
}

export default Resume;