import React from 'react';
import './resume.css';
import resume from '../assets/images/resumemay22.png'

function Resume() {
    return (
        <div className='resume__container'>
            <div className='resume-link'>
                <a href='https://docs.google.com/document/d/1_6Gtqw2lek9q9bEinzcdxQ1LMH20wohz/edit?usp=sharing&rtpof=true&sd=true'>Resume</a>
            </div>
            <div className='resume-div'>
                <img src={resume} alt='resume' className='resume-img'></img>
            </div>
        </div>
    )
}

export default Resume;