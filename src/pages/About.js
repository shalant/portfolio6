import React from 'react';
import './about.css';
import { SiMysql, SiRedux, SiMongodb, SiJest, SiMicrosoftword, SiMicrosoftexcel, SiMaterialui } from 'react-icons/si';
import { IconContext } from "react-icons";
import headshot from '../assets/images/headshot.jpg';

function About() {
    return (
        <div className='about'>
            <h1 className='about__header'>About Doug Rosenberg Dev</h1>
            <img src={headshot} alt='me' className='headshot' />
            <p className='about-text'>Full Stack Junior Web Developer with a background in Music and BS in Chemistry, 20 years performing/ teaching music. Passionate about coding with MERN stack and working with teammates. Strong independent learner that enjoys pithy challenges. Looking forward to my new career creating value for a company.</p>
            <div className='icons'>
                <div className='fontawesome-icons'>
                    <i class="fab fa-html5 fa-4x"></i>
                    <i class="fab fa-css3-alt fa-4x"></i>
                    <i class="fab fa-js-square fa-4x"></i>
                    <i class="fab fa-react fa-4x"></i>
                    <i class="fab fa-node fa-4x icons-wrap"></i>
                    <i class="fas fa-database fa-4x icons-wrap"></i>
                    <i class="fab fa-npm fa-4x" icons-wrap></i>
                    <i class="fab fa-bootstrap fa-4x icons-wrap"></i>
                    <i class="fas fa-passport fa-4x icons-wrap"></i>
                </div>
                <div className='react-icons'>
                    <IconContext.Provider value={{ size: '60px', margin: '50px 20px 5px', padding: '10px' }}>
                        <SiRedux className='react-icons' />
                        <SiMysql className='react-icons' />
                        <SiMongodb className='react-icons' />
                        <SiJest className='react-icons' />
                        <SiMicrosoftword className='react-icons' />
                        <SiMicrosoftexcel className='react-icons' />
                        <SiMaterialui className='react-icons' />
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default About
