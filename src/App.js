import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import FooterJsm from './components/FooterJsm';
import Particles from 'react-particles-js';

import NavbarD from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Links from './pages/Links';
import Cards from './components/Cards';
import { Navbar, Nav } from 'react-bootstrap';
import ContactGlove from './pages/ContactGlove';
import { CardsRB } from './pages/CardsRB';

function App() {
  
  return (
    <Router>
      <Container fluid className='app__container'>
        <NavbarD />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={ContactGlove} />
          {/* <Route path='/cards' component={CardsRB} /> */}
          <Route path='/links' component={Links} />
        </Switch>
       
        <FooterJsm />
      </Container>
    </Router>
  );
}

// const customStyles = {
// 	fontFamily:  'Helvetica, sans-serif',
// 	gradientStart:  '#0181C2',
// 	gradientMid:  '#04A7F9',
// 	gradientEnd:  '#4BC4F7',
// 	locationFontColor:  '#FFF',
// 	todayTempFontColor:  '#FFF',
// 	todayDateFontColor:  '#B5DEF4',
// 	todayRangeFontColor:  '#B5DEF4',
// 	todayDescFontColor:  '#B5DEF4',
// 	todayInfoFontColor:  '#B5DEF4',
// 	todayIconColor:  '#FFF',
// 	forecastBackgroundColor:  '#FFF',
// 	forecastSeparatorColor:  '#DDD',
// 	forecastDateColor:  '#777',
// 	forecastDescColor:  '#777',
// 	forecastRangeColor:  '#777',
// 	forecastIconColor:  '#4BC4F7',
// };

export default App;
