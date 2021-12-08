import React from 'react';
import '../App.css';
import { SiMysql, SiRedux, SiMongodb, SiJest, SiMicrosoftword, SiMicrosoftexcel, SiMaterialui } from 'react-icons/si';
import { IconContext } from "react-icons";
import headshot from '../assets/images/headshot.jpg';

function About() {
    return (
        <div className='about'>
            <img src={headshot} alt='me' className='headshot' />
            <p className='about-text'>Full Stack Junior Web Developer with a background in Music and BS in Chemistry, 20 years performing/ teaching music. Passionate about coding with MERN stack and working with teammates. Strong independent learner that enjoys pithy challenges. Looking forward to my new career creating value for a company.</p>
            <div className='fontawesome-icons'>
                <i class="fab fa-html5 fa-3x"></i>
                <i class="fab fa-css3-alt fa-3x"></i>
                <i class="fab fa-js-square fa-3x"></i>
                <i class="fab fa-react fa-3x"></i>
                <i class="fab fa-node fa-3x"></i>
                <i class="fas fa-database fa-3x"></i>
                <i class="fab fa-npm fa-3x"></i>
                <i class="fab fa-bootstrap fa-3x"></i>
                <i class="fas fa-passport fa-3x"></i>
            </div>
            <IconContext.Provider value={{ size: '50px', margin: '0 2px 0 px' }}>
                <SiRedux />
                <SiMysql />
                <SiMongodb />
                <SiJest />
                <SiMicrosoftword />
                <SiMicrosoftexcel />
                <SiMaterialui />
            </IconContext.Provider>
        </div>
    )
}

export default About
