import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navbar.css'

function NavbarD() {
    return (
        //i took out 'border-bottom' from the classname because it made a wee border
        <Navbar className='nav' expand='lg' sticky='top'>
            <Navbar.Brand className='brand'>
                <p>DougRosenbergDev.com</p>
            </Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
                <Navbar.Collapse className='nav' id='navbar-toggle'>
                    <Nav className='mr-auto'>
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/about'>About</Link>
                        <Link className='nav-link' to='/portfolio'>Portfolio</Link>
                        <Link className='nav-link' to='/resume'>Resume</Link>
                        <Link className='nav-link' to='/contact'>Contact</Link>
                        {/* <Link className='nav-link' to='/cards'>Cards</Link> */}
                        <Link className='nav-link' to='/links'>Links</Link>
                    
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarD;