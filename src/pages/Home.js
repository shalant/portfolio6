import React from 'react';
import Header from '../components/Header';
import Particles from 'react-particles-js';
import './home.css'

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
        </div>
    )
}

export default Home
