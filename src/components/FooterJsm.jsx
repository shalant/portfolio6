import React from 'react';
import './FooterJsm.css';
import headshot from '../assets/images/headshot.jpg'

const Footer = () => {
    return (
        <div className='gpt3__footer section__padding'>
            <div className="gpt3__footer-heading">
                <h1 className='gradient__text'>DougRosenbergDev</h1>
            </div>
            
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={headshot} alt="headshot" className='headshot' />
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <a href='https://www.dougrosenberg.com/'>Doug Rosenberg Music</a>
                    <a href='https://dynamic-wines.herokuapp.com/'>Dynamic Wine</a>
                    <i class="fab fa-github fa-1x"><a href='https://www.github.com/shalant'>Github</a></i>
                    <i class="fab fa-linkedin fa-1x"><a href='https://www.linkedin.com/in/douglasrosenberg/'>LinkedIn</a></i>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <a href='mailto:doug.rosenberg@gmail.com'><p>Contact</p></a>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in Touch</h4>
                    <p>Doug Rosenberg Dev</p>
                    <p>773-627-4279</p>
                    <a href='mailto:doug.rosenberg@gmail.com'><p>doug.rosenberg@gmail.com</p></a>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>© 2021 DougRosenbergDev. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
