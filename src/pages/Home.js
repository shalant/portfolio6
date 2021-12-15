import React from 'react';
import Header from '../components/Header';
import Particles from 'react-particles-js';
import ReactWeather from 'react-open-weather';
// import 'react-open-weather/lib/css/ReactWeather.css';
import './home.css';

function Home() {
    return (
        <div className='home'>
          <Particles 
            className='particles-canvas'
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 900
                  }
                },
                shape: {
                  type: 'polygon',
                  stroke: {
                    width: 6,
                    color: 'rgba(200,65,10,10)'
                  }
                }
              }
            }}
          />
          <Header />
          <ReactWeather forecast="today" apikey="b04b2a052fb4b71af764d1f2a6d8f3ab" type="auto" />
        </div>
    )
}

export default Home
