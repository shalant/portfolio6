import React from 'react';
import './resume.css';
import resume from '../assets/images/DouglasRosenbergResume.png'

function Resume() {
    return (
        <div className='resume'>
            <a href='https://docs.google.com/document/d/1G1z3cVN6IjHW4M2zVytsoE6g_-fWETb0qTSSZqI05Tk/edit?usp=sharing'>Resume</a>
            <img src={resume} alt='resume' className='resume'></img>
        </div>
    )
}

export default Resume;