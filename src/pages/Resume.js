import React from 'react';
import './resume.css';
import resume from '../assets/images/DouglasRosenbergResumeDec2021.png'

function Resume() {
    return (
        <div className='resume__container'>
            <div className='resume-link'>
                <a href='https://drive.google.com/file/d/1nVuDMgo_U-KQoDzbxjR4AbpHF87_Zqbv/view?usp=sharing'>Resume</a>
            </div>
            <div className='resume-div'>
                <img src={resume} alt='resume' className='resume-img'></img>
            </div>
        </div>
    )
}

export default Resume;